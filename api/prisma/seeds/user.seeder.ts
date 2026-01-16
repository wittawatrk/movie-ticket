import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

export async function seedManyUsers() {
  const password = await bcrypt.hash('PasswordDemo', 10);

  const users = Array.from({ length: 100 }).map((_, i) => ({
    id: randomUUID(),
    username: `user${i + 1}`,
    displayName: `User ${i + 1}`,
    role: UserRole.USER,
    UserSecret: {
      create: {
        hPassword: password,
      },
    },
  }));

  // Add admin
  const final = [
    ...users,
    {
      id: randomUUID(),
      username: 'admin',
      displayName: 'Administrator',
      role: UserRole.ADMIN,
      UserSecret: {
        create: {
          hPassword: await bcrypt.hash('admin', 10),
        },
      },
    },
  ];

  for (const user of final) {
    await prisma.user.upsert({
      where: { username: user.username },
      update: {},
      create: user,
    });
  }

  console.log(`Seeded ${users.length} users`);
}

async function main() {
  await seedManyUsers();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

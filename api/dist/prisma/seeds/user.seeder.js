"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedManyUsers = seedManyUsers;
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
async function seedManyUsers() {
    const password = await bcrypt.hash('PasswordDemo', 10);
    const users = Array.from({ length: 100 }).map((_, i) => ({
        id: (0, crypto_1.randomUUID)(),
        username: `user${i + 1}`,
        displayName: `User ${i + 1}`,
        role: client_1.UserRole.USER,
        UserSecret: {
            create: {
                hPassword: password,
            },
        },
    }));
    const final = [
        ...users,
        {
            id: (0, crypto_1.randomUUID)(),
            username: 'admin',
            displayName: 'Administrator',
            role: client_1.UserRole.ADMIN,
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
//# sourceMappingURL=user.seeder.js.map
# 🎵 Free Concert Tickets

ระบบจองบัตรคอนเสิร์ต  
Stack: Next.js + NestJS + Prisma + PostgreSQL + Docker Compose

---

## 🧱 Services

จาก `docker-compose.yml`

| Service | Container | Port |
|--------|-----------|------|
| PostgreSQL | postgres | 5432 |
| Backend (NestJS) | nest-backend | 3000 |
| Frontend (Next.js) | next-frontend | 3001 |

Frontend: http://localhost:3001  
Backend API: http://localhost:3000/api/v1

---

## 📦 Requirements

- Docker
- Docker Compose

ตรวจสอบ:

```bash

docker compose up -d --build
docker compose exec backend sh
npm run seed
```
## 👤 Test Accounts after run seed

- **Admin**
    - Username: admin
    - Password: admin

- **User**
    - Username: user1-user100
    - Password: PasswordDemo

     

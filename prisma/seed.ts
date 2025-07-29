import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import logger from '../src/utils/logger';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({
    where: { login: 'admin@example.com' }
  });

  if (!existing) {
    const hashed = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
      data: {
        name: 'Admin',
        login: 'admin@example.com',
        password: hashed,
        role: 'ADMIN'
      }
    });
    logger.info('Admin user created');
  } else {
    logger.info('Admin already exists');
  }
}

main()
  .catch((e) => {
    logger.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

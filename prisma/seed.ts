// Creates the first admin account from ADMIN_EMAIL / ADMIN_PASSWORD.
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    console.log('ADMIN_EMAIL / ADMIN_PASSWORD not set, skipping admin account');
    return;
  }
  if (await prisma.user.findUnique({ where: { email } })) {
    console.log(`Admin ${email} already exists`);
    return;
  }
  await prisma.user.create({
    data: {
      email,
      name: 'Club Admin',
      role: 'ADMIN',
      showInDirectory: false,
      passwordHash: await bcrypt.hash(password, 12),
      membership: { create: { status: 'ACTIVE', plan: 'Officer', startedAt: new Date() } },
    },
  });
  console.log(`Created admin account ${email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

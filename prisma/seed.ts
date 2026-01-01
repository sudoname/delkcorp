import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create default admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@delkcorp.com' },
    update: {},
    create: {
      email: 'admin@delkcorp.com',
      password: hashedPassword,
      name: 'Admin',
    },
  });

  console.log('✅ Admin user created: admin@delkcorp.com / admin123');

  // Create default contact info
  const defaultContactInfo = [
    { key: 'email', value: 'contact@delkcorp.com', label: 'Email' },
    { key: 'phone', value: '+1 (234) 567-890', label: 'Phone' },
    { key: 'location', value: 'Global', label: 'Location' },
    { key: 'linkedin', value: 'https://linkedin.com/company/delkcorp', label: 'LinkedIn' },
  ];

  for (const info of defaultContactInfo) {
    await prisma.contactInfo.upsert({
      where: { key: info.key },
      update: { value: info.value, label: info.label },
      create: info,
    });
  }

  console.log('✅ Default contact info created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

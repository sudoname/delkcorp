import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const contactInfo = await prisma.contactInfo.findMany({
      select: {
        key: true,
        value: true,
        label: true,
      },
    });

    const infoMap: { [key: string]: string } = {};
    contactInfo.forEach((info) => {
      infoMap[info.key] = info.value;
    });

    return NextResponse.json(infoMap);
  } catch (error) {
    console.error('Get contact info error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

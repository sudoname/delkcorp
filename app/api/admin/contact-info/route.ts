import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    const contactInfo = await prisma.contactInfo.findMany({
      orderBy: { key: 'asc' },
    });

    return NextResponse.json({ contactInfo });
  } catch (error) {
    console.error('Get contact info error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await requireAuth();
    const { key, value, label } = await request.json();

    const contactInfo = await prisma.contactInfo.upsert({
      where: { key },
      update: {
        value,
        label,
        updatedBy: session.email,
      },
      create: {
        key,
        value,
        label,
        updatedBy: session.email,
      },
    });

    return NextResponse.json({ contactInfo });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.error('Update contact info error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

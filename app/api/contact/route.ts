import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { name, email, company, interest, message } = await request.json();

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create message in database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        company: company || '',
        interest,
        message,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Message received successfully',
      id: contactMessage.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

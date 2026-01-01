import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    await requireAuth();

    // Get total page views
    const totalViews = await prisma.pageView.count();

    // Get unique visitors (approximate based on user agent)
    const uniqueVisitors = await prisma.pageView.groupBy({
      by: ['userAgent'],
      _count: true,
    });

    // Get views by page
    const viewsByPage = await prisma.pageView.groupBy({
      by: ['page'],
      _count: true,
      orderBy: {
        _count: {
          page: 'desc',
        },
      },
    });

    // Get views over time (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentViews = await prisma.pageView.findMany({
      where: {
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    // Group by date
    const viewsByDate: { [key: string]: number } = {};
    recentViews.forEach((view) => {
      const date = view.createdAt.toISOString().split('T')[0];
      viewsByDate[date] = (viewsByDate[date] || 0) + 1;
    });

    return NextResponse.json({
      totalViews,
      uniqueVisitors: uniqueVisitors.length,
      viewsByPage: viewsByPage.map((v) => ({
        page: v.page,
        count: v._count,
      })),
      viewsByDate: Object.entries(viewsByDate).map(([date, count]) => ({
        date,
        count,
      })),
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.error('Get analytics error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

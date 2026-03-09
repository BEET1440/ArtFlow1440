import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get('id');

  if (!contentId) {
    return NextResponse.json({ error: 'Missing content ID' }, { status: 400 });
  }

  // Mock analytics data
  const mockAnalytics = {
    contentId,
    stats: {
      views: Math.floor(Math.random() * 10000),
      engagements: Math.floor(Math.random() * 500),
      conversionRate: (Math.random() * 0.05).toFixed(4),
    },
    recommendations: [
      "Try posting more frequently during peak hours (6 PM - 9 PM)",
      "Add more relevant hashtags related to digital art",
      "Engage more with comments to boost algorithm visibility"
    ]
  };

  return NextResponse.json(mockAnalytics);
}

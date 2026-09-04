import { NextResponse } from 'next/server';
import { getEventById } from '../../../../lib/db';

export async function GET(request, { params }) {
  try {
    const id = params.id;
    if (!id) return NextResponse.json({ error: "Missing event ID" }, { status: 400 });

    const event = await getEventById(id);
    
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch event' }, { status: 500 });
  }
}

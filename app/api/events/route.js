import { NextResponse } from 'next/server';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../../../lib/db';

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.title || !body.dateDay || !body.imageUrl || !body.filterType) {
      return NextResponse.json({ error: 'Missing required fields (title, dateDay, imageUrl, filterType)' }, { status: 400 });
    }

    const newEvent = await addEvent(body);
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('Error adding event:', error);
    return NextResponse.json({ error: error.message || 'Failed to add event' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: 'Event ID is required for update' }, { status: 400 });
    }

    const updated = await updateEvent(body.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json({ error: error.message || 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get('id');

    if (!id) {
      const body = await request.json().catch(() => ({}));
      id = body.id;
    }

    if (!id) {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }

    const res = await deleteEvent(id);
    return NextResponse.json(res);
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete event' }, { status: 500 });
  }
}

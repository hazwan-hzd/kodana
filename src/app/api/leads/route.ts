import { NextResponse } from 'next/server';
import { getLeads, addLead, updateLeadStatus } from '@/lib/leads-store';

export async function GET() {
  const leads = getLeads();
  return NextResponse.json({ success: true, count: leads.length, data: leads });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone || !body.location) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and location are required' },
        { status: 400 }
      );
    }

    const lead = addLead({
      name: body.name,
      phone: body.phone,
      email: body.email || '',
      location: body.location,
      pestCategory: body.pestCategory || 'General',
      propertyType: body.propertyType || 'Terrace / Semi-D',
      urgency: body.urgency || 'MEDIUM',
      source: body.source || 'Contact Form',
      notes: body.notes || '',
    });

    return NextResponse.json({ success: true, message: 'Lead registered successfully', data: lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    if (!body.id || !body.status) {
      return NextResponse.json({ success: false, error: 'Lead ID and status required' }, { status: 400 });
    }

    const updated = updateLeadStatus(body.id, body.status);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update lead' }, { status: 500 });
  }
}

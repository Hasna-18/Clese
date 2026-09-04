import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import path from 'path';
import fs from 'fs/promises';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get('admin_session');

    if (!session || !session.value || !session.value.startsWith('authenticated_')) {
      return NextResponse.json({ error: 'Unauthorized: Admin login required' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');
    const categoryRaw = formData.get('category') || 'general';

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Sanitize category (e.g., events, news, resources, speakers, initiatives, media)
    const category = String(categoryRaw).toLowerCase().replace(/[^a-z0-9_-]/g, '') || 'general';

    // Target directory: public/admin/<category>
    const uploadDir = path.join(process.cwd(), 'public', 'admin', category);
    await fs.mkdir(uploadDir, { recursive: true });

    // Sanitize filename
    const originalName = file.name || 'image.jpg';
    const ext = path.extname(originalName).toLowerCase() || '.jpg';
    const cleanBase = path.basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-')
      .substring(0, 30);
    const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const filename = `${cleanBase || 'upload'}_${uniqueSuffix}${ext}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    // Static URL relative to public directory
    const publicUrl = `/admin/${category}/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      category,
      filename,
      size: buffer.length
    });
  } catch (error) {
    console.error('Image upload failed:', error);
    return NextResponse.json(
      { error: 'Image upload failed: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}

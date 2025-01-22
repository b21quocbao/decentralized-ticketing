import { neon } from '@neondatabase/serverless';

export const dynamic = 'force-dynamic';

export async function GET(request: Request,
  { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const sql = neon(process.env.DATABASE_URL as string);
  const [event] = await sql("SELECT * FROM events WHERE id = $1", [id]);

  return Response.json({
    id: event.id,
    name: event.name,
    description: event.description,
    timeMs: Number(event.time_ms),
    durationMs: Number(event.duration_ms),
    imageUrl: event.image_url,
  })
}
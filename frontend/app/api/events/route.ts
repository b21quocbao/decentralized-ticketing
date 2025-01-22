import { neon } from "@neondatabase/serverless";

export const dynamic = 'force-dynamic';

export async function GET() {
  const sql = neon(process.env.DATABASE_URL as string);
  const data = await sql`SELECT * FROM public.events;`;
  return Response.json(data.map(event => {
    return {
      id: event.id,
      name: event.name,
      description: event.description,
      timeMs: Number(event.time_ms),
      durationMs: Number(event.duration_ms),
      imageUrl: event.image_url,
    };
  }), {
    status: 200,
  });
}

export async function POST(req: Request) {
  const event = await req.json()

  const { name, description, timeMs, durationMs, imageUrl } = event;

  if (!name || !description || !timeMs || !durationMs || !imageUrl) {
    return Response.json({ message: 'Missing required fields' }, {
      status: 400,
    });
  }

  const sql = neon(process.env.DATABASE_URL as string);
  const events = await sql`SELECT * FROM events;`;

  const newEvent = {
    id: (events.length + 1).toString(), // Generate a new ID
    name,
    description,
    timeMs,
    durationMs,
    imageUrl,
  };

  // @ts-ignore
  await sql.transaction('INSERT INTO events (name, description, time_ms, duration_ms, image_url) VALUES ($1, $2, $3, $4, $5)', [
    newEvent.name,
    newEvent.description,
    newEvent.timeMs,
    newEvent.durationMs,
    newEvent.imageUrl,
  ]);

  events.push(newEvent);
  return Response.json(newEvent, { status: 201 });
}
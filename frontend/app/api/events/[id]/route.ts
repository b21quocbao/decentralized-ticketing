import { events } from '../route';

export async function GET(request: Request,
  { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  return Response.json(events.find((e) => e.id === id) || {})
}
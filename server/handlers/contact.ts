export async function handle(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    // Here you would send an email or store in a DB.
    // For demo, just return success.
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

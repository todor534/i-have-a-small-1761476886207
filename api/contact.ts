import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handle } from '../server/handlers/contact';

export default async function (req: VercelRequest, res: VercelResponse) {
  const request = new Request('http://localhost/api/contact', {
    method: req.method,
    headers: req.headers as any,
    body: req.body ? JSON.stringify(req.body) : undefined,
  });
  const response = await handle(request);
  res.status(response.status);
  response.headers.forEach((v, k) => res.setHeader(k, v));
  const text = await response.text();
  res.send(text);
}

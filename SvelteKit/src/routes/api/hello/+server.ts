import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export function GET() {
  return json({ name: 'John Doe' });
}
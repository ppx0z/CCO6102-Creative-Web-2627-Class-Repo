import { json } from '@sveltejs/kit';
import { getAll, create } from '#lib/server/ideasStore.js';

/**@type {import('./$types').RequestHandler} */
export function GET() {
	return json(getAll());
}
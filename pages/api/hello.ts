// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// /api/hello
import type { NextRequest } from "next/server";

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    return new Response(
        JSON.stringify(
            {name: 'Your are good luck!'}
        ), {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    )
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// /api/hello
import {type NextRequest} from "next/server";

export default async function handler(req: NextRequest) {
    console.log(req.url)
    return new Response(
        JSON.stringify(
            {name: 'John Doe'}
        ), {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    )
}

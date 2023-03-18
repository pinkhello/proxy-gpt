// /api/xxx
import type {NextRequest} from "next/server";

export default async function handler(req: NextRequest) {
    const url = new URL(req.url);
    const modUrl = `https://api.openai.com${url.pathname.replace("\/api", "")}`;
    try {
        const resp = await fetch(new Request(modUrl, {
                    method: req.method,
                    headers: req.headers,
                    body: req.body,
                    redirect: 'follow',
                }
            )
        );
        const modResp = new Response(resp.body, resp);
        modResp.headers.set('Access-Control-Allow-Origin', '*');
        return modResp;
    } catch (e) {
        console.log(e);
    }
}

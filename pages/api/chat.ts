// /api/chat
import { type NextRequest } from "next/server";

export const config = {
    runtime: 'edge',
}


export default async function handler(req: NextRequest) {
    const modReq = new Request('https://api.openai.com/v1/chat/completions', {
        method: req.method,
        headers: req.headers,
        body: req.body,
        redirect: 'follow'
    })
    console.log("===" + modReq.method)
    try {
        const resp = await fetch(modReq);
        const modResp = new Response(resp.body, resp);
        modResp.headers.set('Access-Control-Allow-Origin', '*');
        return modResp;
    } catch (e) {
        console.log(e)
    }
}

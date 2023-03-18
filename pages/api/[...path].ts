// /api/xxx

import type { NextRequest } from "next/server";

export const config = {
    runtime: 'edge',
}


export default async function handler(req: NextRequest) {
    const url = new URL(req.url)

    const modUrl = `https://api.openai.com${url.pathname.replace("\/api", "")}`
    console.log(modUrl)
    const modReq = new Request(modUrl, {
        method: req.method,
        headers: req.headers,
        body: req.body,
        redirect: 'follow'
    })
    try {
        const resp = await fetch(modReq);
        const modResp = new Response(resp.body, resp);
        modResp.headers.set('Access-Control-Allow-Origin', '*');
        return modResp;
    } catch (e) {
        console.log(e)
    }
}

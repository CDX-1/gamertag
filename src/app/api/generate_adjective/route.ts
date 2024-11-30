import { generateAdjective } from "@/lib/generator"

export async function GET() {
    const adj = generateAdjective();

    return new Response(JSON.stringify({
        adjective: adj
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
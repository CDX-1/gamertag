import { generateNoun } from "@/lib/generator"

export async function GET() {
    const noun = generateNoun();

    return new Response(JSON.stringify({
        noun: noun
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
import { generateNumber } from "@/lib/generator"

export async function GET() {
    const num = generateNumber();

    return new Response(JSON.stringify({
        number: num
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
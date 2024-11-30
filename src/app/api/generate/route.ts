import { generateAdjective, generateNoun, generateNumber } from "@/lib/generator"

export async function GET() {
    const adj = generateAdjective();
    const noun = generateNoun();
    const num = generateNumber();

    const gamertag = adj.charAt(0).toUpperCase() + adj.substring(1).toLowerCase() + noun.charAt(0).toUpperCase() + noun.substring(1).toLowerCase() + num;
    
    return new Response(JSON.stringify({
        adjective: adj,
        noun: noun,
        number: num,
        gamertag: gamertag
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
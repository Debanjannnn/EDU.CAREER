import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(request: Request) {
    const { } = await request.json()

    const prompt = "Based on the following student profile, suggest the best career paths and missing skills:";

    try {
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        return NextResponse.json({ reply: text })
    } catch (error) {
        console.error('Error generating content:', error)
        return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
    }
}
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { input, type = "Message" } = await request.json();

    if (!input || !input.trim()) {
      return NextResponse.json(
        { error: "Please enter suspicious information." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-5.6-luna",
        instructions:
          "You are GAISN, an AI scam-risk analyst. Analyze the submitted content cautiously. Do not claim certainty unless evidence supports it. Return a concise assessment with: Risk Level (Low/Medium/High/Critical), Risk Score 0-100, Key Red Flags, Explanation, and Recommended Actions. If information is insufficient, clearly say so. Reply in the same language as the user's submitted content.",
        input: `Type: ${type}\n\nContent to analyze:\n${input}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return NextResponse.json(
        { error: data?.error?.message || "AI analysis failed." },
        { status: response.status }
      );
    }

    const analysis =
      data.output
        ?.flatMap((item: any) => item.content || [])
        ?.find((content: any) => content.type === "output_text")?.text ||
      "No analysis returned.";

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error while analyzing." },
      { status: 500 }
    );
  }
}

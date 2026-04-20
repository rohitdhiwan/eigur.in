import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { section, content, jobTitle } = await request.json();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'AI service not configured' }, { status: 503 });

  const prompts: Record<string, string> = {
    summary: `Write a compelling, ATS-optimised professional summary for a ${jobTitle ?? 'professional'} with the following background: "${content}".
      Keep it 3–4 sentences. Be specific, use active voice, and highlight impact.`,
    experience: `Improve these work experience bullet points for a ${jobTitle ?? 'professional'}.
      Make them action-oriented, quantified where possible, and ATS-friendly.
      Keep the same number of bullets. Original: "${content}"`,
    skills: `Suggest 15 relevant technical and soft skills for a ${jobTitle ?? 'professional'} based on: "${content}".
      Return as a comma-separated list only.`,
  };

  const prompt = prompts[section] ?? `Improve this CV section professionally: "${content}"`;

  try {
    const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
      }),
    });

    const data = await res.json();
    const enhanced = data.candidates?.[0]?.content?.parts?.[0]?.text ?? content;

    return NextResponse.json({ enhanced });
  } catch {
    return NextResponse.json({ error: 'Failed to enhance content' }, { status: 500 });
  }
}

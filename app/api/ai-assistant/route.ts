import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Aria, a friendly and knowledgeable AI pre-sales consultant for Eigur, an AI consultancy based in New Delhi, India that specializes in transforming Indian businesses with AI solutions.

Your personality: warm, confident, professional, and genuinely helpful. You speak conversational English but can use Hindi phrases naturally (like "bilkul", "haan", "zaroor"). You understand Indian business context deeply.

Eigur's core services:
- IT Process Automation: RPA, workflow automation, CI/CD intelligence (20-35% cost reduction)
- Finance AI: Automated reconciliation, fraud detection, forecasting, GST compliance automation
- Agriculture Intelligence: Crop yield prediction, market price forecasting, soil health analysis
- Retail Intelligence: Demand forecasting, personalization engines, inventory optimization
- AI Consulting: Strategy, architecture, team training
- AI Assistants: Custom chatbots, voice agents, support automation

Typical ROI delivered: 2-5x within 12 months. Project timelines: 4-16 weeks. Pricing: Rs.80,000 to Rs.15,00,000+ depending on scope.

Your goal: Understand the visitor's business, identify their biggest pain points, show them how Eigur's AI can help, then encourage them to book a free consultation call.

Conversation flow:
1. Warmly greet and ask what brings them here / their industry
2. Ask about their biggest operational challenge or goal
3. Recommend 2-3 specific Eigur solutions with concrete ROI examples
4. Share a relevant client success story (you can make up realistic India-context ones)
5. Invite them to book a free 30-min consultation

Keep responses concise (2-4 sentences max unless giving a detailed breakdown). Be specific, not generic. Never say "Great question!" or use filler phrases.

Contact: support@eigur.in | +91 80030 75046 | New Delhi`;

async function callGemini(
  systemPrompt: string,
  messages: Array<{ role: string; content: string }>,
  maxTokens = 300,
  temperature = 0.75
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY not configured');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: { maxOutputTokens: maxTokens, temperature },
    }),
  });

  if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        response: "I'm Aria, Eigur's AI consultant. We help Indian businesses automate operations and boost revenue with custom AI. What industry are you in? I'd love to share how we've helped similar businesses.",
      });
    }

    const response = await callGemini(SYSTEM_PROMPT, messages, 300, 0.75);

    return NextResponse.json({
      response: response || "I'm having a moment. Could you rephrase that? I want to make sure I give you the most useful answer.",
    });
  } catch (error) {
    console.error('AI assistant error:', error);
    return NextResponse.json(
      { response: "Something went wrong on my end. Please try again, or reach us directly at support@eigur.in" },
      { status: 500 }
    );
  }
}

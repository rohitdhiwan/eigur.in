import { NextRequest, NextResponse } from 'next/server';

async function callGemini(
  systemPrompt: string,
  userPrompt: string,
  maxTokens = 400,
  temperature = 0.8
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY not configured');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      generationConfig: { maxOutputTokens: maxTokens, temperature },
    }),
  });

  if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

const DEMO_PROMPTS: Record<string, { system: string; user: string }> = {
  marketing: {
    system: `You are an expert Indian marketing copywriter. Write compelling, conversion-focused marketing copy for Indian businesses. Use Indian context: mention rupee values, reference Indian market realities, and write in a warm but professional tone.`,
    user: `Write a compelling homepage hero section (headline + subheadline + CTA) for an AI-powered accounting software targeting Indian SMEs. Make it specific, benefits-focused, and use rupee figures.`,
  },
  email: {
    system: `You are an expert B2B sales email writer for the Indian market. Write concise, personalized cold emails that get responses. Reference Indian business pain points.`,
    user: `Write a cold outreach email from Eigur (AI consultancy) to the Operations Head of a mid-size Mumbai textile manufacturer, offering to automate their inventory and procurement process with AI.`,
  },
  support: {
    system: `You are a friendly, knowledgeable customer support AI for an Indian e-commerce platform. Resolve issues empathetically and efficiently.`,
    user: `A customer messages: "My order placed 5 days ago shows 'shipped' but I haven't received it. I need it urgently for a wedding tomorrow. Please help!" Write the perfect support response.`,
  },
  analysis: {
    system: `You are a sharp business analyst specializing in Indian markets. Provide concise, actionable insights.`,
    user: `Our retail store's Q3 data shows: 40% drop in weekday footfall, 25% rise in weekend sales, online orders up 80%, average order value down 15%. What are the 3 most important insights and what should we do?`,
  },
};

export async function POST(request: NextRequest) {
  try {
    const { demoType } = await request.json();

    const demo = DEMO_PROMPTS[demoType];
    if (!demo) {
      return NextResponse.json({ error: 'Invalid demo type' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ output: getFallbackOutput(demoType) });
    }

    const output = await callGemini(demo.system, demo.user, 400, 0.8);
    return NextResponse.json({ output: output || getFallbackOutput(demoType) });
  } catch (error) {
    console.error('AI demo error:', error);
    return NextResponse.json({ output: getFallbackOutput('marketing') });
  }
}

function getFallbackOutput(type: string): string {
  const fallbacks: Record<string, string> = {
    marketing: `**Stop Losing 40 Hours a Week to Manual Accounting**\n\nEigur's AI handles your GST filing, reconciliation, and P&L forecasting automatically so your team focuses on growth, not spreadsheets.\n\nJoin 200+ Indian SMEs saving Rs. 3.2L per year on average.\n\n[Start Free Trial] [See 5-Min Demo]`,
    email: `Subject: Cut your inventory costs by 30% with a 4-week AI pilot\n\nHi [Name],\n\nI noticed [Company] has 3 manufacturing units across Maharashtra. Coordinating inventory across those must create some painful delays.\n\nWe recently helped a Surat textile manufacturer automate their procurement triggers and reduce stockouts by 65% in 6 weeks.\n\nWould a 20-minute call this week make sense to see if we can do the same for you?\n\nRohit | Eigur AI`,
    support: `Hi! I completely understand how stressful this is, especially with the wedding tomorrow. I'm escalating your order to our priority team right now.\n\nI can see it's with our courier partner and there's been a delay at the Andheri hub. I've requested emergency same-day delivery and you'll get an SMS update within the hour.\n\nIf it doesn't arrive by 6 PM today, I'll personally arrange a store pickup or full refund. You have my word. Is there a best number to reach you on?`,
    analysis: `**3 Key Insights:**\n\n1. **You're losing weekday relevance.** Customers are shifting to online for everyday needs. Your physical store is becoming a weekend experience destination.\n\n2. **Online is your growth engine** (+80%) but order value is shrinking. Customers are cherry-picking. Consider bundles and minimum order incentives.\n\n3. **Weekend strength is an asset.** Double down with in-store events, exclusive weekend deals, and experiential retail to widen that gap.\n\n**Action:** Reduce weekday operating costs, invest in online UX, and brand weekends as premium destination shopping.`,
  };
  return fallbacks[type] ?? fallbacks.marketing;
}

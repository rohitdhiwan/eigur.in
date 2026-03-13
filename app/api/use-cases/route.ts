import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

function getOpenAI() { return new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); }

export async function POST(request: NextRequest) {
  try {
    const { industry, description } = await request.json();

    if (!industry) {
      return NextResponse.json({ error: 'Industry is required' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        useCases: getFallbackUseCases(industry),
      });
    }

    const prompt = `You are an AI consultant for Indian businesses. Generate 5 specific, high-impact AI use cases for a ${industry} business${description ? ` described as: "${description}"` : ''}.

For each use case, provide:
- title: Short, punchy name (4-6 words)
- description: What the AI does (1-2 sentences, specific)
- impact: Concrete business outcome (e.g., "Reduces reconciliation time by 70%", "Increases yield prediction accuracy to 94%")
- timeline: Implementation timeline (e.g., "4-6 weeks")

Focus on Indian market context: GST, MSME scale, regional languages, local supply chains where relevant.
Return ONLY valid JSON array, no markdown, no explanation.

Format:
[{"title":"...","description":"...","impact":"...","timeline":"..."}]`;

    const completion = await getOpenAI().chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 800,
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const raw = completion.choices[0]?.message?.content ?? '{}';
    let useCases;
    try {
      const parsed = JSON.parse(raw);
      useCases = Array.isArray(parsed) ? parsed : parsed.use_cases ?? parsed.useCases ?? getFallbackUseCases(industry);
    } catch {
      useCases = getFallbackUseCases(industry);
    }

    return NextResponse.json({ useCases });
  } catch (error) {
    console.error('Use cases error:', error);
    return NextResponse.json({ useCases: getFallbackUseCases('your business') }, { status: 200 });
  }
}

function getFallbackUseCases(industry: string) {
  return [
    {
      title: 'Intelligent Document Processing',
      description: `Automate extraction and classification of ${industry} documents using AI: invoices, contracts, reports.`,
      impact: 'Reduces manual processing time by 80%',
      timeline: '3-4 weeks',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: `AI-powered forecasting for ${industry} KPIs: revenue, demand, capacity utilization.`,
      impact: 'Improves forecast accuracy by 35-45%',
      timeline: '6-8 weeks',
    },
    {
      title: 'AI Customer Support Agent',
      description: `24/7 multilingual chatbot handling ${industry} customer queries, escalating complex issues to humans.`,
      impact: 'Handles 70% of queries automatically, cuts support costs by 50%',
      timeline: '4-5 weeks',
    },
    {
      title: 'Process Automation (RPA + AI)',
      description: `Automate repetitive ${industry} workflows: data entry, reconciliation, reporting with intelligent bots.`,
      impact: 'Saves 200+ hours per month per department',
      timeline: '5-7 weeks',
    },
    {
      title: 'Anomaly Detection and Alerts',
      description: `Real-time AI monitoring of ${industry} operations. Detect fraud, errors, or anomalies before they escalate.`,
      impact: 'Catches 94% of anomalies vs 60% with manual review',
      timeline: '4-6 weeks',
    },
  ];
}

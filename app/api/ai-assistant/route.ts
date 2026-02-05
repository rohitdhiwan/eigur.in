import { NextRequest, NextResponse } from 'next/server';

// Mock AI response function
const getAIResponse = async (message: string) => {
  // In a real implementation, this would call an AI service like OpenAI
  // For now, we'll simulate responses based on the input
  
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! I'm your Eigur AI assistant. How can I help you with our AI solutions today?";
  } else if (lowerMessage.includes('service') || lowerMessage.includes('solution')) {
    return "We offer a variety of AI solutions including IT Process Automation, Financial AI, Agriculture Intelligence, Retail Intelligence, Business Automation, and Customer Experience AI. Which one interests you most?";
  } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return "Our pricing is customized based on your specific business needs and the complexity of the solution. We offer flexible packages to suit different budgets. Would you like to schedule a consultation to discuss pricing?";
  } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
    return "You can reach us via email at hello@eigur.in, call us at +91 98765 43210, or visit our contact page to send a message. We're available Monday-Friday, 9AM-6PM IST.";
  } else if (lowerMessage.includes('thank')) {
    return "You're welcome! Is there anything else I can help you with today?";
  } else if (lowerMessage.includes('help')) {
    return "I can help you with information about our services, pricing, case studies, or connect you with our team. What do you need assistance with?";
  } else {
    return "Thank you for your message. Our AI solutions can help transform your business operations. Could you tell me more about your specific requirements so I can provide more targeted information?";
  }
};

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { message: 'Message is required' }, 
        { status: 400 }
      );
    }

    // Get AI response
    const aiResponse = await getAIResponse(message);

    return NextResponse.json({
      success: true,
      response: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error processing AI request:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error processing your request',
      },
      { status: 500 }
    );
  }
}
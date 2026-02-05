import { NextRequest, NextResponse } from 'next/server';

// Mock function to save contact form data
const saveContactForm = async (formData: any) => {
  // In a real implementation, this would save to a database like Supabase
  console.log('Contact form submitted:', formData);
  
  // Simulate saving to database
  return {
    id: Math.floor(Math.random() * 10000),
    submittedAt: new Date().toISOString(),
    status: 'saved'
  };
};

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      service,
      message
    } = await request.json();

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'First name, email, and message are required',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid email address',
        },
        { status: 400 }
      );
    }

    // Save form data
    const result = await saveContactForm({
      firstName,
      lastName,
      company,
      email,
      phone,
      service,
      message,
      submittedAt: new Date().toISOString(),
    });

    // In a real implementation, you might also send an email notification here
    console.log(`New contact form submission from ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      submissionId: result.id,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'There was an error submitting your form. Please try again.',
      },
      { status: 500 }
    );
  }
}
import { NextApiRequest, NextApiResponse } from 'next';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      service,
      message
    } = req.body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'First name, email, and message are required',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
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

    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      submissionId: result.id,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'There was an error submitting your form. Please try again.',
    });
  }
}
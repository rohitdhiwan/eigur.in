# Eigur AI Solutions Website

Transforming Indian businesses with cutting-edge AI technology to drive growth, efficiency, and innovation.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Database**: Supabase
- **AI Integration**: OpenAI API

## Features

- Fully responsive design with mobile-first approach
- SEO optimized with metadata and structured schema
- AI-powered chat assistant
- Modern UI/UX with animations
- Fast loading (aiming for Lighthouse 95+)
- Indian market focused content and examples

## Pages

- **Home**: Clear positioning and services overview
- **About**: Mission and India-focused AI transformation vision
- **Services**: IT, Finance, Agriculture, Retail, Business Automation
- **Case Studies**: Real-world implementations and results
- **Blog**: AI-generated content with human editing
- **Contact**: Form with WhatsApp integration
- **AI Assistant**: Interactive chatbot for visitors

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/eigur-website.git
cd eigur-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy the environment variables template:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `OPENAI_API_KEY`: Your OpenAI API key
- `NEXT_PUBLIC_SITE_URL`: Your production site URL
- `GOOGLE_ANALYTICS_ID`: Your Google Analytics tracking ID (optional)

## Deployment

### Vercel

The easiest way to deploy this Next.js application is to use [Vercel](https://vercel.com), the creators of Next.js.

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your project into Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

After importing your project, go to Project Settings > Environment Variables and add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

## AI Features

### AI Assistant

The AI Assistant page provides an interactive chat interface for visitors. The backend API simulates AI responses but can be connected to OpenAI's API for real responses.

### Lead Qualification

The AI assistant can qualify leads based on user queries and store relevant information in the database.

### Content Generation

Blog posts can be AI-generated with human editing capabilities.

## Database Schema

Using Supabase (PostgreSQL):

```sql
-- Contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  company VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  interested_service VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- AI Conversations table
CREATE TABLE ai_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255),
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog Posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  author VARCHAR(255),
  published_date DATE,
  category VARCHAR(100),
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Folder Structure

```
eigur-website/
├── app/                 # Next.js 14 App Router pages
│   ├── api/             # API routes
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── contact/         # Contact page
│   ├── blog/            # Blog page
│   ├── case-studies/    # Case studies page
│   └── ai-assistant/    # AI assistant page
├── components/          # Reusable React components
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Extending AI Features

### Adding New AI Capabilities

1. Create a new API route in `app/api/`
2. Define the endpoint logic
3. Add the corresponding frontend component
4. Update the AI assistant to handle new queries

### Training Custom Models

For industry-specific AI capabilities:

1. Collect relevant data from your domain
2. Fine-tune a model using OpenAI's API or other providers
3. Update the AI assistant to use your custom model
4. Add appropriate fallbacks for when the custom model fails

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email hello@eigur.in or join our community.
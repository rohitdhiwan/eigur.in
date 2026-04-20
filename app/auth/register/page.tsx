'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  terms: z.literal(true, { errorMap: () => ({ message: 'You must accept the terms' }) }),
}).refine((d) => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});
type FormData = z.infer<typeof schema>;

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
      <path fill="#F25022" d="M1 1h10v10H1z" />
      <path fill="#00A4EF" d="M13 1h10v10H13z" />
      <path fill="#7FBA00" d="M1 13h10v10H1z" />
      <path fill="#FFB900" d="M13 13h10v10H13z" />
    </svg>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setServerError('');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, password: data.password }),
      });

      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error ?? 'Registration failed');
        return;
      }

      setSuccess(true);
      // Auto sign-in after registration
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/dashboard/profile',
      });
    } catch {
      setServerError('Something went wrong. Please try again.');
    }
  }

  async function handleOAuth(provider: 'google' | 'azure-ad') {
    setOauthLoading(provider);
    await signIn(provider, { callbackUrl: '/dashboard/profile' });
  }

  if (success) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-black/[0.07] shadow-xl shadow-black/[0.04] p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="font-display text-xl font-bold text-[#0f0f1a] mb-2">Account created!</h2>
          <p className="text-sm text-[#7878a0]">Signing you in and setting up your workspace…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl border border-black/[0.07] shadow-xl shadow-black/[0.04] p-8">
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold text-[#0f0f1a] mb-1">Create your account</h1>
          <p className="text-sm text-[#7878a0]">Your AI-powered career journey starts here</p>
        </div>

        {/* OAuth */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={() => handleOAuth('google')}
            disabled={!!oauthLoading || isSubmitting}
            className="flex items-center justify-center gap-2.5 w-full px-4 py-2.5 rounded-xl border border-black/[0.1] bg-white hover:bg-gray-50 text-sm font-medium text-[#0f0f1a] transition-colors disabled:opacity-50"
          >
            {oauthLoading === 'google' ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
            Sign up with Google
          </button>
          <button
            onClick={() => handleOAuth('azure-ad')}
            disabled={!!oauthLoading || isSubmitting}
            className="flex items-center justify-center gap-2.5 w-full px-4 py-2.5 rounded-xl border border-black/[0.1] bg-white hover:bg-gray-50 text-sm font-medium text-[#0f0f1a] transition-colors disabled:opacity-50"
          >
            {oauthLoading === 'azure-ad' ? <Loader2 className="w-4 h-4 animate-spin" /> : <MicrosoftIcon />}
            Sign up with Microsoft
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black/[0.07]" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-[#b0aec8] font-medium">or sign up with email</span>
          </div>
        </div>

        {serverError && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100 mb-4">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <p className="text-sm text-red-600">{serverError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0f0f1a] mb-1.5">Full name</label>
            <input
              {...register('name')}
              type="text"
              placeholder="Priya Sharma"
              autoComplete="name"
              className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-white text-sm placeholder:text-[#c0bede] focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f0f1a] mb-1.5">Work email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-white text-sm placeholder:text-[#c0bede] focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f0f1a] mb-1.5">Password</label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-black/[0.12] bg-white text-sm placeholder:text-[#c0bede] focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0aec8] hover:text-[#7878a0]">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f0f1a] mb-1.5">Confirm password</label>
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder="Repeat password"
              autoComplete="new-password"
              className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-white text-sm placeholder:text-[#c0bede] focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
            />
            {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input
              {...register('terms')}
              type="checkbox"
              id="terms"
              className="mt-0.5 w-4 h-4 rounded border-black/20 text-violet-600 focus:ring-violet-500"
            />
            <label htmlFor="terms" className="text-sm text-[#7878a0] leading-snug">
              I agree to Eigur&apos;s{' '}
              <Link href="/terms" className="text-violet-600 hover:text-violet-700">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-violet-600 hover:text-violet-700">Privacy Policy</Link>
            </label>
          </div>
          {errors.terms && <p className="text-xs text-red-500 -mt-2">{errors.terms.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting || !!oauthLoading}
            className="btn-primary w-full justify-center !py-2.5 !text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Create free account
          </button>
        </form>

        <p className="text-center text-sm text-[#7878a0] mt-6">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-violet-600 font-semibold hover:text-violet-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

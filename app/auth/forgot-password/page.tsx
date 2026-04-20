'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
});
type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(_data: FormData) {
    // In production: call API to send reset email
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-black/[0.07] shadow-xl shadow-black/[0.04] p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-7 h-7 text-violet-600" />
          </div>
          <h2 className="font-display text-xl font-bold text-[#0f0f1a] mb-2">Check your inbox</h2>
          <p className="text-sm text-[#7878a0] mb-6">
            We sent a password reset link to <strong className="text-[#0f0f1a]">{getValues('email')}</strong>.
            Check your spam folder if you don&apos;t see it.
          </p>
          <Link href="/auth/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700">
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl border border-black/[0.07] shadow-xl shadow-black/[0.04] p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-violet-600" />
          </div>
          <h1 className="font-display text-2xl font-bold text-[#0f0f1a] mb-1">Reset your password</h1>
          <p className="text-sm text-[#7878a0]">Enter your email and we&apos;ll send you a reset link</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0f0f1a] mb-1.5">Email address</label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.12] bg-white text-sm placeholder:text-[#c0bede] focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center !py-2.5 !text-sm disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Send reset link
          </button>
        </form>

        <div className="text-center mt-6">
          <Link href="/auth/login"
            className="inline-flex items-center gap-1.5 text-sm text-[#7878a0] hover:text-[#0f0f1a] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

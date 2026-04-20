import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { JOBS } from '@/lib/jobs-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() ?? '';
  const location = searchParams.get('location')?.toLowerCase() ?? '';
  const type = searchParams.get('type') ?? '';
  const remote = searchParams.get('remote') === 'true';
  const industry = searchParams.get('industry') ?? '';
  const minSalary = parseInt(searchParams.get('minSalary') ?? '0');

  let results = JOBS;

  if (query) {
    results = results.filter(
      (j) =>
        j.title.toLowerCase().includes(query) ||
        j.company.toLowerCase().includes(query) ||
        j.skills.some((s) => s.toLowerCase().includes(query)) ||
        j.description.toLowerCase().includes(query)
    );
  }

  if (location) {
    results = results.filter((j) => j.location.toLowerCase().includes(location));
  }

  if (type) {
    results = results.filter((j) => j.type === type);
  }

  if (remote) {
    results = results.filter((j) => j.remote);
  }

  if (industry) {
    results = results.filter((j) => j.industry === industry);
  }

  if (minSalary > 0) {
    results = results.filter((j) => j.salaryMax >= minSalary);
  }

  return NextResponse.json({ jobs: results, total: results.length });
}

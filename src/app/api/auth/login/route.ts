import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  await connectDB();

  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and password are required' },
      { status: 400 }
    );
  }

  // 1) Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    );
  }

  // 2) Compare password
  const isMatch = await (user as any).comparePassword(password);
  if (!isMatch) {
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    );
  }

  // 3) Build safe user object (no password)
  const { passwordHash, ...safeUser } = user.toObject();

  // TODO later: create a real session / JWT
  return NextResponse.json(
    {
      message: 'Login successful',
      user: safeUser,
    },
    { status: 200 }
  );
}

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  await connectDB();
  const users = await User.find().lean();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();
  const { name, email, password, role, phone, location } = body;

  // 1) Basic validation
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'name, email and password are required' },
      { status: 400 }
    );
  }

  // 2) Check if email already exists
  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json(
      { error: 'This email is already registered' },
      { status: 409 } // conflict
    );
  }

  // 3) Create user, Mongoose pre('save') will hash passwordHash
  const user = await User.create({
    name,
    email,
    passwordHash: password, // plain here, will be hashed in model
    role,
    phone,
    location,
  });

  // 4) Never return the password hash to the client
  const { passwordHash, ...safeUser } = user.toObject();

  return NextResponse.json(safeUser, { status: 201 });
}

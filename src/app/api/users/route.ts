import {NextResponse} from 'next/server';
import {connectDB} from '@/lib/mongodb';
import User from '@/models/User';

// GET /api/users - list all users
export async function GET() {
  await connectDB();                      // 1. ensure DB connection
  const users = await User.find().lean(); // 2. query all users
  return NextResponse.json(users);        // 3. return as JSON
}

// POST /api/users - create a new user
export async function POST(request: Request) {
  await connectDB();
    const body = await request.json();      // read JSON body from request
    const { name, email, passwordHash, phone, role, location } = body;
    // Basic validation (you can expand this as needed)
    if (!name || !email || !passwordHash) {
        return NextResponse.json(
            { error: 'Name, email, and passwordHash are required' },
            { status: 400 });
    }
    const user = await User.create({
         name, 
         email, 
         passwordHash, 
         phone, 
         role, 
         location });   // save to database
    return NextResponse.json(user, { status: 201 });
}
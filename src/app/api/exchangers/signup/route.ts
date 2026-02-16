import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();
  const {
    name,
    email,
    password,
    phone,
    location,
    businessName,
    profileImageUrl,
    idCardFrontUrl,
    idCardBackUrl,
  } = body;

  // 1) Basic validation
  if (!name || !email || !password || !businessName) {
    return NextResponse.json(
      { error: "name, email, password and businessName are required" },
      { status: 400 }
    );
  }

  if (!idCardFrontUrl || !idCardBackUrl) {
    return NextResponse.json(
      { error: "ID card front and back images are required" },
      { status: 400 }
    );
  }

  // 2) Check if email already used
  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json(
      { error: "This email is already registered" },
      { status: 409 }
    );
  }

  // 3) Create user with role = exchanger
  const user = await User.create({
    name,
    email,
    passwordHash: password, // will be hashed by pre('save')
    role: "exchanger",
    phone,
    location,
    businessName,
    profileImageUrl,
    idCardFrontUrl,
    idCardBackUrl,
    kycStatus: "pending", // admin must approve later
  });

  const { passwordHash, ...safeUser } = user.toObject();

  return NextResponse.json(
    {
      message: "Exchanger account created, pending verification",
      user: safeUser,
    },
    { status: 201 }
  );
}

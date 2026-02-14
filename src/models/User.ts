import mongoose, { Schema, InferSchemaType } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },

    email: {
      type: String,
      required: true,
      unique: true, // creates unique index
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true, // will store hashed password
    },

    phone: { type: String, trim: true },

    role: {
      type: String,
      enum: ['customer', 'exchanger', 'admin'],
      default: 'customer',
    },

    verified: { type: Boolean, default: false },

    rating: { type: Number, min: 0, max: 5, default: 0 },

    location: { type: String, trim: true },
  },
  { timestamps: true }
);

// Hash password before saving a new user or when password changes
UserSchema.pre('save', async function () {
  const user = this as any;

  // if passwordHash was not modified, skip
  if (!user.isModified('passwordHash')) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  user.passwordHash = await bcrypt.hash(user.passwordHash, salt);
});


// Helper method to compare a plain password with hashed one
UserSchema.methods.comparePassword = async function (plainPassword: string) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};

export type User = InferSchemaType<typeof UserSchema>;

export default mongoose.models.User || mongoose.model('User', UserSchema);

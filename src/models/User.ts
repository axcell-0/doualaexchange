import mongoose, { Schema, InferSchemaType } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    role: {
      type: String,
      enum: ['customer', 'exchanger', 'admin'],
      default: 'customer',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    location: {
      type: String,
      required: false,
      trim: true,
    },
  },
    {
      timestamps: true,
    },
);

export type User = InferSchemaType<typeof UserSchema>;

export default mongoose.models.User || mongoose.model('User', UserSchema);

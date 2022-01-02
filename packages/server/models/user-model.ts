import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String,
  },
  fullName: {
    required: true,
    type: String,
  },
  username: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmHash: {
    required: true,
    type: String,
  },
  location: String,
  confirmed: {
    type: Boolean,
    default: false,
  },
  about: String,
  website: String,
});

export const UserModel = model<{
  email: string,
  fullName: string,
  username: string,
  password: string,
  confirmHash: string,
  confirmed: boolean,
}>('User', UserSchema);

import { model, Schema, Document } from 'mongoose';

export type TTweetModel = {
  text: string
  user: Schema.Types.ObjectId
  timestamps: boolean
  _id?: string
} & Document

const TweetSchema = new Schema<TTweetModel>({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  timestamps: Boolean,
});

export const TweetModel = model<TTweetModel>('Tweet', TweetSchema);

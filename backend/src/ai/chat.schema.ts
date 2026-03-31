import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Chat extends Document {
  @Prop({ required: true })
  role: 'user' | 'assistant';

  @Prop({ required: true })
  content: string;

  @Prop()
  sessionId?: string; // Optional: To group messages per user session
}

export const ChatSchema = SchemaFactory.createForClass(Chat);

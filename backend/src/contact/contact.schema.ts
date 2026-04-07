import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema({ timestamps: true })
export class Contact {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) company: string;
  @Prop({ required: true }) email: string;
  @Prop() phone?: string;
  @Prop() companySize?: string;
  @Prop() goal?: string;
  @Prop() budget?: string;
  @Prop() timeline?: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);

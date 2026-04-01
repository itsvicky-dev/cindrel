import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './chat.schema';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AiService implements OnModuleInit {
  private openai: OpenAI;
  private systemPrompt: string = '';

  constructor(
    @InjectModel(Chat.name) private chatModel: Model<Chat>,
    private configService: ConfigService,
  ) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  onModuleInit() {
    this.loadSystemPrompt();
  }

  private loadSystemPrompt() {
    try {
      const docPath = path.join(process.cwd(), 'assets', 'documents', 'document-1.txt');
      if (fs.existsSync(docPath)) {
        this.systemPrompt = fs.readFileSync(docPath, 'utf8');
        console.log(`[AI SERVICE] Successfully loaded system prompt (${this.systemPrompt.length} bytes)`);
      } else {
        console.warn('System prompt document not found at:', docPath);
      }
    } catch (error) {
      console.error('Error loading system prompt:', error);
    }
  }

  async getChatResponse(userMessage: string, history: { role: 'user' | 'assistant'; content: string }[]) {
    // 1. Save user message to DB
    await new this.chatModel({ role: 'user', content: userMessage }).save();

    // 2. Prepare context for OpenAI
    const messages: any[] = [
      { role: 'system', content: `You are Cindrel AI. Use this document as your knowledge base: \n\n ${this.systemPrompt}` },
      ...history,
      { role: 'user', content: userMessage },
    ];

    // 3. Get response from ChatGPT
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 600,
    });

    const botReply = response.choices[0].message.content;

    // 4. Save bot reply to DB
    await new this.chatModel({ role: 'assistant', content: botReply }).save();

    return botReply;
  }

  async getChatHistory() {
    return this.chatModel.find().sort({ createdAt: 1 }).exec();
  }
}

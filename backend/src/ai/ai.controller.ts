import { Controller, Post, Body, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('chat')
  async chat(@Body() body: { message: string; history: { role: 'user' | 'assistant'; content: string }[] }) {
    const { message, history } = body;
    const response = await this.aiService.getChatResponse(message, history);
    return { response };
  }

  @Get('history')
  async history() {
    return this.aiService.getChatHistory();
  }
}

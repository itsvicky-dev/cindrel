import { Controller, Post, Body, Get } from '@nestjs/common';
import { AiService } from './ai.service';
import { ChatRequestDto } from './chat.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('chat')
  async chat(@Body() body: ChatRequestDto) {
    const { message, history } = body;
    console.log(`[AI CONTROLLER] Incoming chat request: ${message}`);
    const response = await this.aiService.getChatResponse(message, history);
    console.log(`[AI CONTROLLER] Responding to chat request: ${response.substring(0, 50)}...`);
    return { response };
  }

  @Get('history')
  async history() {
    console.log(`[AI CONTROLLER] Fetching chat history`);
    return this.aiService.getChatHistory();
  }
}

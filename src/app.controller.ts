import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('todo-list')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('addTask')
  create(@Body() addedTask: any) {
    addedTask.id = Date.now().toString();
    return this.appService.addTask(addedTask);
  }
}

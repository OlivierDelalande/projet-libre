import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataInterface } from './interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataInterface {
    return this.appService.getHello();
  }
}

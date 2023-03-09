import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { ContributorsListInterface, DataInterface, TodosListInterface } from '../interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataInterface {
    return this.appService.getHello();
  }
}

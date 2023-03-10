import { Controller, Get } from '@nestjs/common';
import { ContributorsService } from '../services';
import { ContributorsListInterface } from '../interfaces';

@Controller()
export class ContributorsController {
  constructor(private readonly contributorsService: ContributorsService) {}

  @Get()
  getContributors(): ContributorsListInterface {
    return this.contributorsService.getContributors();
  }
}

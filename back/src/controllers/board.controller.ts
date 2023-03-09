import { Controller, Get } from '@nestjs/common';
import { BoardService } from '../services';
import { TodosListInterface } from '../interfaces';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoard(): TodosListInterface[] {
    return this.boardService.getBoard();
  }
}

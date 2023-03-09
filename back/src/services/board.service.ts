import { Injectable } from '@nestjs/common';
import { todosList } from '../data';
import { TodosListInterface } from '../interfaces';

@Injectable()
export class BoardService {
  
  getBoard(): TodosListInterface {
    return {
      todosList,
    };
  }
}


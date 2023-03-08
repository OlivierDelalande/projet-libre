import { Injectable } from '@nestjs/common';
import { contributorsList, todosList } from './data/index';
import { DataInterface } from './interfaces';

@Injectable()
export class AppService {
  getHello() {
    const data: DataInterface = {
      contributorsList,
      todosList,
    };

    return data;
  }
}


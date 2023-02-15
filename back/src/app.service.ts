import { Injectable } from '@nestjs/common';
import { about, contributorsList, todosList } from './data/index';
import { DataInterface } from './interfaces';

@Injectable()
export class AppService {
  getHello() {
    const data: DataInterface = {
      about,
      contributorsList,
      todosList,
    };

    return data;
  }
}


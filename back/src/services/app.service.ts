import { Injectable } from '@nestjs/common';
import { contributorsList, todosList } from '../data';
import { DataInterface } from '../interfaces';

@Injectable()
export class AppService {

  getHello(): DataInterface {
    const data: DataInterface = {
      contributorsList,
      todosList,
    };

    return data;
  }
}


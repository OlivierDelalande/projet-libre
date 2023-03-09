import { Injectable } from '@nestjs/common';
import { contributorsList } from '../data';
import { ContributorsListInterface } from '../interfaces';

@Injectable()
export class ContributorsService {
  
  getContributors(): ContributorsListInterface {
    return {
      contributorsList
    };
  }
}


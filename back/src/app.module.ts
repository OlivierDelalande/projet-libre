import { Module } from '@nestjs/common';

import { AppService, BoardService, ContributorsService } from './services'
import { AppController ,BoardController, ContributorsController } from './controllers';

@Module({
  imports: [],
  controllers: [AppController, BoardController, ContributorsController],
  providers: [AppService, BoardService, ContributorsService],
})
export class AppModule {}

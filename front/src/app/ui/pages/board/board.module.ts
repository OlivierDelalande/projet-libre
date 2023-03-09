import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardService } from '../../../services';

@NgModule({
  declarations: [BoardComponent],
  exports: [BoardComponent],
  providers: [BoardService],
})
export class BoardModule {}

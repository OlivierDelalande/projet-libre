import { NgModule } from '@angular/core';
import { ContributorsComponent } from './contributors.component';
import { ContributorsService } from '../../../services'

@NgModule({
  declarations: [ContributorsComponent],
  exports: [ContributorsComponent],
  providers: [ContributorsService]
})
export class ContributorsModule {}

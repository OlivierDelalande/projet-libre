import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ui/pages/about/about.component';
import { BoardComponent } from './ui/pages/board/board.component';
import { ContributorsComponent } from './ui/pages/contributors/contributors.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/contributors', pathMatch: 'full' },
  { path: 'contributors', component: ContributorsComponent },
  { path: 'board', component: BoardComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

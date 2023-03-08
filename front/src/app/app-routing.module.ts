import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BoardComponent } from './pages/board/board.component';
import { ContributorsComponent } from './pages/contributors/contributors.component';

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

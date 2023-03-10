import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  BoardComponent,
  ContributorsComponent,
  FeaturesComponent
} from './ui/pages';

const appRoutes: Routes = [
  { path: '', redirectTo: '/contributors', pathMatch: 'full' },
  { path: 'contributors', component: ContributorsComponent },
  { path: 'board', component: BoardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

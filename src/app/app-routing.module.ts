import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './view/video-list/video-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'angular-grid', pathMatch: 'full' },
  { path: 'angular-grid', component: VideoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

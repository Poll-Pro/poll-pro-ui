import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollDetailsComponent } from './poll-details/poll-details.component';

const routes: Routes = [
  {
    path: '',
    component: PollDetailsComponent,
  }  
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})

export class AppRoutingModule { }
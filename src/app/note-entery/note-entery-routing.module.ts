import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteEnteryPage } from './note-entery.page';

const routes: Routes = [
  {
    path: '',
    component: NoteEnteryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteEnteryPageRoutingModule {}

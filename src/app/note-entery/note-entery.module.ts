import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteEnteryPageRoutingModule } from './note-entery-routing.module';

import { NoteEnteryPage } from './note-entery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteEnteryPageRoutingModule
  ],
  declarations: [NoteEnteryPage]
})
export class NoteEnteryPageModule {}

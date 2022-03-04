import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftEditPageRoutingModule } from './draft-edit-routing.module';

import { DraftEditPage } from './draft-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftEditPageRoutingModule
  ],
  declarations: [DraftEditPage]
})
export class DraftEditPageModule {}

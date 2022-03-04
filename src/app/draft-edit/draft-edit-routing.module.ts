import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftEditPage } from './draft-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DraftEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftEditPageRoutingModule {}

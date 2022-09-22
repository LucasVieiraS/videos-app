import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AFeraPage } from './a-fera.page';

const routes: Routes = [
  {
    path: '',
    component: AFeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AFeraPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InexorablePage } from './inexorable.page';

const routes: Routes = [
  {
    path: '',
    component: InexorablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InexorablePageRoutingModule {}

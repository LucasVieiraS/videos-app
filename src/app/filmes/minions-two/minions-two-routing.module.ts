import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinionsTwoPage } from './minions-two.page';

const routes: Routes = [
  {
    path: '',
    component: MinionsTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinionsTwoPageRoutingModule {}

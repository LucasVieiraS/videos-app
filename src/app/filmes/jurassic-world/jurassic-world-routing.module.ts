import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JurassicWorldPage } from './jurassic-world.page';

const routes: Routes = [
  {
    path: '',
    component: JurassicWorldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JurassicWorldPageRoutingModule {}

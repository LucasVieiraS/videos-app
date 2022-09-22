import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonBallPage } from './dragon-ball.page';

const routes: Routes = [
  {
    path: '',
    component: DragonBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragonBallPageRoutingModule {}

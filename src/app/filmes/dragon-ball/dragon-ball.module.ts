import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DragonBallPageRoutingModule } from './dragon-ball-routing.module';

import { DragonBallPage } from './dragon-ball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragonBallPageRoutingModule
  ],
  declarations: [DragonBallPage]
})
export class DragonBallPageModule {}

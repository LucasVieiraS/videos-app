import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinionsTwoPageRoutingModule } from './minions-two-routing.module';

import { MinionsTwoPage } from './minions-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinionsTwoPageRoutingModule
  ],
  declarations: [MinionsTwoPage]
})
export class MinionsTwoPageModule {}

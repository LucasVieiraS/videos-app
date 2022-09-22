import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JurassicWorldPageRoutingModule } from './jurassic-world-routing.module';

import { JurassicWorldPage } from './jurassic-world.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JurassicWorldPageRoutingModule
  ],
  declarations: [JurassicWorldPage]
})
export class JurassicWorldPageModule {}

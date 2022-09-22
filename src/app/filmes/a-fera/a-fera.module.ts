import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AFeraPageRoutingModule } from './a-fera-routing.module';

import { AFeraPage } from './a-fera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AFeraPageRoutingModule
  ],
  declarations: [AFeraPage]
})
export class AFeraPageModule {}

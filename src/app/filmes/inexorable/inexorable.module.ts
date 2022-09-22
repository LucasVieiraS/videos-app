import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InexorablePageRoutingModule } from './inexorable-routing.module';

import { InexorablePage } from './inexorable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InexorablePageRoutingModule
  ],
  declarations: [InexorablePage]
})
export class InexorablePageModule {}

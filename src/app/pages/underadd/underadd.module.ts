import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnderaddPageRoutingModule } from './underadd-routing.module';

import { UnderaddPage } from './underadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnderaddPageRoutingModule
  ],
  declarations: [UnderaddPage]
})
export class UnderaddPageModule {}

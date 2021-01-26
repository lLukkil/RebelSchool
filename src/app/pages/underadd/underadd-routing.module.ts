import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderaddPage } from './underadd.page';

const routes: Routes = [
  {
    path: '',
    component: UnderaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderaddPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JotsComponent } from './jots/jots.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.routing';
import { JottingComponent } from './jotting/jotting.component';
import { SharedModule } from '../shared/shared.module';
import { JotCreateComponent } from './jots/jot-create/jot-create.component';



@NgModule({
  declarations: [JotsComponent, IndexComponent, JottingComponent, JotCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(IndexRoutes)
  ],
  exports: [
    CommonModule
  ]
})
export class IndexModule { }

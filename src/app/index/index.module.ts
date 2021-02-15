import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JotsComponent } from './jots/jots.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.routing';
import { JottingComponent } from './jotting/jotting.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [JotsComponent, IndexComponent, JottingComponent],
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

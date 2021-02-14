import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JotsComponent } from './jots/jots.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.routing';
import { JottingComponent } from './jotting/jotting.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [JotsComponent, IndexComponent, JottingComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexRoutes)
  ],
  exports: [
    CommonModule
  ]
})
export class IndexModule { }

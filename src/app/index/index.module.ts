import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JotsComponent } from './jots/jots.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.routing';



@NgModule({
  declarations: [JotsComponent, IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexRoutes)
  ]
})
export class IndexModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';



@NgModule({
  declarations: [FormElementsComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [FormElementsComponent, LoadingComponent]
})
export class SharedModule { }

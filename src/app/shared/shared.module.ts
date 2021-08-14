import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './components/form-elements/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormElementsComponent, LoadingComponent, InputComponent],
  imports: [
    CommonModule,
    NgbAlertModule,
    ReactiveFormsModule
  ],
  exports: [FormElementsComponent, LoadingComponent]
})
export class SharedModule { }

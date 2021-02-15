import { Component, Input, OnInit } from '@angular/core';
import { FormElementType } from 'src/app/core/interfaces/form-element-type.interface';

@Component({
  selector: 'app-shared-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  @Input() formElementType: FormElementType = {} as FormElementType;

  constructor() { }

  ngOnInit(): void {
  }

}

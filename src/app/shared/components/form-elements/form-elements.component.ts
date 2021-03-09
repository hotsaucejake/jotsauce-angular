import { Component, Input, OnInit } from '@angular/core';
import { FormElementJot } from 'src/app/core/interfaces/form-element-jot';

@Component({
  selector: 'app-shared-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  @Input() formElementJot: FormElementJot = {} as FormElementJot;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormElementJot } from 'src/app/core/interfaces/form-element-jot';

@Component({
  selector: 'app-shared-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  @Input() formElementJot: FormElementJot = {} as FormElementJot;
  @Output() output = new EventEmitter<string | number>(); // actually need emit output of value and form_elem_jot_id

  public formElementValue: string | number | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.formElementJot);
  }

  public setFormElementValue(value: string | number) {
    this.formElementValue = value;
    this.output.emit(this.formElementValue);
  }

}

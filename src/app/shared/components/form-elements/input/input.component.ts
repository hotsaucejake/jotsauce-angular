import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormElementAttributeFormElementJot } from 'src/app/core/interfaces/form-element-attribute-form-element-jot.interface';
import { FormElementJot } from 'src/app/core/interfaces/form-element-jot';

@Component({
  selector: 'app-shared-form-elements-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() formElementJot: FormElementJot = {} as FormElementJot;
  @Output() output = new EventEmitter<string | number>();

  public inputElement = new FormControl();

  public accept: string | null = null;
  public alt: string | null = null;
  public autocomplete: string | null = null;
  public autofocus: string | null = null;
  public capture: string | null = null;
  public checked: string | null = null;
  public dirname: string | null = null;
  public disabled: string | null = null;
  public form: string | null = null;
  public formaction: string | null = null;
  public formenctype: string | null = null;
  public formmethod: string | null = null;
  public formnovalidate: string | null = null;
  public formtarget: string | null = null;
  public height: string | null = null;
  public list: string | null = null;
  public max: string | null = null;
  public maxlength: string | null = null;
  public min: string | null = null;
  public minlength: string | null = null;
  public multiple: string | null = null;
  public name: string | null = null;
  public pattern: string | null = null;
  public placeholder: string | null = null;
  public readonly: string | null = null;
  public required: string | null = null;
  public size: string | null = null;
  public src: string | null = null;
  public step: string | null = null;
  public type: string | null = null;
  public value: string | null = null;
  public width: string | null = null;

  constructor() { }

  public ngOnInit(): void {
    this.setAttributes(this.formElementJot.form_element_attribute_form_element_jots);
    this.inputElement.valueChanges.subscribe(value => {
      this.output.emit(value);
    });
  }

  private setAttributes(attributes: FormElementAttributeFormElementJot[]): void {
    attributes.forEach(attribute => {
      switch (attribute.form_element_attribute.attribute) {
        case 'accept':
          this.accept = attribute.value;
          break;

        case 'alt':
          this.alt = attribute.value;
          break;

        case 'autocomplete':
          this.autocomplete = attribute.value;
          break;

        case 'autofocus':
          this.autofocus = attribute.value;
          break;

        case 'capture':
          this.capture = attribute.value;
          break;

        case 'checked':
          this.checked = attribute.value;
          break;

        case 'dirname':
          this.dirname = attribute.value;
          break;

        case 'disabled':
          this.disabled = attribute.value;
          break;

        case 'form':
          this.form = attribute.value;
          break;

        case 'formaction':
          this.formaction = attribute.value;
          break;

        case 'formenctype':
          this.formenctype = attribute.value;
          break;

        case 'formmethod':
          this.formmethod = attribute.value;
          break;

        case 'formnovalidate':
          this.formnovalidate = attribute.value;
          break;

        case 'formtarget':
          this.formtarget = attribute.value;
          break;

        case 'height':
          this.height = attribute.value;
          break;

        case 'list':
          this.list = attribute.value;
          break;

        case 'max':
          this.max = attribute.value;
          break;

        case 'maxlength':
          this.maxlength = attribute.value;
          break;

        case 'min':
          this.min = attribute.value;
          break;

        case 'minlength':
          this.minlength = attribute.value;
          break;

        case 'multiple':
          this.multiple = attribute.value;
          break;

        case 'name':
          this.name = attribute.value;
          break;

        case 'pattern':
          this.pattern = attribute.value;
          break;

        case 'placeholder':
          this.placeholder = attribute.value;
          break;

        case 'readonly':
          this.readonly = attribute.value;
          break;

        case 'required':
          this.required = attribute.value;
          break;

        case 'size':
          this.size = attribute.value;
          break;

        case 'src':
          this.src = attribute.value;
          break;

        case 'step':
          this.step = attribute.value;
          break;

        case 'type':
          this.type = attribute.value;
          break;

        case 'value':
          this.value = attribute.value;
          break;

        case 'width':
          this.width = attribute.value;
          break;

        default:
          console.log('Invalid input attribute.');
          break;
      }
    });
  }

}

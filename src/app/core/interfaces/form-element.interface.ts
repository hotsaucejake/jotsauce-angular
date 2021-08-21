import { FormElementAttribute } from './form-element-attribute.interface';

export interface FormElement {
  id: number;
  element: string;
  attributes: FormElementAttribute[];
}

import { FormElement } from './form-element.interface';

export interface FormElementAttribute {
    id: number;
    attribute: string;
    form_element?: FormElement;
}

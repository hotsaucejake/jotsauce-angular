import { FormElementAttribute } from './form-element-attribute.interface';
import { FormElementJot } from './form-element-jot';

export interface FormElementAttributeFormElementJot {
    id: number;
    value: string;
    created_at: Date;
    updated_at: Date;
    form_element_attribute: FormElementAttribute;
    form_element_jot?: FormElementJot;
}

import { FormElementAttributeFormElementJot } from './form-element-attribute-form-element-jot.interface';
import { FormElement } from './form-element.interface';
import { Jot } from './jot.interface';

export interface FormElementJot {
    id: number;
    title: string;
    description: string;
    order_column: number;
    created_at: Date;
    updated_at: Date;
    form_element: FormElement;
    form_element_attribute_form_element_jots: FormElementAttributeFormElementJot[];
    jot?: Jot;
}

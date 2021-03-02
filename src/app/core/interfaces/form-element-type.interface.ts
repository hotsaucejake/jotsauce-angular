import { FormElement } from './form-element.interface';

export interface FormElementType {
    type_id: number;
    type: string;
    title: string;
    description: string;
    order_column: number;
    created_at?: Date;
    updated_at?: Date;
    form_element: string;
    form_element_id: number;
}

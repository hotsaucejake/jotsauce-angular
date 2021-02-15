import { FormElement } from './form-element.interface';

export interface FormElementType {
    id: number;
    type: string;
    title: string;
    description: string;
    order_column: number;
    created_at?: Date;
    updated_at?: Date;
    form_element: FormElement;
}

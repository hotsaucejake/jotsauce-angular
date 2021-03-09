import { FormElementJot } from './form-element-jot';

export interface Jot {
    id: number;
    title: string;
    description: string;
    slug: string;
    order_column?: number;
    created_at?: Date;
    updated_at?: Date;
    form_element_jots?: FormElementJot[];
    // jot_entries?:
}

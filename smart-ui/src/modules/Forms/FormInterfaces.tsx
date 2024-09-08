import { ChangeEvent, ReactNode } from "react";

export interface IFormFieldProps {
    onChange: (e: any) => void;
    value: any;
    name: string;
    label?: string | null;
    type?: any | null;
    overideEntity?: React.FC ;
}

export interface IFormBuilderProps {
    entity: any;
    textField?: ReactNode;

}
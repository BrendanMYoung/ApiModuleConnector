import FormTextField from "./FormFields/FormTextField";
import { IFormFieldProps } from "./FormInterfaces";

function defaultBuildField({label, value, onChange, overideEntity, name}: IFormFieldProps, fieldMapping: string) {
    switch(fieldMapping) {
        case("string"):
            return (
                <FormTextField 
                    overideEntity={overideEntity}
                    name={name}
                    label={label}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            )
        case("number"):
            return (
                <FormTextField 
                    overideEntity={overideEntity}
                    name={name}
                    label={label}
                    type="number"
                    value={value}
                    onChange={onChange}
                />
            )
        default:
            return (
                <FormTextField 
                    overideEntity={overideEntity}
                    name={name}
                    label={label}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            )
    }
}

export default function DefaultFormMapper(mapper?: any) {

    return {defaultBuildField}
}

export var CustomMapper = {
    "string": ({label, value, onChange, overideEntity, name}: IFormFieldProps) => {
        <FormTextField 
            overideEntity={overideEntity}
            name={name}
            label={label}
            type="text"
            value={value}
            onChange={onChange}
        />
    },
    "number": ({label, value, onChange, overideEntity, name}: IFormFieldProps) => {
        return (
            <FormTextField 
                overideEntity={overideEntity}
                name={name}
                label={label}
                type="number"
                value={value}
                onChange={onChange}
            />
        )
    }
}
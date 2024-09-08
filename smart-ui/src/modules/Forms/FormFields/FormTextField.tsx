import React from "react";
import { useState } from "react"
import { IFormFieldProps } from "../FormInterfaces";


/*
    Dynamically builds state management of a given interface.
*/
const FormTextField: React.FC<IFormFieldProps> = ({label, value, onChange, type, overideEntity, name}) =>  {
    // Override rendering component
    if (overideEntity != null) {
        return <>{overideEntity}</>;
    }

    return (
        <div>
            <a>{label}</a>          
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    )

}
  
export default FormTextField;
  
import React, { ChangeEvent } from "react";
import { ReactNode, useMemo, useState } from "react"
import FormTextField from "./FormFields/FormTextField";
import DefaultFormMapper from "./DefaultFormMapper";

/*
    Dynamically builds state management of a given interface.
*/
function FormBuilder(testEntity: any) {
    const [object, setObject] = useState(testEntity);

    var mapper = DefaultFormMapper(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    }

    function getField(element: any) {
        var name = element[0]
        var t = typeof(element[1])
        console.log(t)
        var formField = mapper.defaultBuildField({
            label: name, 
            value: object[name], 
            onChange: handleChange, 
            overideEntity: null, 
            name: name
        }, t)
        return (formField )
        return (
            <>
                <a>{name}</a>          
                <input type={t} name={name} value={object[name]} onChange={handleChange} />
            </>
        )
    }

    function getFields(): ReactNode {
        var fields = Object.entries(object)
        var fmap = fields.map(element => {
            return getField(element)
        })
        return fmap
    }

    return {object, setObject, handleChange, getFields};
}
  
export default FormBuilder;
  
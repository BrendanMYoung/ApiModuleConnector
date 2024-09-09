import React, { ChangeEvent } from "react";
import { ReactNode, useMemo, useState } from "react"
import FormTextField from "./FormFields/FormTextField";
import DefaultFormMapper from "./DefaultFormMapper";
import { Type } from "typescript";

/*
    Dynamically builds state management of a given interface.
*/
function FormBuilder(testEntity: any) {
    const [object, setObject] = useState(testEntity);

    var mapper = DefaultFormMapper(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;
        var actualValue;
        switch(type) {
            case "number":
                actualValue = Number(value)
                break;
            case "boolean":
                actualValue = Boolean(value)
                break;
            default:
                actualValue = value;
        }
        setObject(
            { ...object, 
                [name]: actualValue 

            }

        )
        ;
    }

    function getField(element: any) {
        var name = element[0]
        var t = typeof(element[1])
        var formField = mapper.defaultBuildField({
            label: name, 
            value: object[name], 
            onChange: handleChange, 
            overideEntity: null, 
            name: name
        }, t)
        return (formField )

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
  
import { ReactNode, useEffect, useState } from "react"

function FieldState(initalValue: any) {
    var [object, setObject] = useState(initalValue)

    return {object, setObject}
}


/*
    Dynamically builds state management of a given interface.
*/
function AutoStateBuilder(testEntity: any) {
    var entires = {}

    var fields = Object.entries(testEntity)

    fields.forEach(element => {
        var name = element[0]
        var setName = "set" + name.charAt(0).toUpperCase() + name.slice(1)
        var {object, setObject} = FieldState(element[1])
        entires = {...entires, [name]: object, [setName]: setObject}
    })
    
    return entires;
}
  
export default AutoStateBuilder;
  
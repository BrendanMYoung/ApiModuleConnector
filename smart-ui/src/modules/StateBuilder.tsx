import { ReactNode, useState } from "react"

function FieldState(initalValue: any) {
    var [object, setObject] = useState(initalValue)

    return {object, setObject}
}
/*
    Dynamically builds state management of a given interface.
*/
function StateBuilder(testEntity: any) {
    
    const [object, setObject] = useState(testEntity);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    }


    function getField(element: any) {
        var name = element[0]
        var t = typeof(element[1])
        var value = element[1]
        console.log(t)
        if (Array.isArray(value)) {
            console.log(value)

        }
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
  
export default StateBuilder;
  
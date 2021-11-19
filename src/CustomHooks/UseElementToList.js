import {useState} from 'react'

const useElementToList=(initialValue)=>{

    const[elements, setElements]=useState([initialValue])

    const addElement=element =>{

        element.id=Date.now()
        setElements(...initialValue,element)
    
    }

    const deleteElement= (elementId)=>{
        setElements(elements.filter(element=>element.id!==elementId))
    }
    return [elements, addElement, deleteElement]

}

export default useElementToList
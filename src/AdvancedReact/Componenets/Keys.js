import { useState } from "react"
import { ToDO } from "./ToDo";

const todoItems = [
    {
        id: 'ToDo 1',
        createdAt: "18:00"
    },
    {
        id: "ToDo 2",
        createdAt: "20:30"
    }
]

const Keys = () =>
{
    const [toDos, updateToDos] = useState(todoItems);

    function doReverse()
    {
        updateToDos([...todoItems].reverse());
    }

    function doSort()
    {
        updateToDos([...todoItems].sort());
    }

    return <>
        <button onClick={doSort}>Sort</button> <br/>
        <button onClick={doReverse}>Reverse</button> <br/>

        <h2>When not using proper Keys property value in list</h2>
        
        <table>
            <tbody>
                {
                    toDos.map( (e , index) => {
                        return <ToDO key={index} id={e.id} createdAt={e.createdAt}/>
                    })
                }
            </tbody>
        </table>

        <h2>Using Keys property in list</h2>

        <table>
            <tbody>
                {
                    toDos.map( (e , index) => {
                        return <ToDO key={e.id} id={e.id} createdAt={e.createdAt}/>
                    })
                }
            </tbody>
        </table>
    </>
}

export { Keys }
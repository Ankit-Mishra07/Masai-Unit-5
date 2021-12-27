import React,{useState} from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import {nanoid} from "nanoid"

const Todo = () => {

    const [list, setList] = useState([])
    const handleClick = (data) => {
        
        const payload = {
            title : data,
            status : false,
            id : nanoid(7)
        }
        setList([...list,payload])
    }

    const handleToggle = (e) => {
           const getfil =  list.filter((id) => {
                return e.id == id
            })

            setList([...getfil])
    }


    return (
        <>
            <TodoInput getData={handleClick}/>

            {list.map((e) => (
                <TodoItem key={e.id} {...e} handleToggle={handleToggle}/>
            ))}

        </>
    )
}

export default Todo

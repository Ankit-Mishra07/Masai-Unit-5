import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../Redux/Auth/action';
import { addTodo, deleteTodo } from '../Redux/Todos/action';
import './todo.css'


const Todo = () => {
    const [text, setText] = useState("");
    const {loading, todo, error} = useSelector ((state) => ({
        loading : state.todoState.loading,
        todo : state.todoState.todo,
        error : state.todoState.error
    }))

    const dispatch = useDispatch()

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Something'/>
            <button
            onClick={() => {
                dispatch(addTodo({
                    title : text,
                    status : false
                }))
                setText("")
            }}
            >ADD TODO</button>

            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>

            {
                todo.map((e, i) => (
                    <div key={i} className='todos'>
                        <p>{e.title}</p>
                        <button onClick={() => {
                            dispatch(deleteTodo(i))
                        }}>Delete</button>
                        <button onClick={ () => {

                            dispatch(deleteTodo(i))
                            setText(e.title)
                        }

                        }>Edit</button>
                    </div>
                ))
            }


        </div>
    )
}

export default Todo

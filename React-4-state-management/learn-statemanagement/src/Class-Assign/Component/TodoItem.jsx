import React from 'react'

const TodoItem = ({title, status, id, handleToggle}) => {

    console.log("id for title " , id)

    return (
        <>

<div>{title} - {status ? "Done" : "Not Done"}</div>
            <button onClick={() => handleToggle()}>Mark as Done</button>
        </>
    )
}

export default TodoItem

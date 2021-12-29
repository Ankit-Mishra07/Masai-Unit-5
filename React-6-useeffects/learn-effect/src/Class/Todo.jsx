import React, {useEffect, useState} from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([])

  const getTodos = () => {
      fetch("http://localhost:3003/todos")
      .then(d => d.json())
      .then((res) => setTodos(res))
  }

  useEffect(() => {
    getTodos()
  })

  const addTodo= () => {
    const payload = {
      title : text, status: false
    }

    fetch("http://localhost:3003/todos", {
      method: "POST",
      body : JSON.stringify(payload),
      headers : {
        "Content-type" : "application/json"
      }
    }).then(() => {
    
    getTodos()
    setText("")
    })
  }


  return (
    <>
      <input
      value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {
          todos.map((e, i) => (
              <div key={i}>{e.title}</div>
          ))
      }
    </>
  );
};

export default Todo;

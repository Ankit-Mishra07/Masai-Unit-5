import React from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(5)

  const handleIncrement = (value) => {
    setCounter(counter + value)
  }

  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>{counter}</h2>
     <button onClick={() => handleIncrement(1)}>ADD</button>
     <button onClick={() => handleIncrement(-1)}>REDUCE</button>
    </div>
  );
}

export default App;

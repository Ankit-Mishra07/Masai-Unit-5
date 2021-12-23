import logo from './logo.svg';
import './App.css';

function App() {

  const arr = [1, 2, 3, 4, 5]
  
  return (

    <div className="App">
      {Todos()}
      <Todos />
      <div style={{color: "blue"}}>{arr.map((e) => (
        <h1>Hello {e}</h1>
      ))} </div>
    
    </div>
  );
}

function Todos() {
  return (
    <>
    <h1>Hi Ankit</h1>
    </>
  )
}

export default App;

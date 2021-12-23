import logo from './logo.svg';
import './App.css';

function App() {
  const sty = {
    color : "green",
    fontSize : "40px"
  }
  return (
    <div className="App">
      
      <h1 style={{color: "red"}}>Hello React</h1>
      <h1 style={sty}>Hello React Again</h1>
    
    </div>
  );
}

export default App;

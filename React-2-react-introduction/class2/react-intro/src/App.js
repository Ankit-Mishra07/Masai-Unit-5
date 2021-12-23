import logo from './logo.svg';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <div style={{color: "blue"}}>{[1, 2, 3, 4, 5].map((e) => (
        <h1>Hello {e}</h1>
      ))} </div>
    
    </div>
  );
}

export default App;

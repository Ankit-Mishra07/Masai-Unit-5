import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { store } from './Redux/store';

function App() {


  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

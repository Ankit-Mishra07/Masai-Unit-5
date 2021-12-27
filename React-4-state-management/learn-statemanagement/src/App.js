import './App.css';
import ChildtoParent from './Preclass/ParenttoChild';
import ParenttoChild from './Preclass/ParenttoChild';


function App() {
  return (
    <div className="App">
      <ParenttoChild />
      <ChildtoParent />
    </div>
  );
}

export default App;

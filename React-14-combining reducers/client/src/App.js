import './App.css';
import Todo from './components/Todo';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom"
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <div className='App'>

    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Todo />
        </PrivateRoute>
      }></Route>

      <Route path="/login" element={<Login />}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

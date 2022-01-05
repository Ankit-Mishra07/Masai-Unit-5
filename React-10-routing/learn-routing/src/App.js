import './App.css';
import About from './Class/components/About';
import Home from './Class/components/Home';
import {Route, Routes} from "react-router-dom"
import Contact from './Class/components/Contact';
import Navbar from './Class/components/Navbar';
import Products from './Class/components/Products';
import Users from './Class/components/Users';
import UserDetail from './Class/components/UserDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<UserDetail />}></Route>
        <Route path="*" element={<div>404 page not found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;

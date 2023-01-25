import './App.css';
import Navbar from './components/Users/Navbar';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Users/Home';
import Contact from './components/Users/Contact';
import Signup from './components/Users/Addbook';
import Login from './components/Users/Login';
import About from './components/Users/About';
import Edit from './components/Users/Edit';
import Register from './components/Users/useForm';
import ViewBooks from './components/Users/ViewBooks';
import Editbook from './components/Users/EditBook';
import Adduser from './components/Users/Adduser';
import Edituser from './components/Users/Edituser';

function App() {
  return (
    <>
     <BrowserRouter>
    {/* <Navbar /> */}
     <Routes> 
        <Route path ="/" element = {<Login/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/login" element = {<Login/>} /> 
        <Route path= "/about" element = {<About/>} />
        <Route path="/register" element = {<Register/>} /> 
        <Route path="/update/:id" element = {<Edit/>} /> 
        <Route path="/addbook" element = {<Signup/>} />
        <Route path="/viewbook" element = {<ViewBooks/>} />
        <Route path="/update-book/:id" element = {<Editbook/>} />
        <Route path="/add" element = {<Adduser/>} />
        <Route path="/update-user/:id" element = {<Edituser/>} /> 
      </Routes> 
    </BrowserRouter> 
    </>
  );
}

export default App;

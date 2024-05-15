import './App.css';
import Login from './components/LoginForm';
import Register from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { AuthProvider } from "./components/AuthContext";
import Todo from "./components/Todo";


const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
     <Routes>
     <Route path ="/" element ={<Login/>} />
     <Route path ="/register" element ={<Register/>} />
     <Route path ="/todo" element ={<Todo/>} />
     
     <Route path ="" element ={<Dashboard/>} />
     </Routes>
     </AuthProvider>
   

     </BrowserRouter> 
    
  );
}

export default App;

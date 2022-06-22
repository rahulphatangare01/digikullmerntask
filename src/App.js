// import './App.css';
import{BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import StudentData from './componant/home/StudentData';
import StudentDataUpload from './componant/home/StudentDataUpload';
import Login from './componant/login/Login';
import Signup from './componant/signup/Signup';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<StudentDataUpload/>}/>
        <Route path="/home1" element={<StudentData/>}/>


        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

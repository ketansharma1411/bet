import './App.css';
import Home from './components/Home';
import Footer_boot from './components/Footer_boot';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from './components/Signup';

import Navbar_up from './components/Navbar_up';

import Login1 from './components/Login1';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar_up/>
      
      
      <Routes>
      
      <Route  path='/' element={<Home/>}></Route>
      
      <Route exact path='/login' element={<Login1/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/success' element={<Home/>}></Route>
      <Route exact path='/forgetpassword' element={<ForgetPassword/>}></Route>
      <Route exact path='/resetpassword' element={<ResetPassword/>}></Route>

      
      </Routes>
      
      <Footer_boot/>

      </Router>
      
    </div>
  );
}

export default App;

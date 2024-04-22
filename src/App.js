import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Footer_boot from './components/Footer_boot';
import Statistics from './components/Statistics';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from './components/Signup';
import Login_new from './components/Login_new';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      
      <Routes>
      {/* <Route exact path='/' element={<Home/>}></Route> */}
      <Route  path='/' element={<Home/>}></Route>
      
      <Route exact path='/login' element={<Login_new/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/success' element={<Home/>}></Route>
      
      </Routes>
      {/* <Footer/> */}
      <Footer_boot/>

      </Router>
      
    </div>
  );
}

export default App;

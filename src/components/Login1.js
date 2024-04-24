import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Login1() {
    return (
      <Main>
      <div className='maindiv' style={{color:"white"}}>
        <div class="container">
      <div class="title">Login</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            
            
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required/>
            </div>
            
            <div class="input-box">
              <span class="details">Password</span>
              <input type="text" placeholder="Enter your password" required/>
            </div>
            
            <div className='input-box'>
                <span><Link to='/forgetpassword'>Forget Password?</Link></span>
            </div>
          </div>
          
          
          <div class="button">
            <Link id='btn' to='/'>Login</Link>
          </div>
        </form>
      </div>
    </div>
      </div>
      </Main>
    )
  }
  
  const Main=styled.div`
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
  }
  .button{
      
      background: #0078ff;
      background: linear-gradient(45deg, #ff357a, #fff172);
      border: none;
      cursor: pointer;
      padding: 6px 0px;
      width: 100%;
      height: 200px;
      border-radius: 25px;
      font-size: 1.5rem;
      box-shadow: none;
      outline: none;
      text-align: center;
      
  
  
  }
  #btn{
      text-decoration: none;
      color: #fff;
  
  }
  body{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }
  .container{
    max-width: 700px;
    width: 100%;
    background-color: rgb(255 255 255 / 6%);
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    text-align: left;
  }
  .maindiv{
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: -2rem;
      
  }
  .container .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
    
  }
  .container .title::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }
  .content form .user-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
  }
  form .user-details .input-box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
  }
  form .input-box span.details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .user-details .input-box input{
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
  }
  .user-details .input-box input:focus,
  .user-details .input-box input:valid{
    border-color: #9b59b6;
  }
   form .gender-details .gender-title{
    font-size: 20px;
    font-weight: 500;
   }
   form .category{
     display: flex;
     width: 80%;
     margin: 14px 0 ;
     justify-content: space-between;
   }
   form .category label{
     display: flex;
     align-items: center;
     cursor: pointer;
   }
   form .category label .dot{
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
  }
   #dot-1:checked ~ .category label .one,
   #dot-2:checked ~ .category label .two,
   #dot-3:checked ~ .category label .three{
     background: #9b59b6;
     border-color: #d9d9d9;
   }
   form input[type="radio"]{
     display: none;
   }
   form .button{
     height: 45px;
     margin: 35px 0
   }
   form .button input{
     height: 100%;
     width: 100%;
     border-radius: 5px;
     border: none;
     color: #fff;
     font-size: 18px;
     font-weight: 500;
     letter-spacing: 1px;
     cursor: pointer;
     transition: all 0.3s ease;
     background: linear-gradient(135deg, #71b7e6, #9b59b6);
   }
   form .button input:hover{
    /* transform: scale(0.99); */
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
    }

    @media(max-width: 830px){
   .container{
    max-width: 100%;
    text-align: center;
  }
  .maindiv{
        margin-left: 0;
        width: unset;
    }
  form .user-details .input-box{
      margin-bottom: 15px;
      width: 100%;
    }
    form .category{
      width: 100%;
    }
    .content form .user-details{
      max-height: 300px;
      overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar{
      width: 5px;
    }
    .container .title::before{
        left: auto;
        width: 60px;
    }
    }

   @media(max-width: 584px){
   .container{
    max-width: 100%;
  }
  .maindiv{
        margin-left: 0;
        width: unset;
    }
  form .user-details .input-box{
      margin-bottom: 15px;
      width: 100%;
    }
    form .category{
      width: 100%;
    }
    .content form .user-details{
      max-height: 300px;
      overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar{
      width: 5px;
    }
    }
    @media(max-width: 459px){
    .container .content .category{
      flex-direction: column;
    }
  }
  
  
  `

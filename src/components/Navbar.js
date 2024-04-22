import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Navbar() {
    const toogleBtn=document.querySelector('.toogle_btn')
    const toogleBtnIcon=document.querySelector('.toogle_btn i')
    const dropDownMenu=document.querySelector('.dropdown_menu')
    const [togg,settogg]=useState(false)
    const toogleBtnon1click=()=>{
        console.log(togg)
        if (togg===false){
        dropDownMenu.classList.add('open')
        settogg(true)
        }
        else{
            dropDownMenu.classList.remove('open')
            settogg(false)
        }
        // var isopen=dropDownMenu.classList.includes('open')
        // toogleBtnIcon.classList=isopen?'fa-solid fa-xmark'
        // :'fa-solid fa-bars'
    }

    
    
        
    
    
    
  return (
    <Main>
        <header>
    <div className='navbar'>
        <div className='logo'><a href='/'>LOGO</a></div>
        <ul className='links'>
            <li><a href='/'>BasketBall</a></li>
            <li><a href='/cricket'>Cricket</a></li>
            <li><a href='/ruby'>Ruby</a></li>
            <li><a href='/f1'>F1</a></li>
            <li><a href='/dhu'>DHU</a></li>
            <li><a href='/'>BigBash</a></li>
        </ul>
        <Link id='b1' to='/login' className='action_btn'>Login</Link>
        <Link  to='/signup' className='action_btn'>Signup</Link>
        <div className='toogle_btn' onClick={toogleBtnon1click} >
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>

    <div className='dropdown_menu'>
            <li><a href='/'>BasketBall</a></li>
            <li><a href='/cricket'>Cricket</a></li>
            <li><a href='/ruby'>Ruby</a></li>
            <li><a href='/f1'>F1</a></li>
            <li><a href='/dhu'>DHU</a></li>
            <li><a href='/'>BigBash</a></li>
            <li>
            <Link  to='/login' className='action_btn'>Login</Link>
            </li>
            <li>
            <Link  to='/signup' className='action_btn'>Signup</Link>
            </li>
    </div>
    </header>
      
    </Main>
  )
}

const Main=styled.div`


li{
    list-style: none;
}
a{
    text-decoration:none;
    color: white;
    font-size: 1rem;

}
a:hover{
    color:tomato;
}

header{
  position:relative;
  padding: 0 2rem;
}
.navbar{
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#b1{
    margin-right: -105px;
}
.navbar .logo a{
    font-size: 2rem;
    font-weight: bold;
    color:tomato;
}

.navbar .links{
  display: flex ;
  gap: 1.6rem;
  margin-top: 0.8rem;
  margin-left: 30px;
  align-items: center;

} 

.navbar .toogle_btn{
    /* color: black; */
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    color: white;
    
}
.action_btn{
    background-color: #007FFF;
    /* color: black; */
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    transition: scale .2 ease;
}
.action_btn:hover{
    scale: 1.05;
    color: lightblue;
}
.action_btn:active{
    scale: 0.95;
}


/* dropdown */
.dropdown_menu{
display: none;
position: absolute;
right: 2rem;
top: 60px;
height: 0;
width: 240px;
background-color: rgba(255,255,255,0.1);
backdrop-filter: blur(15px);
border-radius: 10px;
overflow: hidden;
transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
}

.dropdown_menu li{
    padding: 0.7rem;
    margin-bottom: -15px;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.dropdown_menu .action_btn{
    width: 100%;
    display: flex;
    justify-content: center;
}
.dropdown_menu.open{
    height: 300px;
}
/* responsiveness */
@media (max-width:830px){
    .navbar .links,
    .navbar .action_btn{
        display: none;
    }
    .navbar .toogle_btn{
        display: block;
    }
    .dropdown_menu{
        display: block;
    } 
}
@media (max-width: 576px){
    .dropdown_menu{
        left: 2rem;
        width: unset;
        
    }
}

`
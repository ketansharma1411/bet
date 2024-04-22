import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import Statistics from './Statistics'

export default function Home() {
  return (
    <>
    <Main>
        <div className='maindiv'>
            <div className='content'>
                <p>Think You are lucky!</p>
                <p>Let's Try it <span><i class="fa-solid fa-arrow-right"></i></span></p>
                <button>Play With Pro</button>
            </div>
            <div className='picture'>
                <img src='https://cric77.com/wp-content/uploads/2021/03/Cricket-Mobile-betting-app.jpg' alt='sorry'></img>
            </div>
        </div>
        
    </Main>
    <Carousel/>
    <Statistics/>
    </>
  )
}

const Main=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
.maindiv{
    width: 950px;
    height: 500px;
    background-color: rgb(255 255 255 / 6%);
    
    border: none;
    border-radius: 10px;
    margin-left: 1rem;
    padding: 1rem;
    margin-top: 0.2rem;
    display: flex;
    gap: 0.2rem;
}
.content{
    width:50%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    flex-direction: column;
    border: none;
    outline: none;  
    color: white;
    
    transition: 0.1s ease;
    font-family: "bavro";
    font-weight: 400;
    font-style: normal;
}
.content button{
    border: none;
    outline: none;
    border-radius: 7px;
    background-color: #007FFF;
    color: white;
    cursor: pointer;
    transition: scale .2 ease;
    width: auto;
    height: 50px;
    font-size: 21px;
    padding: 0px 10px;
    font-family: "Jersey 10";
    
}
.content button:hover{
    scale: 1.05;
    color: lightblue;
}
.picture{
    /* background-color: white; */
    width: 50%;
    padding: 0.2rem;
    
}
.picture img{
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
}

/* Responsiveness */
@media (max-width:830px){
    .maindiv{
        width: auto;
    }
    .maindiv .content{
        font-weight: 700;
        font-size: 25px;
    }
    .maindiv .content button{
        font-size: 15px;
        height: 40px;


    }
}
@media (max-width: 576px){
    width: auto;  
}

/* animation */

.maindiv{
    animation: transIn 2s;
}

@keyframes transIn {
    from{
        opacity: 0;
        transform: rotateX(-10deg);
    }
    to{
        opacity: 1;
        transform: rotateX(0deg);
    } 
}

`

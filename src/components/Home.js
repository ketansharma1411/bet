import React, { useEffect } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import Statistics from './Statistics'

export default function Home() {

    
    

  return (
    <>
    <div >
    <Main>
        
        <div className='maindiv'>
            <div className='content'>
                <div className='detail'>
                <p id='title'>Think You are lucky!</p>
                <p id='span'>Let's Try it <span><i class="fa-solid fa-arrow-right"></i></span></p>
                </div>
                <div className='detail_more'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iure dolorem. Perspiciatis aspernatur optio suscipit unde! Ea perferendis excepturi magnam, dolore eveniet architecto odio delectus omnis nisi eos repellendus rem.
                </div>
                <button>Play With Pro</button>
            </div>
            <div className='picture'>
                <img src='https://th.bing.com/th/id/OIP.Tjn3F0m9zP9SrC1Lb7FutAAAAA?w=400&h=400&rs=1&pid=ImgDetMain' alt='sorry'></img>
            </div>
        </div>
        
    </Main>
    </div>
    <div className='revel'>
    <Carousel/>
    </div>
    <div className='revel'>
    <Statistics/>
    </div>
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
    flex-direction: row;
    gap: 0.2rem;
}
.detail{
    margin-left:-85px ;
    margin-top: -150px;
    font-size: 45px;
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

    margin-top: 7rem;
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
    
    margin-left: -21rem;
    margin-top: 2rem;
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

.content p{
    line-height: 25px;
}
#span{
    margin-left: -120px;
}
.detail_more{
    font-size: 15px;
    text-align: left;
    margin-left: 5px;
    margin-top: 1rem;
    font-weight: 300;
}


/* scroll effect */
.revel{
    position: relative;
    transform: translateY((3350px));
    display: none;
    transition: 8s ;
}
/* .active{
    transform: translateY((0px));
    opacity: 1;

} */


/* Responsiveness */
@media (max-width:830px){
    .maindiv{
        width: auto;
        
        margin-right: 1rem;
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



@media (min-width:900px) and (max-width:1200px) {
    .maindiv{
        width: auto;
    }
    .maindiv .content .detail_more p{
        width: auto;
        font-size: auto;
        line-break: auto;
        /* margin-left: auto; */
    }
    .maindiv .content{
        margin-left: auto;
        padding-right: auto;
    }
}


@media (min-width:100px) and (max-width: 850px){
    .maindiv{
        width: auto;
        flex-direction: column;
        height: auto;
        gap: 1em;
    }  
    .maindiv .content{
        font-weight: 700;
        font-size: 25px;
        width: auto;
        margin-top: 4rem;
        padding-left: 0;
        position: relative;
    }
    .maindiv .content button{
        display: none;
        font-size: 15px;
        height: 40px;
        /* margin-left:auto; */
        align-items: center;
    }
    .maindiv .content .detail{
        font-size: 25px;
        margin-left: 0;
        margin-top: -3rem;
    }
    #span{
        margin-left: 0;
    }
    .maindiv .picture{
        width: auto;
    }

   


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

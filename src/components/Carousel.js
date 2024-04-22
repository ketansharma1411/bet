import React from 'react'
import styled from 'styled-components'

export default function Carousel() {
  return (
    <Main>
        <div id='cricket' className='maindiv'>

        <p id='pp'>What Do We Have For You <i class="fa-solid fa-arrow-right"></i></p>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators"  >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{borderRadius:"8px"}}>
    <div class="carousel-item active" style={{borderRadius:"8px"}}>
      <img src="https://th.bing.com/th/id/OIP.F0cShnSHvHXNOKudAHiCMwHaGU?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" >
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" style={{borderRadius:"8px"}}>
      <img src="https://th.bing.com/th/id/OIP.ZZuNprXEs126K15CeR-tfwHaE7?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" style={{borderRadius:"8px"}}>
      <img src="https://th.bing.com/th/id/OIP.hqiIT0EbkD3WRRd4wEElRQAAAA?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" >
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </Main>
  )
}

const Main=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

.maindiv{
    
    width: 980px;
    height: 500px;
    border: none;
    border-radius: 10px;
    margin-left: 0rem;
    padding: 1rem;
    margin-top: 1.2rem;
    color: white;  
}
img{
    width: auto;
    height: 500px;
}
#pp{
    font-size: 40px;
    /* font-family: "Jersey 10"; */
    font-weight: 400;
    font-style: normal;
    font-family: "bavro";
}
/* Responsiveness */
@media (max-width:830px){
    .maindiv{
        width: auto;
    }
}
@media (max-width: 576px){
    width: unset;  
}

/* animation */

.maindiv{
    animation: transIn 8s;
    
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

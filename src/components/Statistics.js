import React from 'react'
import styled from 'styled-components'

export default function Statistics() {
  return (
    <Main>
        <div className=' maindiv'>
        <h2>Know Your Player</h2>
        <div class=" card-group gap-1 " style={{backgroundColor:"rgb(255 255 255 / 6%)"}}>
  <div class="card">
    <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-03/GettyImages-1471642056.jpg.webp" class="card-img-top" alt="Giannis Antetokounmpo"/>
    <div class="card-body">
      <h5 class="card-title">Giannis Antetokounmpo</h5>
      <p class="card-text">Standing 6 feet 11 inches (2.11 m) tall and weighing 242 pounds (110 kg), Antetokounmpo is officially listed as a forward and sometimes described as a point forward.</p>
      <p>Current Ranking-5</p>
      <p class="card-text"><small class="text-muted">Last updated 23 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-03/nba-plain--8ee49b9c-d0c7-4321-9ff1-733336fc7c7b.png.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Kevin Durant</h5>
      <p class="card-text">Standing 6 feet 11 inches (2.11 m) tall and weighing 242 pounds (110 kg), Kevin Durant is officially listed as a forward and sometimes described as a point forward</p>
      <p>Current Ranking-30</p>
      <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-04/GettyImages-1249097922%20%281%29.jpg.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Joel Embiid</h5>
      <p class="card-text">Standing 6 feet 11 inches (2.11 m) tall and weighing 242 pounds (110 kg), Joel Embiid is officially listed as a forward and sometimes described as a point forward</p>
      <p>Current Ranking-3</p>
      <p class="card-text"><small class="text-muted">Last updated 30 mins ago</small></p>
    </div>
  </div>
</div>
</div>
    </Main>
  )
}
 const Main=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

 .maindiv{
    width: 940px;
    margin-left: 19px;
    margin-top: 7rem;
 }
 .maindiv h2{
    color: white;
    margin-bottom: 1rem;
    font-weight: bold;
    margin-top: 2rem;
    font-size: 40px;
    font-family: "Jersey 10"; 
    font-weight: 400;
    font-style: normal;
 }
 .card{
    border: 2px solid rgb(0 0 0 / 1%);
    background-color: rgb(255 255 255 / 10%);
    color:white
 }

 @media (max-width:830px) {
    .maindiv{
        width: 100%;
        margin-left: 0;
        margin-top: -80px;
    }
    .maindiv h2{
        margin-top: 16rem;
        margin-bottom: 2rem;
        font-size: 35px;
        
        
        
    }
    
 }
 `
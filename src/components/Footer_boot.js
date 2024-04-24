import React from 'react'
import styled from 'styled-components'

export default function Footer_boot() {
  return (
    
     <Main> 
<div class="container my-5">

  
  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
    
    <section
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "#007FFF",borderRadius:"10px"}}
             >
      
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      

      
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        
      </div>
      
    </section>
    
    <section class="">
      <div class="container text-center text-md-start mt-5">
        
        <div class="row mt-3">
         
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Partners</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px' ,backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" class="text-white">1XBet</a>
            </p>
            <p>
              <a href="#!" class="text-white">Dream11</a>
            </p>
            <p>
              <a href="#!" class="text-white">Viko11</a>
            </p>
            <p>
              <a href="#!" class="text-white">Rummy123</a>
            </p>
          </div>
          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Other links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" class="text-white">Card Betting</a>
            </p>
            <p>
              <a href="#!" class="text-white">Horse</a>
            </p>
            <p>
              <a href="#!" class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-white">Poker</a>
            </p>
          </div>
          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    
    <div
         class="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2024 Copyright:
      <a class="text-white" href="https://GitHub.com/ketansharma1411"
         >Ketan_Sharma</a>
        
    </div>
    
  </footer>
  

</div>
</Main>
    
  )
}

const Main=styled.div`
footer{
    margin-top:6rem;
    border-radius:10px;
    width:980px;
    margin-left:-20px;
    margin-bottom:-100px;
}

@media (max-width: 830px) {
    footer{
        margin-top:4rem;
    border-radius:10px;
    width:100%;
    margin-left:0px;
    margin-bottom:170px;
    }
    
}

`
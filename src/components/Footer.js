import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Main>
      <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>For Business</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                    <a href='/employer'>
                        <p>Health</p>
                    </a>
                    <a href='/employer'>
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                <h4>Resources</h4>
                    <a href='/employer'>
                        <p>Employer123</p>
                    </a>
                    <a href='/employer'>
                        <p>Health123</p>
                    </a>
                    <a href='/employer'>
                        <p>Individual123</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Partner</h4>
                        <a href='/employer'>
                            <p>Employer59</p>
                        </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>company</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                    <a href='/employer'>
                        <p>Health</p>
                    </a>
                    <a href='/employer'>
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>For Business</h4>
                    <div className='socialmedia'>
                        <p><img src=''></img></p>
                        <p><img src=''></img></p>
                        <p><img src=''></img></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} codeInn. All rights reserved.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href='/cc'><div><p>Terms and conditions</p></div></a>
                    <a href='/cc'><div><p>Terms and conditions</p></div></a>
                    <a href='/cc'><div><p>Terms and conditions</p></div></a>
                    <a href='/cc'><div><p>Terms and conditions</p></div></a>
                </div>
            </div>
        </div>
      </div>
    </Main>
  )
}

const Main=styled.div`
.section_padding{
 padding :4rem 4rem ;
}
.footer{
    background-color: #2d2d32;
    margin-top: 15rem;
}
.sb_footer{
    display: flex;
    flex-direction: column;
}
.sb_footer-links{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
    flex-direction: row;
}

.sb_footer-links_div{
    width: 150px;
    margin: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
}
a{
    color: rgb(175,175,179);
    text-decoration: none;
}
.socialmedia{
    display: flex;
    flex-direction: row;
}
.socialmedia i{
    width: 80%;  
}
.sb_footer-links_div h4{
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 0.9rem;
}

.sb_footer-links_div p{
    font-size: 12px;
    line-height: 15px;
    margin: 0.5rem 0;
    cursor: pointer;
}

.sb_footer-below-links{
    display: flex;
    flex-direction: row;
}
.sb_footer-below-links p{
    font-size: 13px;
    line-height: 15px;
    margin-left: 2rem;
    color: white;
    font-weight: 600;
}

hr{
    color: white !important;
    width: 100%;
}
.sb_footer-copyright p{
    font-size: 13px;
    line-height: 15px;
    color: rgb(255,255,255);
    font-weight: 600;
}

@media screen and (max-width:850px) {
    .sb_footer-heading h1{
        font-size: 34px;
        line-height: 42px;
    }
    .sb_footer-links{
        margin: 1rem 0;
    }
    .sb_footer-btn p{
        font-size: 14px;
        line-height: 20px;
    }
    .sb_footer-below{
        flex-direction: column;
        justify-content: left;
    }
    .sb_footer-below-links{
        flex-direction: column;
    }
    .sb_footer-below-links p{
        margin-left: 0rem;
        margin-top: 1rem;
    }
    
}

@media screen and (max-width:400px) {
    .sb_footer-heading h1{
        font-size: 27px;
        line-height: 38px;
    }
}


`
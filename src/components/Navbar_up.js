import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Navbar_up() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <Main>
            <header>
                <div className='navbar'>
                    <div className='logo'><Link to='/'>LOGO</Link></div>
                    <ul className='links'>
                        <li ><Link to='/'>BasketBall</Link></li>
                        <li className='active'><Link to='/cricket'>Cricket</Link></li>
                        <li><Link to='/ruby'>Ruby</Link></li>
                        <li><Link to='/f1'>F1</Link></li>
                        <li><Link to='/dhu'>DHU</Link></li>
                        <li><Link to='/bigbash'>BigBash</Link></li>
                    </ul>
                    <Link to='/login' className='action_btn login_btn'>Login</Link>
                    <Link to='/signup' className='action_btn signup_btn'>Signup</Link>
                    <div className='toggle_btn' onClick={toggleDropdown}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to='/'>BasketBall</Link></li>
                        <li><Link to='/cricket'>Cricket</Link></li>
                        <li><Link to='/ruby'>Ruby</Link></li>
                        <li><Link to='/f1'>F1</Link></li>
                        <li><Link to='/dhu'>DHU</Link></li>
                        <li><Link to='/bigbash'>BigBash</Link></li>
                        <li><Link to='/login' className='action_btn' onClick={closeDropdown}>Login</Link></li>
                        <li><Link to='/signup' className='action_btn' onClick={closeDropdown}>Signup</Link></li>
                    </ul>
                </div>
            </header>
        </Main>
    );
}

const Main = styled.div`
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1rem;
    }

    a:hover {
        color: tomato;
    }

    header {
        position: relative;
        padding: 0 2rem;
    }

    .navbar {
        width: 100%;
        height: 60px;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #b1 {
        margin-right: -105px;
    }

    .navbar .logo a {
        font-size: 2rem;
        font-weight: bold;
        color: tomato;
        margin-left: -10px;
    }

    .navbar .links {
        display: flex;
        gap: 1.6rem;
        margin-top: 0.8rem;
        margin-left: 70px;
        align-items: center;
    }

    .navbar .toggle_btn {
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        color: white;
    }

    .action_btn {
        background-color: #007fff;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.8rem;
        cursor: pointer;
        transition: scale 0.2s ease;
        // margin-right: 10px;
    }
    .login_btn{
        margin-left: 10rem;
    }
    .action_btn:hover {
        transform: scale(1.05);
        color: lightblue;
    }

    .action_btn:active {
        transform: scale(0.95);
    }

    .dropdown_menu {
        display: none;
        position: absolute;
        right: 2rem;
        top: 60px;
        height: 0;
        width: 240px;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        overflow: hidden;
        transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 10;
    }

    .dropdown_menu li {
        padding: 0.7rem;
        margin-bottom: -15px;
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown_menu .action_btn {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .dropdown_menu.open {
        height: 300px;
    }

    @media (max-width: 830px) {
        .navbar .links,
        .navbar .action_btn {
            display: none;
        }

        .navbar .toggle_btn {
            display: block;
        }

        .dropdown_menu {
            display: block;
        }
        .toggle_btn i{
            margin-right: -23px;
        }
        .navbar .logo a {
            margin-left: -30px;
        }
    }

    @media (max-width: 530px) {
        .dropdown_menu {
            left: 2rem;
            width: unset;
        }
        .toggle_btn i{
            margin-right: -23px;
        }
        .navbar .logo a {
            margin-left: -30px;
        }
    }
`;

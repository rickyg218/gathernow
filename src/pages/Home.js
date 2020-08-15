
import React from 'react';
import "../index";
import Navigation from '../components/Navigation';
import {NavLink} from "react-router-dom";
// import {Icon} from 'antd-mobile';
import Footer from '../components/Footer';
import { NavBar } from 'antd-mobile';

export default function Home() {
    return (
        <div className="linkStyle">
           
        <NavLink to="/logIn">logIn</NavLink>,
        <NavLink to="CreateAccount">CreateAccount</NavLink>,
        <NavLink to="/">Home</NavLink>,
        
        <Footer/>

        </div>
    );
    }
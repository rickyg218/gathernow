
import React from 'react';
import "../index.css";
import Logo from './../utils/Images/logo-transparent-notext.png'
import ImageRow from "../components/ImageRow"

import "../index";


export default function DevTeam() {
    return (
        
        <div>
            <ImageRow/>
            <p id="header-team">GatherNow Team</p>
            <p> Here is the GatherNow development team:
            </p>
            <img class="logo" alt="" src={Logo}/>
            
        </div>
    );
};
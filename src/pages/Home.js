
import React from 'react';
import Select from '../components/EventViewer';
import Space from '../components/EventCreation/TimeSelector';
import OverlayVisible from '../components/NavBarComp/DropDown'
import "../index";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
<Select/>

<OverlayVisible/>
        {/* <PickerView/> */}
        {/* <Cards></Cards> */}
    
        </div>
    );
    }
import React from "react";
// import SwitchablePicker from '../components/EventCreation/TimeSelector';
import EventForm from "../components/EventCreation/EventForm";
import '../index.css';
import OverlayVisible from '../components/NavBarComp/DropDown';


export default function CreateEvent() {
  return(
    <div>
      <h1>Create an event</h1>;
      <EventForm/>
</div>
  )
}
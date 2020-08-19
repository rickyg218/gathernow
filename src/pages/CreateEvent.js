import React from "react";
import SwitchablePicker from '../components/EventCreation/TimeSelector';
import EventForm from "../components/EventCreation/EventForm";
import '../index.css';


export default function CreateEvent() {
  return(
    <div>
      <h1>Create an Event Page</h1>
      <EventForm/>
</div>
  )
}
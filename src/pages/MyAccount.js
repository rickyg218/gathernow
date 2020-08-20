import React from "react";
import Container from '../components/UserProfile/UserProfile';
import Card from '../components/UserProfile/EventCard.js';
import '../index';
// import Button from "../components/UserProfile/notification";

export default function MyAccount() {
  return(
    <div>
    <h1>My account Page</h1>
  
  
    <Container/>
    <Card/>
     
      {/* <Button/> */}
       </div>
  )
}


import React, { useState, useEffect } from "react";
import Container from '../components/UserProfile/UserProfile';
import Card from './../components/UserProfile/EventCard.js';
import '../index';
import Button from "../components/UserProfile/EventCard.js";
import API from "../utils/API"
import OverlayVisible from "./../components/NavBarComp/DropDown.js";
function MyAccount() {

  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    API.getCurrentUser().then(res => {
      // console.log(res.data.user);
      setCurrentUser(res.data.user);
    })
  }, [])

  return (
    <>
       {/* <div><h1>Welcome{currentUser.first_name}</h1> </div> */}
     
  {currentUser? <h1>Welcome {currentUser.first_name}! Here are your events coming up:</h1>:null} 
   
      <Container currentUser={currentUser}/>
      <Button /> 

    </>
  )
  }


  export default MyAccount

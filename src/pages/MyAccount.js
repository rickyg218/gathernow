
import React, { useState, useEffect } from "react";
import Container from '../components/UserProfile/UserProfile';
import EventCard from '../components/UserProfile/EventCard.js';
import '../index';
import Button from "../components/UserProfile/EventCard.js";
import API from "../utils/API"


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
     
  {currentUser? <h1>Hello And Welcome {currentUser.first_name}</h1>:null}
      {/* {UserEvent ? <h1>Hello And Welcome</h1> : null}   */}
   
      <Container currentUser={currentUser} />

      {/* <EventCard UserEvent={UserEvent} /> */}
      
      <Button /> 

    </>
  )
  }


  export default MyAccount

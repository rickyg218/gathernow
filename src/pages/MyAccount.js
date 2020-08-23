import React, { useState, useEffect } from "react";
import UserInfo from "./../components/UserProfile/UserProfile";
import EventCard from "./../components/UserProfile/EventCard";
import "../index";
import API from "../utils/API"


function MyAccount() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    API.getCurrentUser().then((res) => {
      // console.log(res.data.user);
      setCurrentUser(res.data.user);
    });
  }, []);

  return (
    <>
     
  {currentUser? <h1>Welcome {currentUser.first_name}! Here are your events coming up:</h1>:null} 
   
      <Container currentUser={currentUser}/>
      <Button />

     
      <EventCard/>
    </>
  );
}

export default MyAccount;

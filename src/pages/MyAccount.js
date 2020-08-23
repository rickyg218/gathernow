import React, { useState, useEffect } from "react";
import UserInfo from "./../components/UserProfile/UserProfile";
import EventCard from "./../components/UserProfile/EventCard";
import "../index";

import API from "../utils/API";

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
  
      <div>
        <h1>Welcome{currentUser.first_name}</h1>
 </div>
      <UserInfo/>
     <EventCard/>

      {currentUser? <h1>Hello And Welcome {currentUser.first_name}</h1>:null} 
    </>
  );
}

export default MyAccount;

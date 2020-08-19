
import React, { useState, useEffect } from "react";
import LogInForm from "../components/LogInForm";
import Container from '../components/UserProfile/UserProfile';
import '../index';
import Button from "../components/UserProfile/Card";







  export default function MyAccount() {
  return(
    
    
    <div>  
    <h1>My account Page</h1>
   <h1>
     Welcome, {currentUser.name}; 
  </h1> 
  
      <Container/>
      <Button/>
  </div>
    
      )
}

    



import React, { useState, useEffect } from 'react';
import Container from '../components/UserProfile/UserProfile';
import '../index';
import Button from "../components/UserProfile/Card";
import API from "../utils/API"
function MyAccount() {

  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    API.getCurrentUser().then(res => {
      console.log(res.data);
      setCurrentUser(res.data.user);
    })
  }, [])

  return (
    <>
      <h1>My account Page</h1>
      <Container />
      <Button />

    </>
  )
  }

  export default MyAccount
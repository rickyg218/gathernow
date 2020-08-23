import React from "react";
import {NavLink} from "react-router-dom";
import { NavBar, Icon} from "antd-mobile";
import OverlayVisible from "./../components/NavBarComp/DropDown.js"
import Logo from './../utils/gnLogo.png'
import "../index";

const Navigation = () => {
  const styles = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      color: "salmon",
      fontSize: "500px",
      backgroundColor: "#4b5ba2",
      padding: `${50}px`,
      align: "left"
    },
  };

  return (
    <>
      <NavBar
        className="container home"
        style={styles.navStyle}
        mode="light"
        color="white"
        fontSize="500px"
        leftContent={[<OverlayVisible />]}
        rightContent={"GatherNow"}
      >   
<<<<<<< HEAD
      <img src={Logo} alt="GatherNow logo"/>
       
      </NavBar>
  
=======
        <div>
      <NavLink to="/CreateAccount">CreateAccount</NavLink>,
        <NavLink to="Home">Home</NavLink>,
        <NavLink to="/LogIn">LogIn</NavLink>,
        <NavLink to="/MyAccount">MyAccount</NavLink>,
        <NavLink to="/CreateEvent">Create New Event</NavLink>,
        <NavLink to="/Chat">Chat</NavLink>,
      </div>
        <h1>GatherNow</h1>
      </NavBar>
 
>>>>>>> dev
    </>
  );
};

export default Navigation;

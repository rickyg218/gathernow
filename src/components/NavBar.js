import React from "react";
<<<<<<< HEAD
import { NavBar} from "antd-mobile";
=======
import {NavLink} from "react-router-dom";
>>>>>>> e78de4186ab6ba84e63291ee04cb28c3d3b0aaf9
import OverlayVisible from "./../components/NavBarComp/DropDown.js"
import Logo from './../utils/logo-transparent-notext.png'
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
        className="container logo"
        style={styles.navStyle}
        mode="light"
        color="white"
        fontSize="500px"
        leftContent={[<OverlayVisible />]}
        rightContent={<img src={Logo} alt="GatherNow logo"></img>}
      >   
       
      </NavBar>
  
    </>
  );
};

export default Navigation;

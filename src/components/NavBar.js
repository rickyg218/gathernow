import React from "react";
import {NavLink} from "react-router-dom";
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
      <img src={Logo} alt="GatherNow logo"/>
       
      </NavBar>
  
    </>
  );
};

export default Navigation;

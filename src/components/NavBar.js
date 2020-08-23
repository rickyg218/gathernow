import React from "react";
import {NavLink} from "react-router-dom";
import { NavBar, Icon} from "antd-mobile";

import "../index";

const Navigation = () => {
  const styles = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      color: "White",
      backgroundColor: "blueviolet",
      padding: `${50}px`,
    },
  };

  return (
    <>
      <NavBar
        className="container"
        style={styles.navStyle}
        mode="light"
        leftContent={[<Icon key="1" type="ellipsis" />]}
        rightContent={"home"}
      >    <div>
      <NavLink to="/CreateAccount">CreateAccount</NavLink>,
        <NavLink to="Home">Home</NavLink>,
        <NavLink to="/LogIn">LogIn</NavLink>,
        <NavLink to="/MyAccount">MyAccount</NavLink>,
        <NavLink to="/CreateEvent">Create New Event</NavLink>,
        <NavLink to="/Chat">Chat</NavLink>,
      </div>
        <h1>GatherNow</h1>
      </NavBar>
  
      <div></div>
    </>
  );
};

export default Navigation;

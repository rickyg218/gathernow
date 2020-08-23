import React from "react";
import {NavLink} from "react-router-dom";
import { NavBar, Icon} from "antd-mobile";
import OverlayVisible from "./../components/NavBarComp/DropDown.js"

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
        className="container"
        style={styles.navStyle}
        mode="light"
        color="white"
        fontSize="500px"
        leftContent={[<OverlayVisible key="1" type="ellipsis" />]}
        rightContent={"GatherNow"}
      >   
      </NavBar>

    </>
  );
};

export default Navigation;

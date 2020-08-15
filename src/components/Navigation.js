import React from "react";
import { NavLink } from "react-router-dom";
import {NavBar, Icon, Menu} from 'antd-mobile';


const Navigation = () => {

    const styles = {
        navStyle: {
            padding: `${50}px`,
            display: 'flex',
            justifyContent: 'space-around',
            color: 'black',
            backgroundColor: '#e74c3c',
        },
        NavLink: {
            color: 'black',
        }
    
       
    }

  return (
      <>

    <NavBar className="container" style={styles.navStyle}  mode="light"
      leftContent={[
        <Icon key="1" type="ellipsis" />,
      ]}
      rightContent={"home"}
      >
        
        <h1>GatherNow</h1>
  
    </NavBar>
     </>
    
  );
};

export default Navigation;

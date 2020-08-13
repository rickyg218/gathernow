import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/logIn">logIn</NavLink>
            <NavLink to ="CreateAccount">CreateAccount</NavLink>
        </div>
    );
}

export default Navigation;
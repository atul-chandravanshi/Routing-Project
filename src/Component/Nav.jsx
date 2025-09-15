    import React from "react";
    import {Link,NavLink} from 'react-router-dom'
    
    const Nav = () =>{
        return (
          <div>
            <nav className="mt-4 flex justify-center gap-10">
              <NavLink
                style={(e) => {
                  return {
                    color: e.isActive ? "tomato" : "",
                  };
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={(e) => {
                  return {
                    color: e.isActive ? "tomato" : "",
                  };
                }}
                to="/User"
              >
                User
              </NavLink>
              <NavLink
                style={(e) => {
                  return {
                    color: e.isActive ? "tomato" : "",
                  };
                }}
                to="/About"
              >
                About
              </NavLink>
            </nav>
          </div>
        );
    }
    
    export default Nav;
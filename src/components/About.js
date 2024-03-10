import { Outlet, Link } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

class About extends React.Component{
    
    render(){
        return (
            <>
              <h1>About Us Page</h1>
              <Link to="Profile">
                <h2 className="profile-section">Profile</h2>
              </Link>
              <Outlet />
              <br></br>
            
              <Profile />
            </>
          );
    }
}

export default About;

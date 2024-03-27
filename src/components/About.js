import { Outlet, Link } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div className="flex justify-center">
        <div className="flex flex-col bg-gray-200 p-4 ">

          <h1 className="flex justify-center">About Us Page</h1>
          <UserContext.Consumer>{({user}) => <p className="font-bold text-xl p-10">{user.name} - {user.email}</p>}</UserContext.Consumer>
          <Link to="Profile">
            <h2 className="bg-slate-500 text-white m-2 p-2 rounded-lg flex justify-center">
              Profile
            </h2>
          </Link>
          <Outlet />

          <Profile />
        </div>
      </div>
    );
  }
}

export default About;

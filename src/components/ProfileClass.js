import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    count:0, 
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("child-compDidMount before API call");
    const data = await fetch("https://api.github.com/users/raushan-thakur");
    const json = await data.json();

    console.log(json);

    this.setState({
        userInfo : json,
    })
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  render() {
    console.log("child-render");
    return (
      <>
        <h1>Profile Class Component</h1>
        <img className="image-card" src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            if (this.state.count == 0) {
              this.setState({
                count: 1,
              });
            } else {
              this.setState({
                count: 0,
              });
            }
          }}
        >
          Count
        </button>
      </>
    );
  }
}

export default Profile;

import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
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
    const json = await data?.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
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
        <h1 className="flex justify-center">Profile Class Component</h1>

        <div className="flex justify-center">
          <div>
            <img
              className="w-56 rounded-xl"
              src={this?.state?.userInfo?.avatar_url}
              alt="profile_img"
            />
            <h2>Name: {this?.state?.userInfo?.name}</h2>
            <h2>Location: {this?.state?.userInfo?.location}</h2>
            <h2>Count : {this.state.count}</h2>
          </div>
        </div>
        <button
          className="bg-slate-500 text-white m-2 p-2 justify-end rounded-lg"
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

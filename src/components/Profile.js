import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    // API Call
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  return (
    <div>
      <h1> Profile Component</h1>
      <h3>Name : Raushan {props.name}</h3>
      <h3>Count : {count}</h3>
      <h3>Count : {count2}</h3>
      <button
        className="bg-slate-500 text-white m-2 p-2 rounded-lg "
        onClick={() => {
          if (count == 0) {
            setCount(1);
            setCount2(2);
          } else setCount(0);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default Profile;

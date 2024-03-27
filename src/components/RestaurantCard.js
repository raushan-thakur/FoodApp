import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

//Functional Component

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className=" p-2 m-2 shadow-2xl bg-slate-100 w-52 h-80 overflow-hidden rounded-xl ">
      <img
        className="h-40 w-52"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="image"
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <p> ⭐️{avgRating} Stars</p>

      <p >{cuisines.join(", ")}</p>
      {/* <p className="text-cyan-800">
        {user.name} - {user.email}
      </p> */}
      {/* <p>{user.name}</p> */}
    </div>
  );
};

export default RestaurantCard;

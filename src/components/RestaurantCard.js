import { IMG_CDN_URL } from "../constants";

//Functional Component

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
      <div className="card">
        <img
          className="image-card"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="image"
        />
        <h3>{name}</h3>
        <p> ⭐️{avgRating} Stars</p>
  
        <p>{cuisines.join(", ")}</p>
      </div>
    );
  };

export default RestaurantCard;
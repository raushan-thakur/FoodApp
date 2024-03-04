import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const resId = params?.id;
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7494933&lng=77.11836120000001&restaurantId=" +
        resId
    );

    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menuc">
      <div>
        RestaurantMenu
        <h1>Restaurant id : {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          className="image-card"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt="image"
        />
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <h3>⭐️ {restaurant?.avgRating} Stars</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <div>
          <p>
            {restaurantMenu?.map((item, index) => (
              <li key={item.card.info.id}>{item?.card?.info?.name}</li>
            ))}
          </p>
        </div>

        {/* <ul>{Object.values(restaurantMenu?.)}</ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;

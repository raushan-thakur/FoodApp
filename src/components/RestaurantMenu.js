import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const resId = params?.id;
  const {restaurant, restaurantMenu}  = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menuc">
      <div className="menu-left">
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

      <div className="">
        <h1>Menu</h1>
        <div>
          <p>
            {restaurantMenu?.map((item, index) => (
              <li key={item.card.info.id}>
                <div className="listm">
                  <img
                    className="image-card"
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                    alt="image"
                  />
                  <div className="right-menu">
                    <div>
                      {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}
                    </div>
                    <div>{item?.card?.info?.description}</div>
                  </div>
                </div>
              </li>
            ))}
          </p>
        </div>

        {/* <ul>{Object.values(restaurantMenu?.)}</ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;

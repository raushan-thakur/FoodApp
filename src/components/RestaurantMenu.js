import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const resId = params?.id;
  const { restaurant, restaurantMenu, restaurantMenu2 } = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItems = (item) => {
    dispatch(addItem(item));
  };
  const removeItems = () => {
    dispatch(removeItem());
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-between px-4 py-4 pt-9 pb-9 border-solid border-b-2 items-center bg-slate-50">
        <h1>Restaurant id : {resId}</h1>
        <h3>⭐️ {restaurant?.avgRating} Stars</h3>
        <h2 className="font-bold">{restaurant?.name}</h2>
        <img
          className="rounded-xl max-w-52 max-h-52"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt="image"
        />
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <div></div>
      </div>

      <div className="flex justify-center">
        <div className="w-8/12 justify-between ">
          <h1 className="text-slate-800 font-bold text-2xl">Menu</h1>
          <p>
            {restaurantMenu2?.map((item, index) => (
              <li className="list-none" key={item.card.info.id}>
                <div className=" mx-auto flex flex-row items-center justify-between border-b-2 p-4">
                  <div className="text-left flex flex-col ">
                    <div className="text-base font-bold">
                      {item?.card?.info?.name}
                    </div>
                    <div>
                      {" "}
                      ₹{" "}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                  <div className="flex flex-col items-center max-w-44 max-h-44">
                    <img
                      className="p-2 rounded-xl"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt="image"
                    />
                    <div>
                      <button
                        className="p-2 m-2 bg-green-200"
                        onClick={() => {
                          addFoodItems(item);
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="p-2 m-2 bg-green-200"
                        onClick={() => {
                          removeItems();
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </p>

          <div className="flex justify-between bg-slate-50 p-2 my-2">
            <h1 className=" font-bold text-2xl ">Recommended</h1>
            <p>🤍</p>
          </div>

          <p>
            {restaurantMenu?.map((item, index) => (
              <li className="list-none" key={item.card.info.id}>
                <div className=" mx-auto flex flex-row items-center justify-between border-b-2 p-4">
                  <div className="text-left flex flex-col ">
                    <div className="text-base font-bold">
                      {item?.card?.info?.name}
                    </div>
                    <div>
                      {" "}
                      ₹{" "}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                  <div className="flex flex-col items-center max-w-44 max-h-44">
                    <img
                      className="p-2 rounded-xl"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt="image"
                    />
                    <div>
                      <button
                        className="p-2 m-2 bg-green-200"
                        onClick={() => {
                          addFoodItems(item);
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="p-2 m-2 bg-green-200"
                        onClick={() => {
                          removeItems();
                        }}
                      >
                        Remove
                      </button>
                    </div>
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

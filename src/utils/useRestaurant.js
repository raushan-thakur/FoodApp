import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [restaurantMenu2, setRestaurantMenu2] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestaurantMenu2(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return { restaurant, restaurantMenu, restaurantMenu2 };
};

export default useRestaurant;

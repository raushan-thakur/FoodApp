import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  return restaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7494933&lng=77.11836120000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log("render");

  if (!allRestaurants) return null;

  //if(filteredRestaurants.length === 0 ) return  (<h1>NO Restaurants Matches Your Filter</h1>);

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <h1>{searchInput}</h1>
        <button
          className="search-btn"
          onClick={() => {
            //setrestaurants();
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((rest) => {
          return (
            <Link to={"/restaurant/" + rest.info.id }  key={rest.info.id} >
              <RestaurantCard {...rest.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

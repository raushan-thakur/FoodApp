import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7494933&lng=77.11836120000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //console.log("render");

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, Please Check Your Internet Connections !!! </h1>;
  }

  if (!allRestaurants) return null; //Early Return

  //if(filteredRestaurants.length === 0 ) return  (<h1>NO Restaurants Matches Your Filter</h1>);

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-2  bg-slate-200 flex justify-center">
        <input
          type="text"
          className="p-2 m-2 focus:bg-slate-200 border rounded-xl"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <h1>{searchInput}</h1>
        <button
          className="px-5"
          onClick={() => {
            //setrestaurants();
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input
          className="m-5"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        ></input> */}
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {filteredRestaurants.map((rest) => {
          return (
            <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
              <RestaurantCard {...rest.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

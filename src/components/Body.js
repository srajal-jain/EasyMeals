import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // hooks- useState()
  // receive inside an array - const [] = useState();

  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  // pass the original value to useState() - useState(initialState); eg- useState(resList);
  // const [state, setState] = useState(initialState);
  // useState() returns an array with 2 elements
  // state - current value of the state
  // setState - function to update the state
  // initialState - initial value of the state
  // first element - current value of the state
  // second element - function to update the state

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  // useEffect() - runs after the first render and after every update
  // useEffect(()=>{}, []); - runs after the first render
  // useEffect(()=>{}, [state]); - runs after the first render and after every update of state
  // useEffect(()=>{}, [state1, state2]); - runs after the first render and after every update of state1 and state2

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // optional chaining - ?. - if the value is null or undefined, the expression will return undefined
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  if(onlineStatus===false){
    return <h1>Looks like you are offline. Please check your internet connection</h1>
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant"
            className="search-box p-1.5 border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 rounded-md bg-green-200"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-orange-200 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

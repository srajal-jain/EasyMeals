import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="res-card p-4 m-4 w-[270] h-[352] rounded-lg bg-gray-50 hover:bg-gray-100 shadow-md">
      <img
        className="rounded-lg w-full h-36 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>⭐ {avgRating} • {sla.deliveryTime} minutes</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>User: {loggedInUser}</h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 rounded-md bg-gray-600 text-white">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;

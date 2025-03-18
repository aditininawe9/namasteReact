import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurant from "../utils/useRestaurant";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const  {itemCards
  // } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

// console.log(resInfo);
  return (
    <div>
      <h1>{name}</h1>/
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {/* <ul>
        {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
      </ul> */}
    </div>
  );
};

export default RestaurentMenu;

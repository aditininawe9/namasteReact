import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurant from "../utils/useRestaurant";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 

return (
    <div>
      <h1><strong>{name}</strong></h1>/
      <h4>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      {categories.map((category) => <RestaurentCategory data = {category.card.card}/>)}
    </div>
  );
};

export default RestaurentMenu;

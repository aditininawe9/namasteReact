import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {MENU_URL} from "../utils/constant"

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams()
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId)
    const json = await data.json();
    setResInfo(json);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const  {itemCards
  } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  console.log("infor", itemCards);
  console.log(
    "resInfo",
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
  );
  // console.log('cloudinaryImageId', resInfo.data.cards[2].card.card.info,cloudinaryImageId);
  // console.log("resInfo", resInfo?.data?.cards[4]);
  return (
    <div>
      <h1>{name}</h1>/
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
      </ul>
    </div>
  );
};

export default RestaurentMenu;

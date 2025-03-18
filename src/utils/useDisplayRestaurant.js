import React, { useState, useEffect } from "react";

const useDisplayRestaurant = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredlist, setfilteredlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0561476&lng=77.5784195&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurentList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredlist(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return [restaurentList, filteredlist,setfilteredlist];
};

export default useDisplayRestaurant;

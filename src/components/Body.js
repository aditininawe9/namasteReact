import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredlist, setfilteredlist] = useState([])

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
    setfilteredlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };

  if (restaurentList.length === 0) {
    return <Shimmer />;
  }
  console.log(restaurentList);
  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
          let filter = restaurentList.filter((res) => res.rating > 4);
          setfilteredlist(filter);
        }}
      >
        Filter
      </button>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={() => {
          const filteredResult = restaurentList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          console.log(filteredResult);
          setfilteredlist(filteredResult);
        }}
      >
        Search
      </button>
      <div className="res-container">
        {filteredlist.map((restaurent, i) => (
          <RestaurentCard key={i} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;

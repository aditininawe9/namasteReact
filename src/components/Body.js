import RestaurentCard, { withOpenLabel } from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useDisplayRestaurant from "../utils/useDisplayRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurentList, filteredlist, setfilteredlist] =
    useDisplayRestaurant();
  const onlineStatus = useOnlineStatus();
  const RestaurentOpenLabelCard = withOpenLabel(RestaurentCard);

  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;

  console.log("restaurentList", restaurentList);
  if (restaurentList.length === 0) {
    return <Shimmer />;
  }

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
        className="bg-green-100"
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
          <Link
            key={restaurent?.info?.id}
            to={"/restaurants/" + restaurent?.info?.id}
          >
            {restaurent.info.isOpen ? (
              <RestaurentOpenLabelCard key={i} resData={restaurent} />
            ) : (
              <RestaurentCard key={i} resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

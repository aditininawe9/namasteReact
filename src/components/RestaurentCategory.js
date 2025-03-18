import React from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data }) => {
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Header */}
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.title} ({data.itemCards.length})
          </span>
          {/* Accordian */}
          <span>!</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurentCategory;

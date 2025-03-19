import React from 'react'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
            <div>
                <span>{item.card.info.name}</span>
                <span> - {item.card.info.price}</span>
            </div>
            <button
          onClick={() =>handleAddItem(item)}
          className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
        </div>
      ))}
    </div>
  )
}

export default ItemList

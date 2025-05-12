import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, show, setShowIndex }) => {
    // const[show, setShow]= useState(false);
  const { title, itemCards } = data;


  const handleClick = () => {
    setShowIndex()
  }
  return (
    <div className="m-4 p-4 text-center">
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 m-auto">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {show && <ItemList items={itemCards} />}
        
      </div>
    </div>
  );
};

export default RestaurantCategory;

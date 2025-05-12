import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null)
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId); //custom hook
  if (resData === null) return <Shimmer />;

  const { text } = resData?.cards[0].card.card;
  const categories =
    resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold">{text}</h1>
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          show = {index === showIndex ? true: false}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

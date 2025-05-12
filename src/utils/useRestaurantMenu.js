import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchDate();
  }, []);

  const fetchDate = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResData(json.data);
  };
  return resData;
};

export default useRestaurantMenu;

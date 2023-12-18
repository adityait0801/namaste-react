import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";   
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants";

const RestaurantMenu = () => {
    
     const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect( ()=> {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {

       const data = await fetch(MENU_API+resId);
// https://corsproxy.io/?
       const json = await data.json();
       console.log(json);
       setResInfo(json.data);
        
    };

    if(resInfo === null)
    return <Shimmer/>

    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
 
    console.log(itemCards);


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>

            {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
      ))}
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li> */}
                <li>Delivery Time</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu ;
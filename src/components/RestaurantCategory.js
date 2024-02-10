import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowIndex();
        setShowItems(!showItems);
    }

    return (
        <div className="w-6/12 m-auto shadow-lg p-4 my-4 bg-gray-100">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} - ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            <div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;
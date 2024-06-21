import React, { useEffect, useState } from 'react';
import BestAllcard from './BestAllCard';
import API from '../ItemAPI';
import {getTopFavoriteItems} from './utils';


function BestCard() {
    const [itemList, setItemList] = useState([]);
  
    useEffect(() => {
      const fetchAndProcessData = () => {
        const data = API;
        const topFavoriteItems = getTopFavoriteItems(data, 4);
        setItemList(topFavoriteItems);
      };
  
      fetchAndProcessData();
    }, []);

    return (
        <div>
          <div className="card-container">
            {itemList.map((item) => (
              <BestAllcard 
                key={item.id}
                images={item.images}
                name={item.name}
                price={item.price}
                favoriteCount={item.favoriteCount}
              />
            ))}
          </div>
        </div>
      );
    }

export default BestCard;


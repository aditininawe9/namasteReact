import RestaurentCard from './RestaurentCard'
import resList  from '../utils/mockData'
import { useState } from 'react';

const Body = () => {
    const [restaurentList, setRestaurentList] = useState(resList);

    return (
      <div className="body">
        <button className="search" onClick={() => {
            let filter = restaurentList.filter((res) => res.rating > 4)
            setRestaurentList(filter) 
        }}>Filter</button>
        <div className="res-container">
        {restaurentList.map((restaurent) => <RestaurentCard key={restaurent.id} resData={restaurent}/>)}
        </div>
      </div>
    );
  };

export default Body
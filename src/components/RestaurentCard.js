const RestaurentCard = ({resData}) => {
  const {
    restaurantName,
    cuisine,
    rating,
    deliveryTime,
    priceForTwo,
    imageUrl,
    distance,
  } = resData;

  return (
    <div className="res-card">
      <img src={imageUrl} />
      <h3>{restaurantName}</h3>
      {/* <h4>{cuisine.join(', ')}</h4> */}
      <h5>{rating} stars</h5>
      <h2>{distance}</h2>
    </div>
  );
};


export default RestaurentCard
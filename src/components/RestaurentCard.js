const RestaurentCard = ({resData}) => {

  return (
    <div className="res-card">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info?.cloudinaryImageId}`} />
      <h3>{resData.info?.name}</h3>
      <h4>{resData.info?.cuisine}</h4>
      <h5>{resData.info?.avgRating} stars</h5>
    </div>
  );
};

export const withOpenLabel = (RestaurentCard) => {
  return(props) => {
    return (
      <><div>Open</div><RestaurentCard {...props}/></>
    )
  }
}


export default RestaurentCard
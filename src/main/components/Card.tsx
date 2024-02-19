const Card = ({ resData }) => {
  const { name, rating, image } = resData?.info;
  return (
    <div className="card-container">
      <img className="card-logo" alt="Resturant" src={image.url} />
      <h4>{name}</h4>
      <p>{rating.aggregate_rating} ⭐</p>
      <p>{resData.order.deliveryTime}</p>
    </div>
  );
};

export default Card;

const Restaurent = (props) => {
  const { resList } = props;
  // const { name, cloudinaryImageId, cuisines, avgRating } = resList?.info;
  console.log(resList);
  return (
    <>
      <div className="res-container">
        <div className="res-card">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
              // cloudinaryImageId
            }
          />
          <ul className="cardd-list">
            {/* <li>{name}</li> */}
            {/* <li>{cuisines}</li>
            <li>{avgRating}</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Restaurent;

import { useState, useEffect } from "react";
import { resData } from "../utils/mockData";
import Card from "./Card";

const SearchBar = () => {
  const [resList, updateResData] = useState(resData);
  const [enableFilterButton, updateEnableFilterButton] = useState(false);

  const handleTopRated = () => {
    updateResData(
      resData.filter((data) => data.info.rating.aggregate_rating > 4)
    );
    updateEnableFilterButton(true);
  };

  const handleFastDelivery = () => {
    updateResData(
      resData.filter((data) => data.order.deliveryTime.split(" ")[0] < 25)
    );
    updateEnableFilterButton(true);
  };

  const handleClear = () => {
    updateResData(resData);
    updateEnableFilterButton(false);
  };

  return (
    <div className="body">
      <div className="search-input">
        <input type="text" placeholder={"Search Resturants..."} />
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Resturants
        </button>
        <button
          className="filter-btn"
          style={{ margin: "5px 0px" }}
          onClick={handleFastDelivery}
        >
          Fast Delivery
        </button>
        {enableFilterButton && (
          <button className="clear-filter-btn" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
      <div className="div-container">
        {resList.map((data) => (
          <Card resData={data} key={data.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

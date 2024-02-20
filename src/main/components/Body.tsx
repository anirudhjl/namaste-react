import { useState, useEffect } from "react";
import { resData } from "../utils/mockData";
import Card from "./Card";

const Body = () => {
  const [resList, updateResData] = useState(resData);
  const [searchText, updateSearchText] = useState("");
  const [enableFilterButton, updateEnableFilterButton] = useState(false);
  const [filteredResList, updateFilteredResList] = useState(resList);

  useEffect(() => {
    searchText === ""
      ? updateFilteredResList(resData)
      : updateFilteredResList(
          resList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
  }, [searchText, resData]);

  const handleChange = (e) => {
    updateSearchText(e.target.value);
  };

  const handleTopRated = () => {
    updateFilteredResList(
      resData.filter((data) => data.info.rating.aggregate_rating > 4)
    );
    updateEnableFilterButton(true);
  };

  const handleFastDelivery = () => {
    updateFilteredResList(
      resData.filter((data) => data.order.deliveryTime.split(" ")[0] < 25)
    );
    updateEnableFilterButton(true);
  };

  const handleClear = () => {
    updateFilteredResList(resData);
    updateEnableFilterButton(false);
  };

  return (
    <div className="body">
      <div className="search-input">
        <input
          type="text"
          placeholder={"Search Resturants..."}
          value={searchText}
          onChange={handleChange}
        />
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
        {filteredResList.length ? (
          filteredResList.map((data) => (
            <Card resData={data} key={data.info.resId} />
          ))
        ) : (
          <p>Nothing matched your search text🥺.</p>
        )}
      </div>
    </div>
  );
};

export default Body;

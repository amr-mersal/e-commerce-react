import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../Images/sort.png";
const SearchCount = ({ title }) => {
  const handler = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              Bestseller
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div className="border-bottom card-filter-item"> Bestselling</div>
            <div className="border-bottom card-filter-item">
              Avg. Customer Review{" "}
            </div>
            <div className="border-bottom card-filter-item">
              Price: Low to High
            </div>
            <div className=" card-filter-item"> Price: High to Low </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};
export default SearchCount;

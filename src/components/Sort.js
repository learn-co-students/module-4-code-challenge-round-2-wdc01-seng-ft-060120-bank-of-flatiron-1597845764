import React from "react";

const Sort = (props) => {

    let { sortBy, changeSortBy } = props
    
  return (
    <div className="ui large fluid icon input">
        <strong>Sort by:</strong>
            <label>
                <input
                    type="radio"
                    value="None"
                    checked={ sortBy === 'None'}
                    onChange={(e) => changeSortBy( e.target.value )}
                />
                None
            </label>
            <label>
                <input
                    type="radio"
                    value="Category"
                    checked={ sortBy === 'Category'}
                    onChange={(e) => changeSortBy( e.target.value )}
                />
                Category
            </label>
            <label>
                <input
                    type="radio"
                    value="Description"
                    checked={ sortBy === 'Description'}
                    onChange={(e) => changeSortBy( e.target.value )}
                />
                Description
            </label>

    </div>
  );
};

export default Sort;

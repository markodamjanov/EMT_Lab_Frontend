import React from "react";

const Category = (props) => {
  return (
    <div className="container mt-4">
      <ul class="list-group">
        <li
          class="list-group-item active text-center w-50 m-auto"
          style={{ fontSize: "1.3rem" }}
        >
          Categories
        </li>
        {props.categories.map((term) => {
          return (
            <li
              class="list-group-item text-center w-50 m-auto"
              style={{ fontSize: "1.3rem" }}
            >
              {term}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;

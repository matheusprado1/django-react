import React from "react";

function Rating({ value }) {
  let val = value;
  let str_val = val.toString();
  let arr_val = str_val.split(".");
  let main_val = parseInt(arr_val[0]);
  let sub_val = parseInt(arr_val[1]);

  let rating_classes = [];

  for (let i = 0; i < main_val; i++) {
    rating_classes.push("fa-solid fa-star");
  }

  if (sub_val >= 1) {
    rating_classes.push("fa-solid fa-star-half-stroke");
  }

  return (
    <span>
      {rating_classes.map(function (rating_class, indx) {
        return <i key={indx} id="stars-color" className={rating_class}></i>;
      })}
    </span>
  );
}

export default Rating;

import React from "react";
import { useParams } from "react-router";
import Products from "../products";

function ProductScreen() {
  const { id } = useParams();
  let clickedProduct = giveProduct(id);
  console.log(clickedProduct);

  return (
    <div>
      <p>productscreen{id}</p>
    </div>
  );
}

function giveProduct(id) {
    let idToSearch = id;
    return Products.filter(function(product) {
        return product._id === idToSearch;
    })
}

export default ProductScreen;

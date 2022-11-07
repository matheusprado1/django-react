import React from "react";
import SingleProduct from "./SingleProduct";

function CategoryProducts() {
  return (
    <section className="container mt-4">
      <h3 className="mb-4">
        <span className="text-success">Python </span>Produtos
      </h3>
      <div className="row mb-4">
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
        <SingleProduct title="Django Project" />
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default CategoryProducts;

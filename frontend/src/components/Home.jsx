import { Link } from "react-router-dom";
import React from "react";
import logo from "../logo.svg";
import SingleProduct from "./SingleProduct";

function Home() {
  return (
    <>
      <main className="mt-4">
        <div className="container">
          {/* Latest Products */}
          <h3 className="mb-4">
            Últimos Produtos
            <Link to="/products" className="float-end btn btn-dark">
              Ver todos os produtos{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
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
            {/* Latest Products End */}
            {/* Categorys  */}
            <h3 className="mb-4">
              Categorias Populares
              <a href="#" className="float-end btn btn-dark">
                Ver todas as categorias{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </h3>
            <div className="row mb-4">
              {/* Category Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Categoria</h4>
                  </div>
                  <div className="card-footer">Produto Downloads: 2356</div>
                </div>
              </div>
              {/* Category Box End*/}
              {/* Category Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Categoria</h4>
                  </div>
                  <div className="card-footer">Produto Downloads: 2356</div>
                </div>
              </div>
              {/* Category Box End*/}
              {/* Category Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Categoria</h4>
                  </div>
                  <div className="card-footer">Produto Downloads: 2356</div>
                </div>
              </div>
              {/* Category Box End*/}
              {/* Category Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Categoria</h4>
                  </div>
                  <div className="card-footer">Produto Downloads: 2356</div>
                </div>
              </div>
              {/* Category Box End*/}
            </div>
            {/* Categorys End */}

            {/* Popular Products */}
            <h3 className="mb-4">
              Produtos Populares
              <a href="#" className="float-end btn btn-dark">
                Ver todos os produtos{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </h3>
            <div className="row mb-4">{/* Product Box */}</div>
            {/*Popular Products End */}
            {/* Popular Seller  */}
            <h3 className="mb-4">
              Vendedores Populares
              <a href="#" className="float-end btn btn-dark">
                Ver todos os vendedores{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </h3>
            <div className="row mb-4">
              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Nome do vendedor</h4>
                  </div>
                  <div className="card-footer">
                    Categorias: <a href="#">Python</a>, <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End*/}
              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Nome do vendedor</h4>
                  </div>
                  <div className="card-footer">
                    Categorias: <a href="#">Python</a>, <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End*/}
              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Nome do vendedor</h4>
                  </div>
                  <div className="card-footer">
                    Categorias: <a href="#">Python</a>, <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End*/}
              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Nome do vendedor</h4>
                  </div>
                  <div className="card-footer">
                    Categorias: <a href="#">Python</a>, <a href="#">PHP</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End*/}
            </div>
            {/* Popular Seller End */}
            {/* Rating and Reviews */}
            <div
              id="carouselExampleIndicators"
              className="carousel slide my-4 border bg-dark text-white p-5"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>
                        A well-known quote, contained in a blockquote element.
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>
                        A well-known quote, contained in a blockquote element.
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>
                        A well-known quote, contained in a blockquote element.
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* End */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

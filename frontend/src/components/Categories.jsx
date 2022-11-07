import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Categories() {
  return (
    <section className="container mt-4">
      {/* Categorys  */}
      <h3 className="mb-4">Todas as categorias</h3>
      <div className="row mb-2">
        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="/category/python/1">Python</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
            </div>
            <div className="card-footer">Produto Downloads: 2356</div>
          </div>
        </div>
        {/* Category Box End*/}
      </div>
      <div className="row mb-2">
        {/* Category Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/category/python/1">Categoria</Link>
              </h4>
            </div>
            <div className="card-footer">Produto Downloads: 2356</div>
          </div>
        </div>
        {/* Category Box End*/}
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
      {/* Categorys End */}
    </section>
  );
}

export default Categories;

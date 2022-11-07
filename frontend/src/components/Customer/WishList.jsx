import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

function WishList() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <Link>
                        <img
                          src={logo}
                          className="img-thumbnail"
                          width="80"
                          alt="..."
                        />
                      </Link>
                      <p>
                        <Link>Django</Link>
                      </p>
                    </td>
                    <td>R$ 10,00</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <Link>
                        <img
                          src={logo}
                          className="img-thumbnail"
                          width="80"
                          alt="..."
                        />
                      </Link>
                      <p>
                        <Link>Django</Link>
                      </p>
                    </td>
                    <td>R$ 10,00</td>
                    <td>
                    <button className="btn btn-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <Link>
                        <img
                          src={logo}
                          className="img-thumbnail"
                          width="80"
                          alt="..."
                        />
                      </Link>
                      <p>
                        <Link>Django</Link>
                      </p>
                    </td>
                    <td>R$ 10,00</td>
                    <td>
                    <button className="btn btn-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <Link>
                        <img
                          src={logo}
                          className="img-thumbnail"
                          width="80"
                          alt="..."
                        />
                      </Link>
                      <p>
                        <Link>Django</Link>
                      </p>
                    </td>
                    <td>R$ 10,00</td>
                    <td>
                    <button className="btn btn-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;

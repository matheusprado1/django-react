import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

function Orders() {
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
                    <th>Status</th>
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
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completo
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Download
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
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completo
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Download
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
                      <span className="text-warning">
                        <i className="fa fa-check-spin fa-spinner"></i> Processando
                      </span>
                    </td>
                    <td>
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
                      <span className="text-danger">
                        <i className="fa fa-times-circle"></i> Cancelado
                      </span>
                    </td>
                    <td>
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

export default Orders;

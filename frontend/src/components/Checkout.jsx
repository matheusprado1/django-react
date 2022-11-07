import { Link } from "react-router-dom";
import React from "react";
import logo from "../logo.svg";

function Checkout(props) {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Todos os itens (4)</h3>
      <div className="row mb">
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produto</th>
                  <th>Preço</th>
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
                    <p><Link>
                      Django
                    </Link></p>
                  </td>
                  <td>R$ 10,00</td>
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
                    <p><Link>
                      Django
                    </Link></p>
                  </td>
                  <td>R$ 10,00</td>
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
                    <p><Link>
                      Django
                    </Link></p>
                  </td>
                  <td>R$ 10,00</td>
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
                    <p><Link>
                      Django
                    </Link></p>
                  </td>
                  <td>R$ 10,00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>R$ 40,00</th>
                </tr>
                <tr>
                  <td colSpan="3" align="center">
                    <Link to="/categories" className="btn btn-secondary">Continue Comprando</Link>
                    <Link className="btn btn-success ms-1">Siga para o Pagamento</Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

import { Link } from "react-router-dom";
import React from "react";

function OrderSuccess() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p>
                <i className="fa fa-check-circle text-success fa-3x"></i>
              </p>
              <h3 className="text-success">
                Seu pedido foi realizado com sucesso!
              </h3>
              <p className="mt-2">
                <Link className="btn btn-primary" to="/">
                  Home
                </Link>
                <Link className="btn btn-secondary ms-2" to="/customer/dashboard">
                  Dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;

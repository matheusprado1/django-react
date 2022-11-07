import { Link } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";

function ChangePassword(props) {
  return (
    <div className="container mt-4">
      <div className="row mb">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-5 col-12 offset-2">
          <div className="card">
            <h4 className="card-header">Mudar Senha</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Nova Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-3">
                    <label for="pwd" className="form-label">
                      Confirmar Senha
                    </label>
                    <input type="password" className="form-control" id="pwd" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;

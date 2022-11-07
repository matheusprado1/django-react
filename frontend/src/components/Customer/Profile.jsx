import { Link } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";

function Profile(props) {
  return (
    <div className="container mt-4">
      <div className="row mb">
      <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-5 col-12 offset-2">
          <div className="card">
            <h4 className="card-header">Atualizar dados</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="firstName" className="form-label">
                    Primeiro Nome
                  </label>
                  <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="mb-3">
                  <label for="lastName" className="form-label">
                    Último nome
                  </label>
                  <input type="text" className="form-control" id="lastName" />
                </div>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Nome de Usuário
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Endereço de Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
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

export default Profile;

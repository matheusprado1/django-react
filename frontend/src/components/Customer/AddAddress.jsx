import React from "react";
import Sidebar from "./Sidebar";

function AddAddress() {
  return (
    <div className="container mt-4">
      <div className="row mb">
      <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-5 col-12 offset-2">
          <div className="card">
            <h4 className="card-header">Adicionar Endereço</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="address" className="form-label">
                    Adicionar Endereço
                  </label>
                  <textarea className="form-control" id="address"></textarea>
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

export default AddAddress;

import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="list-group">
      <Link to="/customer/dashboard" className="list-group-item list-group-item-action">
        Dashboard
      </Link>
      <Link to="/customer/orders" className="list-group-item list-group-item-action">
        Pedidos
      </Link>
      <Link to="/customer/wishlist" className="list-group-item list-group-item-action">
        Favoritos
      </Link>
      <Link to="/customer/profile" className="list-group-item list-group-item-action">
        Perfil
      </Link>
      <Link to="/customer/change-password" className="list-group-item list-group-item-action">
        Mudar Senha
      </Link>
      <Link to="/customer/addresses" className="list-group-item list-group-item-action">
        Endereços
      </Link>
      <Link
        href="#"
        className="list-group-item list-group-item-action text-danger"
      >
        Sair
      </Link>
    </div>
  );
}

export default Sidebar;

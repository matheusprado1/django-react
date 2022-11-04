import React from "react";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Products from "../products";
import Rating from "../components/Rating";

function ProductScreen() {
  const { id } = useParams();
  let clickedProduct = giveProduct(id);
  let matchProduct = clickedProduct[0];

  function stockStatus(noOfStocks) {
    let result = noOfStocks + " Em estoque";
    if (noOfStocks < 1) {
      result = "Sem estoque";
      return result;
    }
    return result;
  }

  function addToCart(noOfStocks) {
    let result = false;
    if (noOfStocks < 1) {
      result = true;
      return result;
    }
    return result;
  }

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Voltar
      </Link>
      <Row>
        <Col md={6}>
          <Image src={matchProduct.image} alt={matchProduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{matchProduct.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={matchProduct.rating} />
              <span className="star-rating">
                {matchProduct.rating} Estrelas
              </span>
            </ListGroup.Item>
            <ListGroup.Item>Preço: R${matchProduct.price}</ListGroup.Item>
            <ListGroup.Item>Descrição: {matchProduct.desc}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Preço:</Col>
                <Col>R${matchProduct.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{stockStatus(matchProduct.count_in_stock)}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button
                  disabled={addToCart(matchProduct.count_in_stock)}
                  className="btn btn-block"
                >
                  Adicionar ao carrinho
                </Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

function giveProduct(id) {
  let idToSearch = id;
  return Products.filter(function (product) {
    return product._id === idToSearch;
  });
}

export default ProductScreen;

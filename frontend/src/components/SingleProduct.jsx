import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function SingleProduct({ product }) {
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Img src={product.image} />
            <Link to={`/product/${product._id}`}><h1>{product.name}</h1></Link>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Rating value={product.rating} />
            <h2>R${product.price}</h2>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleProduct;

import React, { useEffect } from "react";
import "../styles.css";
import { useCartContext } from "../context/cart_context";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
const URL = "https://fakestoreapi.com/products";
function ProductsPage() {
  const { cart, dispatch } = useCartContext();
  const { products, dispatchProductsAction } = useProductsContext();
  const getProducts = async () => {
    const response = await fetch(URL);
    const products = await response.json();
    dispatchProductsAction({ type: "GET_PRODUCTS", products: products });
  };
  useEffect(() => {
    getProducts();
  });
  return (
    <div>
      <Container>
        <span>
          <Link to="/cart">VIEW CART ({cart.total})</Link>
        </span>
        <Row lg={4} md={3} sm={2} xs={1} >
          {products.products.map((item) => {
            const { categoty, price, title } = item;
            return (
              <div key={title}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{categoty}</Card.Text>
                      <Card.Text>$ {price}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={
                          () => dispatch({ type: "ADD_TO_CART", item: item })
                        }
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
      {products.isLoading && (
        <center style={{ marginTop: "20%" }}>LOADING..</center> // explainn
      )}
    </div>
  );
}

export default ProductsPage;

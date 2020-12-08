import React, { useEffect } from "react";
import "../styles.css";
import { useCartContext } from "../context/cart_context";
import { Row, Col, Card, Container } from "react-bootstrap";
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
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/" className="link">Products</Link>
        <Link to="/cart" className="link">Cart ({cart.total})</Link>
      </nav>
      <Container>
        <Row lg={4} md={3} sm={2} xs={1} >
          {products.products.map((item) => {
            const { categoty, image, price, title } = item;
            return (
              <div key={title}>
                <Col>
                  <Card>
                    <div className="card-body">
                      <div className="card-img-wrap">
                        <img src={image} alt={title} className="card-img"></img>
                      </div>
                      <h6 className="ellipsis">{title}</h6>
                      <span className="">{categoty}</span>
                      <Card.Text>$ {price}</Card.Text>
                      <button className="cart-btn"
                        onClick={
                          () => dispatch({ type: "ADD_TO_CART", item: item })
                        }
                      >
                        Buy
                      </button>
                    </div>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
      {products.isLoading && (
        <div className="loader-wrapper loader2-wrapper">
          <div className="loader2">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
            <span className="dot dot-4"></span>
          </div>
        </div> // explainn
      )}
    </div>
  );
}

export default ProductsPage;

import React, { useEffect, useState } from "react";
import "../styles.css";
import { useCartContext } from "../context/cart_context";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useProductsContext } from "../context/products_context";
import ProductModal from "../components/product_modal";
import NavComponent from "../components/nav_component";
const URL = "https://fakestoreapi.com/products";
function ProductsPage() {
  const { cart } = useCartContext();
  const { products, dispatchProductsAction } = useProductsContext();
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const getProducts = async () => {
    const response = await fetch(URL);
    const products = await response.json();
    dispatchProductsAction({ type: "GET_PRODUCTS", products: products });
  };
  useEffect(() => {
    getProducts();
  });
  return (
    <div style={{ zIndex: "999" }}>
      <NavComponent cart={cart} />
      <Container>
        <Row lg={4} md={3} sm={2} xs={1}>
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
                      <div>
                        <Card.Text>$ {price}</Card.Text>
                        <div>

                        </div>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => {
                          // 3. when the user clicks on "BUY"
                          // we're setting our product to the item the user clicked
                          // 4. Also we're setting our modal to true so that the ProductModal would show
                          // with the item the user clicked

                          setProduct(item); // set our cart item
                          setModal(true); // show our modal
                        }}
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
        </div>
      )}
      {/* we want to show the modal if and only if the user clicks on buy 
      1. our modal is false so the modal wont show 
      2. our product is empty as well */}
      {modal && <ProductModal product={product} hide={() => setModal(false)} />}
    </div>
  );
}

export default ProductsPage;

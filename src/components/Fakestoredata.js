import React, { useState, useEffect } from 'react';
// import "../tailwind.css";
import "./styles.css";
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import { ListGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const url = "https://fakestoreapi.com/products"
function Fakestoredata() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        console.log(products);
        setProducts(products);
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Container>
                <Row xs={6} md={3}>
                    {products.map(item => {
                        const { categoty, description, image, price, title } = item
                        return (
                           <div key={title}>
                                <Col>
                                    {/* you've learnt tailwind? not yet, bootstrap, ohh niceee. i guess
                                    i won't disturb so codee, okayyy, it's youtube video i'm using sha
                                    don't be shyy, babyyyyyy,lol
                                    i know it's youuuuu, what happend
                                    it wasn't scrolling, okayyy,wasn't meee, lalalalalalaagging
                                    sorry, this is where you want to intern?\
                                    it's backup plan sha, the md goes to my church, niceee
                                    it's nicee ohhhh, lol don't forget me sha when you're getting 40millll
                                    lol, sureeee
                                    what do you want to do now?
                                    i just got the name of the company that's why i was checking it 
                                    i'll continue what i've been doing na, lol
                                    lol okayyy, let me go through your sexy code first
                                    okayy ,lol
                                    you should arrange your f
                                    okay bosss
                                    okay boss
                                    okay boss
                                    you're the boss
                                    you're a boss
                                    bosssssssss
                                    bossssss
                                    the boss himself
                                    bosssssss
                                    lolll, stop please

                                    okay boss,lol
                                     */}
                                <Card >
                                    <Card.Img variant="top" src={image} className="card-img" />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Text>{categoty}</Card.Text>
                                        <Card.Text>{price}</Card.Text>
                                        <Card.Text>{description}</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                           </div>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Fakestoredata

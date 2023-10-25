import React from "react";
import Search from "../components/Search";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Wraper from "../layouts/Wraper";

function Products({ data = [], dispatch, isLoading, isError, state }) {
  return (
    <Container>
      <div>Movies Page</div>
      <Search dispatch={dispatch} state={state} />
      <Wraper isLoading={isLoading} isError={isError}>
        <Row className="justify-content-center align-items-stretch gap-5 ">
          {data.length > 0 ? (
            data.map((product, i) => (
              <Card
                key={i}
                style={{ width: "18rem" }}
                xl={3}
                lg={4}
                md={6}
                sm={12}
              >
                <Card.Header
                  style={{
                    display: "block",
                    minHeight: "250px",
                    maxHeight: "250px",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      product.poster_path || product.profile_path
                    }`}
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  />
                </Card.Header>

                <Card.Body>
                  <Card.Title className="limit-1">
                    {product.name || product.title}
                  </Card.Title>
                  <Card.Text className="limit-4">{product.overview}</Card.Text>
                  <Card.Text>Media type: {product.media_type}</Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary">See More</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p style={{ fontSize: "60px", textAlign: "center" }}>
              No movies Have founded
            </p>
          )}
        </Row>
      </Wraper>
    </Container>
  );
}

export default Products;

import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Product({ getProduct }) {
  const { id } = useParams();
  const product = getProduct(+id);
  console.log(product);
  return (
    <Container>
      {product ? (
        <Row className="gap-3 align-items-stretch flex-md-row">
          <Col className="p-0" style={{ maxHeight: "50vh" }} xs={12} lg={4}>
            <img
              src={`https://image.tmdb.org/t/p/w500${
                product.poster_path || product.profile_path
              }`}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Col>
          <Col>
            <div className="fs-3 fw-bold">
              {product.media_type === "person"
                ? product.first_air_date?.substring(0, 4)
                : product.release_date?.substring(0, 4)}
            </div>
            <div className="fs-1 fw-bold">{product.title || product.name}</div>
            {product.media_type !== "person" && (
              <>
                <div className="limit-4 my-3">{product.overview}</div>
                <Row className="align-items-center">
                  <Col>
                    <div className=" fw-bold">
                      <span className="fs-1 fw-bold">
                        {product.vote_average}
                      </span>
                      IMDb
                    </div>
                  </Col>
                  <Col sm={"auto"}>
                    <Button variant="dark" className="rounded-0">
                      +
                    </Button>
                    <Button variant="light">&#10084;</Button>
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      ) : (
        <p>no result has founded</p>
      )}
    </Container>
  );
}

export default Product;

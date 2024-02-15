import { Container, Row, Col } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
    <Container fluid className="text-center py-5 bg-light">
      <section>
        <Row className="py-lg-5">
          <Col lg="6" md="8" className="mx-auto">
            <h1>{title}</h1>
            <p>{lead}</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

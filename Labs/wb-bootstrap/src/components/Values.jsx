import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Value({ title, description, action }) {
  return (
    <Card style={{width: "414px", height: "208"}}>
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success" className="mt-auto">{action}</Button>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <section>
      <Container className="py-5">
        <Row className="justify-content-center">
          {values.map(({ title, description, action }, index) => (
            <Col xs="4" key={index}>
              <Value
                key={index}
                title={title}
                description={description}
                action={action}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

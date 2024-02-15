import { Container, Navbar, Nav } from "react-bootstrap";

export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    <Navbar expand="lg" className="bg-success navbar-dark">
      <Container fluid>
        <Navbar.Brand href="/">{brand}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {leftLinks.map(({ url, text }, idx) => (
              <Nav.Link href={url} key={idx}>{text}</Nav.Link>
            ))}
          </Nav>
          <Nav>
            {rightLinks.map(({ url, text }, idx) => (
              <Nav.Link href={url} key={idx}>{text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

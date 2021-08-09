import { Navbar, Nav, Container } from "react-bootstrap";

export const Navigationbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/userCreate">Create User</Nav.Link>
            <Nav.Link href="/userActive">Active User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

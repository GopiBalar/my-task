// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li>
//           <Link to="/">Accourdian</Link>
//         </li>
//         <li>
//           <Link to="/randomColor">RandomCOlor</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Learning React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <NavDropdown title="Concept Demo1" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Accoudian</NavDropdown.Item>
              <NavDropdown.Item href="/2">Star Rating</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/3">Random Colors</NavDropdown.Item>
              <NavDropdown.Item href="/4">ImageSlider</NavDropdown.Item>
              <NavDropdown.Item href="/5">Load More Button</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/6">Tree View</NavDropdown.Item>
              <NavDropdown.Item href="/7">QR Generate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/8">Light Dark Mode</NavDropdown.Item>
              <NavDropdown.Item href="/9">Scroll Indiactore</NavDropdown.Item>
              <NavDropdown.Item href="/10">Custom Tab</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Demo2" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/11">Custom Modal PopUp</NavDropdown.Item>
              <NavDropdown.Item href="/12">
                GitHub Profile Fider
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/13">Serch Autocomplete</NavDropdown.Item>
              <NavDropdown.Item href="/14">TicTacToe</NavDropdown.Item>
              <NavDropdown.Item href="/15">Feature Flag</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/16">
                Use Custom Hook Test
              </NavDropdown.Item>
              <NavDropdown.Item href="/17">
                Use OnClick OutSide Test
              </NavDropdown.Item>
              <NavDropdown.Item href="/18">Use Window Resize</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/19">
                Scroll To Top Bottom
              </NavDropdown.Item>
              <NavDropdown.Item href="/20">Scroll To Section</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

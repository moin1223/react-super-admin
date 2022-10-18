import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant='dark' >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Link</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
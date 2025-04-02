import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { myContext } from '../loginCongtext';

const TopMenu=()=>{
  const navigate = useNavigate();
  const {name, setName, email, setEmail}= useContext(myContext);

  const logout=()=>{
    localStorage.clear();
    setName("");
    setEmail("");
    navigate("/");
  }

  return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Login System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
            <Nav.Link>
              
              {`Welcome ${name}
                Email : ${email}`
              }
             <span onClick={logout}> Logout </span> 
             </Nav.Link>
          </Nav>
         
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;
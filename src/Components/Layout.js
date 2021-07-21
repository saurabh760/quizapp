import React from 'react';

import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
function Layout(props) {
  return (
    <>
      <Navbar bg="primary " variant="dark">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none", color: "white", marginRight: "10px" }} to="/home">QuizPoint</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{ textDecoration: "none", color: "white", marginRight: "15px" }} to="/deskboard">Deskboard</Link>
            <Link style={{ textDecoration: "none", color: "white", marginRight: "15px" }} to="/add-Quiz">AddQuiz</Link>
            <Link  style={{ textDecoration: "none", color: "white", marginRight: "15px" }} to="/logout">Logout</Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        {props.children}
      </div>
    </>

  )
}

export default Layout

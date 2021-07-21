import React from 'react'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import '././css/navbar.css'

/**
* @author
* @function StartingPage
**/

const StartingPage = (props) => {
  return(
      <>
    
   
   <Button
                style={{ marginRight:"25%" ,marginTop:"380px"}}
                variant="contained"
                color="secondary"
                size="large"
             
              >
                register here
              </Button>
              <Button
                style={{ marginTop:"380px"}}
                variant="contained"
                color="secondary"
                size="large"
             
              >
                Login here
              </Button>
    </>
     )

 }

export default StartingPage
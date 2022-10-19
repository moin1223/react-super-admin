import React from 'react'
import { Col, Row,Nav, Navbar } from 'react-bootstrap'
import CustomNavbar from './CustomNavbar'
import Sidebar from './Sidebar'


const MainPage = () => {
  return (
    <React.Fragment>

   <Row>

   <Col lg={2} className="px-0">
    <Sidebar/>
    </Col>
    <Col lg={10} className="px-0">

      <CustomNavbar/>
    </Col>

   





   </Row>

      

    

           
   
    </React.Fragment>
  )
}

export default MainPage
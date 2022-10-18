import React from 'react'
import { Col, Row,Nav, Navbar } from 'react-bootstrap'
import CustomNavbar from './CustomNavbar'


const MainPage = () => {
  return (
    <React.Fragment>
        {/* heading-section */}
        <CustomNavbar/>
       
        {/* navbar-section */}
        <section>
          <Row>
            <Col xs={2} >
        <div className='bg-dark'>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>
          <h1 className='text-primary'>ajhjah</h1>

        </div>

             </Col>
            <Col xs={10}>MainSection</Col>
          </Row>
        </section>
   
    </React.Fragment>
  )
}

export default MainPage
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { LoginFormData } from './LoginFormData'

const LoginForm = () => {
    return (
        <>

            <Container>
                <Row className='d-flex justify-content-center pt-5'>
                    <Col xl={6} lg={6} md={6} sm={6}>
                        <Card>
                            <Card.Header className='bg-success'>
                                Login Form
                            </Card.Header>

                            <Card.Body>
                                <Form>

                                    {LoginFormData.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Form.Group className='pt-3'>
                                                    <Form.Label>{item.lavel}</Form.Label>
                                                    <Form.Control name={item.name} type={item.type} placeholder={item.placeholder} />
                                                </Form.Group >
                                            </div>

                                        )
                                    })}



                                    <Form.Group className='pt-3'>
                                        <Button type='submit'>Submit</Button>
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default LoginForm
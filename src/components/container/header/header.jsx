import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(
        <Container fluid="lg" >
        <Row>
            <Col sm={4}>sm=8</Col>
            <Col sm={2}>sm=4</Col>
            <Col> hola</Col>
        </Row>
        <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
        </Row>
        </Container>
    );
}
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return(
        <Container noGutters="true" fluid="true" >
            <Row >
                <Col style={{ display:"flex", justifyContent: 'center', }} >sm=8</Col>
                <Col style={{ display:"flex", justifyContent: 'center', }}>sm=4</Col>
                <Col style={{ display:"flex", justifyContent: 'center', }}> hola</Col>
            </Row>
        </Container>
    );
}
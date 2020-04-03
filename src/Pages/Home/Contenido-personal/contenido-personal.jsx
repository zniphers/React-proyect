import React from 'react';
import {Col, Row} from 'react-bootstrap';

// Imagenes 
import imagenPersona from './Imagenes/banner.png';
import theFuture from './Imagenes/theFuture.PNG';

//importacion de estilos
import './contenido-personal-estilos.css';


export default function ContenidoPersonal(){
    return(
        <div>
            <Row style={{display:"flex", flexDirection:"row",  justifyContent:"center"}}>
            <Col style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src={theFuture} />
                <p>lorem</p>
                <div className="contenido-personal-cuadro">hola como estassafasf</div>
            </Col>
            <Col>
            <img src={imagenPersona} />
            </Col>
            </Row>
        </div>
    )
}
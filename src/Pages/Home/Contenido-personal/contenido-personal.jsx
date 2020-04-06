import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

// Imagenes 
import imagenPersona from './Imagenes/banner.png';
import theFuture from './Imagenes/theFuture.PNG';

//importacion de estilos
import ComponenteSeleccionIrregular from './componente-seleccion-irregular/componente-seleccion-irregular';
import {ComponenteSeleccionIrregularLlama, ComponenteSeleccionIrregularTierra, 
    ComponenteSeleccionIrregularAgua, ComponenteSeleccionIrregularViento} 
    from './componente-seleccion-irregular/componente-seleccion-irregular';

//importancion de componente conejo
import ImagenConejo from './componente-conejo/componente-conejo';

const useMadeStyle = makeStyles((theme) => ({
    imagenIndicando:{
      [theme.breakpoints.down('sm')]: {
            display:'none',
             },
    }
}));

export default function ContenidoPersonal(){
    return(
        <div style={{marginLeft:"20px", marginRight:"20px", marginTop:"20px"}}>
            <Row style={{display:"flex", flexDirection:"row",  justifyContent:"center"}}>
            <Col style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src={theFuture} alt="imagen de persona apuntando" style={{marginTop: "20px", width : "40%"}}/>
                    <Row style={{display:"flex", flexDirection:"row",  justifyContent:"center"}}>
                    <ComponenteSeleccionIrregularLlama Texto={"hola con las llaves que tenia"} />
                    <ComponenteSeleccionIrregularTierra Texto={"Abri un auto con las llaves que tenia"} />
                    <ComponenteSeleccionIrregularViento Texto={"Abri un auto con las llaves que tenia"} />
                    <ComponenteSeleccionIrregularAgua Texto={"Abri un auto con las llaves que tenia"} />
                    </Row>
                <ImagenConejo style={{display:"block", position:"fixed", left:"20px"}}/>
            </Col>
            <Col className={useMadeStyle().imagenIndicando}>
                <img src={imagenPersona} alt="imagen de persona apuntando"/>
            </Col>
            </Row>
        </div>
    )
}
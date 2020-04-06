import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

// Imagenes 
import imagenPersona from './Imagenes/banner.png';

//importacion de estilos
import ComponenteSeleccionIrregular from './componente-seleccion-irregular/componente-seleccion-irregular';
import {ComponenteSeleccionIrregularLlama, ComponenteSeleccionIrregularTierra, 
    ComponenteSeleccionIrregularAgua, ComponenteSeleccionIrregularViento} 
    from './componente-seleccion-irregular/componente-seleccion-irregular';
import BannerTitulo from './componente-the-future/componente-the-future';

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
        <div style={{marginLeft:"20px", marginRight:"20px", marginTop:"30px"}}>
            <Row style={{display:"flex", flexDirection:"row",  justifyContent:"center"}}>
            <Col style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <BannerTitulo ContenidoSuperior="conoce a" ContenidoCentral="EDUARDO" ContenidoInferior="Tu mejor aliado y compañero" />
                <Row style={{display:"flex", flexDirection:"row",  justifyContent:"center"}}>
                    <ComponenteSeleccionIrregularLlama Texto={"COMPROMETIDO"} />
                    <ComponenteSeleccionIrregularTierra Texto={"ATENTO"} />
                    <ComponenteSeleccionIrregularViento Texto={"FLEXIBLE"} />
                    <ComponenteSeleccionIrregularAgua Texto={"EMPATICO"} />
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
import React from 'react';
import './componente-seleccion-irregular.css';
import Typography from '@material-ui/core/Typography';

export function ComponenteSeleccionIrregularLlama(props){
    return(
        <div className="contenido-personal-contenedor">
            <div className="contenido-personal-contenedor-figura" 
            style={{backgroundImage: 'linear-gradient(176deg,#d5ec04 0%,#f80f0f 70%)'}}></div>
            <Typography className="contenido-personal-contenedor-texto">{props.Texto}</Typography>
        </div>
    )
} 

export function ComponenteSeleccionIrregularTierra(props){
    return(
        <div className="contenido-personal-contenedor">
            <div className="contenido-personal-contenedor-figura" 
            style={{backgroundImage: 'linear-gradient(176deg,#e08f62 0%,#42240c 70%)'}}></div>
            <Typography className="contenido-personal-contenedor-texto">{props.Texto}</Typography>
        </div>
    )
} 

export function ComponenteSeleccionIrregularAgua(props){
    return(
        <div className="contenido-personal-contenedor">
            <div className="contenido-personal-contenedor-figura" 
            style={{backgroundImage: 'linear-gradient(176deg,#005082 0%,#000839 70%)'}}></div>
            <Typography className="contenido-personal-contenedor-texto">{props.Texto}</Typography>
        </div>
    )
} 

export function ComponenteSeleccionIrregularViento(props){
    return(
        <div className="contenido-personal-contenedor">
            <div className="contenido-personal-contenedor-figura" 
            style={{backgroundImage: 'linear-gradient(176deg,#fdfdf6 0%,#64ccda 70%)'}}></div>
            <Typography className="contenido-personal-contenedor-texto">{props.Texto}</Typography>
        </div>
    )
} 

export default ComponenteSeleccionIrregularViento;
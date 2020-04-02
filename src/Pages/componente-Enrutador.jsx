import React from 'react';
// Dependencias de React-Router
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  // Importacion de paginas
import ToDoAplicacionPage from './To-do-aplicacion/to-do-aplicacion-pages';
import PanelTarjetasPage from './Panel-tarjetas/panel-tarjetas-pages';
import Home from '../Pages/Home/home-pages';
import Datasheet from '../Pages/Apuntes-Datasheet/Apuntes-Datasheet'
import './estilos-todas-las-pages.css';


  export default function funcionEnrutador(){
      return(
            <div>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Home">
                    <Home />
                </Route>
                <Route path="/Proyecto-to-do">
                    <ToDoAplicacionPage />
                </Route>
                <Route path="/Poyecto-Panel-Tarjetas">
                    <PanelTarjetasPage />
                </Route>
                <Route path="/Datasheet">
                    <Datasheet />
                </Route>
                <Route >
                    <div style={{display:'flex', flexDirection:"column",justifyContent:"center", alignItems:"center", paddingTop:250}}>
                        <div style={{backgroundColor: "gray", padding:"40px", borderRadius:"20px", border:"solid 2px blue"}}>
                        <h1 style={{color: "yellow"}}>Error 404</h1>
                        <a href="./" style={{textDecoration:"none", color:"white", fontSize:40}}>Press <span style={{color:"blue"}}>Home</span></a>
                        </div>
                    </div>
                </Route>
            </Switch>
            </div>
      )
  } 
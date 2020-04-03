import React from 'react';
import './Estilos-Apuntes-Datasheet.css';
import DesarrolladorWebEn2018 from './Imagenes/Desarrollador-Web-en-2018.png';
import DiagramaFrontEnd from './Imagenes/Diagrama-Front-End.png';
import SpaceInvaderAlien from './Imagenes/space-invader-alien.PNG';
import DiagramaBackEnd from './Imagenes/Diagrama-Back-End.png';
import DiagramaDevOps from './Imagenes/Diagrama-DevOps.jpg';

export default function ApuntesDatasheet(){
    return(
        <div className="body">
            <div className="header"><a id="inicio"></a>
                 <nav>
                    <div>
                        <a href="#">Nombre empresa</a>
                    </div>
                    <ul>
                        <a href="#footer1"><li>Principales lenguajes</li></a>
                        <a href="#footer2"><li>Links utiles</li></a>
                        <li><a href="#nosotros-flotante">Servicios</a></li>
                        <li><a href="#proyectos-destacados-flotante">Proyectos</a></li>
                        <li><a href="#contacto-flotante">Contacto</a></li>
                    </ul>
                </nav>
                <div className="section" id="imagen-logo">
                    <a target="" className="imagenes-agrandables">
                        <img src={DesarrolladorWebEn2018} alt={"Imagen de trayetoria web"} />
                    </a>
                    <a target="" className="imagenes-agrandables">
                        <img src={DiagramaFrontEnd} alt={"Imagen de trayetoria web"} />
                    </a>
                    <a id="imagen-header-2" className="imagenes-no-agrandables">
                        <img src={SpaceInvaderAlien} alt={"Imagen de trayetoria web"} />
                    </a>
                    <a target="" className="imagenes-agrandables">
                        <img src={DiagramaBackEnd} alt={"Imagen de trayetoria web"} />
                    </a>
                    <a target="" className="imagenes-agrandables">
                        <img src={DiagramaDevOps} alt={"Imagen de trayetoria web"} />
                    </a>
                </div>
            </div>
            {/* cierre header */}
            <footer id="footer1">
                <nav>
                    <ul>
                        <a href="#footer1"><li>Principales lenguajes</li></a>
                        <a href="#footer2"><li>Links utiles</li></a>
                        <a href="/Home"><li>Pagina inicial</li></a>
                    </ul>
                </nav>
            </footer>
            {/* <!--Termino Sector de menu (menu.ccs) --> */}
{/* <!-- Seccion menu de navegacion --> */}
    <div className="main">
        <h1 id="Pricipales-lenguajes"><a href="#footer1">Principales lenguajes</a></h1>
            <p className="comentario-menu">Presione la seccion que quiere ver:</p>
        <ul className="menu-primer-contenedor">
            <li className="primer-contenedor"><a href="#html">HTML</a></li>
            <li className="primer-contenedor"><a href="#css">CSS</a></li>
            <li className="primer-contenedor"><a href="#Javascript">Javascript</a></li>
            <li className="primer-contenedor"><a href="#git">GIT</a></li>
            <li className="primer-contenedor"><a href="#Python">Python</a></li>
        </ul>
{/* <!-- Seccion HTML --> */}
        <a id="html1"><h2 id="html">HTML</h2></a>
            <ul>
                <li className="sub-primer-contenedor"><a href="HTML/atributos.html" target="_blank" rel="noopener noreferrer">Etiquetas Secciones</a></li>
                <li className="sub-primer-contenedor"><a href="HTML/atributos.html" target="_blank" rel="noopener noreferrer">Etiquetas Media</a></li>
                <li className="sub-primer-contenedor"><a href="HTML/atributos.html" target="_blank" rel="noopener noreferrer">Etiquetas Tablas</a></li>
                <li className="sub-primer-contenedor"><a href="HTML/atributos.html" target="_blank" rel="noopener noreferrer">Etiquetas Formularios</a></li>

            </ul>
            <h3>Links utiles:</h3>
            <ul>
                <li className="sub-primer-contenedor"><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN ref HTML</a></li>
                <li className="sub-primer-contenedor"><a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/code" target="_blank" rel="noopener noreferrer">MDN ref HTML ref code</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
{/* <!-- Seccion CSS --> */}
        <a href="#footer1"><h2 id="css">CSS:</h2></a>
            <ul>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Medidas.html" target="_blank" rel="noopener noreferrer">CSS Medidas</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Grid.html" target="_blank" rel="noopener noreferrer">CSS Grid</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Flexbox.html" target="_blank" rel="noopener noreferrer">CSS flexbox</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Object-fit.html" target="_blank" rel="noopener noreferrer">CSS Object-fit</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Background.html" target="_blank" rel="noopener noreferrer">CSS Background</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Pseudofunciones.html" target="_blank" rel="noopener noreferrer">CSS Pseudofunciones</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Transition.html" target="_blank" rel="noopener noreferrer">CSS Transition</a></li>
                <li className="sub-primer-contenedor"><a href="CSS/CSS-Efectos.html" target="_blank" rel="noopener noreferrer">CSS Efectos</a></li>
            </ul>
                <h3>Links utiles:</h3>
            <ul>
                <li className="sub-primer-contenedor"><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN ref CSS</a></li>
                <li className="sub-primer-contenedor"><a href="https://developer.mozilla.org/es/docs/Web/CSS/object-fit" target="_blank" rel="noopener noreferrer">MDN ref CSS ref object-fit</a></li>
                <li className="sub-primer-contenedor"><a href="https://css-tricks.com/almanac/properties/o/object-fit/" target="_blank" rel="noopener noreferrer">CSS-Tricks ref CSS ref object-fit</a></li>
                <li className="sub-primer-contenedor"><a href="https://flexboxfroggy.com/#es" target="_blank" rel="noopener noreferrer">https://flexboxfroggy.com/#es</a></li>
                <li className="sub-primer-contenedor"><a href="https://drafts.csswg.org/css-transitions/#animatable-properties" target="_blank" rel="noopener noreferrer">uso de css transition</a></li>
                <li className="sub-primer-contenedor"><a href="https://cubic-bezier.com/#.28,.75,.63,.64" target="_blank" rel="noopener noreferrer">CSS transition cubic-bezier </a></li>
                <li className="sub-primer-contenedor"><a href="https://www.cssmatic.com/es/box-shadow" target="_blank" rel="noopener noreferrer">CSS Box-Shadow cssmatic</a></li>
                <li className="sub-primer-contenedor"><a href="https://drafts.csswg.org/css-transitions/#animatable-properties" target="_blank" rel="noopener noreferrer">CSS Transition doc blog</a></li> 
                <li className="sub-primer-contenedor"><a href="https://www.programandoamedianoche.com/2019/05/guia-completa-para-aprender-a-utilizar-css-grid-layout/" target="_blank" rel="noopener noreferrer">Guía completa para aprender a utilizar CSS Grid Layout</a></li>
                <li className="sub-primer-contenedor"><a href="https://cssgridgarden.com/#es" target="_blank" rel="noopener noreferrer">Grid Garden - A game for learning CSS grid layout</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>    
            </ul>
{/* <!-- Seccion Javascript --> */}
        <a href="#footer1"><h2 id="Javascript">Javascript:</h2></a>
            <ul>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-Variables.html" target="_blank" rel="noopener noreferrer">JS Variables</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-Comparaciones.html" target="_blank" rel="noopener noreferrer">JS Comparaciones</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-Funciones.html" target="_blank" rel="noopener noreferrer">JS Funciones</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-If.html" target="_blank" rel="noopener noreferrer">JS If</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-For.html" target="_blank" rel="noopener noreferrer">JS For</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-Do.html" target="_blank" rel="noopener noreferrer">JS Do</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-While.html" target="_blank" rel="noopener noreferrer">JS While</a></li>
                <li className="sub-primer-contenedor"><a href="Javascript/JS-Switch.html" target="_blank" rel="noopener noreferrer">JS Switch</a></li>
                <li className="sub-primer-contenedor"><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es" target="_blank" rel="noopener noreferrer">React Developer Tools</a></li>
                <li className="sub-primer-contenedor"><a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Empezando – React</a></li>
                <li className="sub-primer-contenedor"><a href="https://addons.mozilla.org/es/firefox/addon/react-devtools/" target="_blank" rel="noopener noreferrer">React Developer Tools – Consigue esta extensión para :fox_face: Firefox (es)</a></li>
                <li className="sub-primer-contenedor"><a href="https://yarnpkg.com/getting-started" target="_blank" rel="noopener noreferrer">yarnpkg.com</a></li>
                <li className="sub-primer-contenedor"><a href="https://es.reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">Crear una nueva aplicación React – React</a></li>
                <li className="sub-primer-contenedor"><a href="https://nodejs.org/es/download/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
                <li className="sub-primer-contenedor"><a href="https://material-ui.com/es/components/buttons/" target="_blank" rel="noopener noreferrer">Componente de React Button - Material-UI</a></li>
                <li className="sub-primer-contenedor"><a href="https://react-bootstrap.github.io/components/buttons/" target="_blank" rel="noopener noreferrer">https://react-bootstrap.github.io/components/buttons/</a></li>
                <li className="sub-primer-contenedor"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" target="_blank" rel="noopener noreferrer">WeakMap</a></li>
                <li className="sub-primer-contenedor"><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React Router: Declarative Routing for React</a></li>
                <li className="sub-primer-contenedor"><a href="https://yarnpkg.com/package/react-router-dom" target="_blank" rel="noopener noreferrer">https://yarnpkg.com/package/react-router-dom</a></li>
                <li className="sub-primer-contenedor"><a href="https://react-bootstrap.github.io/getting-started/introduction/" target="_blank" rel="noopener noreferrer">https://react-bootstrap.github.io/getting-started/introduction/</a></li>
                <li className="sub-primer-contenedor"><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React Router: Declarative Routing for React, Guide - Get start</a></li>
                <li className="sub-primer-contenedor"><a href="https://yarnpkg.com/package/react-bootstrap" target="_blank" rel="noopener noreferrer">https://yarnpkg.com/package/react-bootstrap</a></li>
                <li className="sub-primer-contenedor"><a href="https://github.com/FortAwesome/react-fontawesome" target="_blank" rel="noopener noreferrer">https://github.com/FortAwesome/react-fontawesome</a></li>
                <li className="sub-primer-contenedor"><a href="https://react-bootstrap.github.io/layout/grid/" target="_blank" rel="noopener noreferrer">https://react-bootstrap.github.io/layout/grid/</a></li>
                <li className="sub-primer-contenedor"><a href="https://ed.team/blog/crea-rutas-con-react-router" target="_blank" rel="noopener noreferrer">Crea rutas con React Router en React</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>

            </ul>
            <h3>Links utiles:</h3>
            <ul>
                <li className="sub-primer-contenedor"><a href="https://www.w3schools.com/jsref/jsref_isnan_number.asp" target="_blank" rel="noopener noreferrer">JS W3School Funcion isNaN()</a></li>
                <li className="sub-primer-contenedor"><a href="https://freemarker.apache.org" target="_blank" rel="noopener noreferrer">JS FreeMarker</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer">JS Event Loop</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer">JS MDN Funcion Callback</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer">JS Typeof</a></li>
                <li className="sub-primer-contenedor"><a href="https://quokkajs.com/" target="_blank" rel="noopener noreferrer">Quokka - Live Scratchpad for JavaScript in your editor</a></li>
                <li className="sub-primer-contenedor"><a href="https://www.youtube.com/watch?v=eXwEYSRk73U" target="_blank" rel="noopener noreferrer">Funciones Arrow (de Flecha) Javascript 2018</a></li>
                <li className="sub-primer-contenedor"><a href="https://www.youtube.com/watch?v=GstPXAffmmI" target="_blank" rel="noopener noreferrer">Curso de Javascript - 1.16. Funciones anónimas</a></li>
                <li className="sub-primer-contenedor"><a href="https://www.udemy.com/course/aprendiendo-react/" target="_blank" rel="noopener noreferrer">Tutorial gratuito sobre React - Aprender React JS</a></li>
                <li className="sub-primer-contenedor"><a href="/Imagenes/Camino-JS.jpg" target="_blank" rel="noopener noreferrer">Camino para aprender JS</a></li>
                <li className="sub-primer-contenedor"><a href="https://medium.com/@anamartinezaguilar/callbacks-en-javascript-8deeca9824b4" target="_blank" rel="noopener noreferrer">Callbacks en JavaScript</a></li>
                <li className="sub-primer-contenedor"><a href="https://nodejs.org/es/" target="_blank" rel="noopener noreferrer">Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.</a></li>
                <li className="sub-primer-contenedor"><a href="https://www.w3schools.com/jsref/jsref_match.asp" target="_blank" rel="noopener noreferrer">JavaScript String match() Method</a></li>
                <li className="sub-primer-contenedor"><a href="https://github.com/CookPete/react-player" target="_blank" rel="noopener noreferrer">libreria react para videos</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
{/* <!-- Seccion GIT --> */}
        <a href="#footer1"><h2 id="git">GIT:</h2></a>
            <ul>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">Git Crear Repositorio</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">Git Compartir Repositorio</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">Git Colborar en Proyecto</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">git commit</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">git init</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">git branch</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">git checkout</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">git merge</a></li>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">git reset</a></li>
            </ul>
            <h3>Links utiles :</h3>
                <ul>
                    <li className="sub-primer-contenedor"><a href="https://gist.github.com/almapase/5ded8e3503f7ef7f01648cfaa7215eb3" target="_blank" rel="noopener noreferrer">Git Configuracion MAC y LINUX</a></li>
                    <li className="sub-primer-contenedor"><a href="https://bluuweb.github.io/tutorial-github/guia/fundamentos.html" target="_blank" rel="noopener noreferrer">Git Fundamentos de Blog</a></li>
                    <li className="sub-primer-contenedor"><a href="https://learngitbranching.js.org" target="_blank" rel="noopener noreferrer">Git Juego Branches</a></li>
                </ul>
        <a href="#footer1"><h2 id="git">Android Stuio:</h2></a>
            <ul>
                <li className="sub-primer-contenedor"><a href="https://developer.android.com/studio/intro?hl=es-419" target="_blank" rel="noopener noreferrer">Documentacion de Android Studio Oficial</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
{/* <!-- Seccion Python --> */}
        <a href="#footer1"><h2 id="Python">Python</h2></a>
            <ul>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">null</a></li>
            </ul>
            <h3>Links utiles:</h3>
            <ul>
                <li className="sub-primer-contenedor"><a href="#" target="_blank" rel="noopener noreferrer">null</a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-primer-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
{/* <!--                Fin Seccion                  --> */}

<footer id="footer2">
    <nav>
        <ul>
            <a href="#footer1"><li>Principales lenguajes</li></a>
            <a href="#footer2"><li>Links utiles</li></a>
        </ul>
    </nav>
</footer>
{/* <!--                Inicio Nueva Seccion                  --> */}
        <h1 id="Lista-de-links-utiles"><a href="#footer2">Lista de links utiles</a></h1>
        <p className="comentario-menu">Presione la seccion que quiere ver:</p>
            <ul className="menu-primer-contenedor">
                <li className="segundo-contenedor"><a href="#Documentacion">Documentacion</a></li>
                <li className="segundo-contenedor"><a href="#Editores-de-textos">Editores de textos</a></li>
                <li className="segundo-contenedor"><a href="#Funciones">Funciones</a></li>
                <li className="segundo-contenedor"><a href="#Recursos">Recursos</a></li>
            </ul>
            <a href="#footer2"><h2 id="Documentacion">Documentacion :</h2></a>
            <h3>Documentacion y codigo util :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://mdbootstrap.com/education/bootstrap/" target="_blank" rel="noopener noreferrer">https://mdbootstrap.com/education/bootstrap/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://github.com/oscar-islas/academlo-repo" target="_blank" rel="noopener noreferrer">https://github.com/oscar-islas/academlo-repo</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.w3schools.com/howto/howto_css_image_responsive.asp" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/howto/howto_css_image_responsive.asp</a></li>
                <li className="sub-segundo-contenedor"><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/es/docs/Web/HTML</a></li>
                <li className="sub-segundo-contenedor"><a href="https://sass-lang.com/guide" target="_blank" rel="noopener noreferrer">https://sass-lang.com/guide</a></li>
                <li className="sub-segundo-contenedor"><a href="https://css-tricks.com/snippets/" target="_blank" rel="noopener noreferrer">https://css-tricks.com/snippets/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.galisteocantero.com/mini-manual-de-git/" target="_blank" rel="noopener noreferrer">https://www.galisteocantero.com/mini-manual-de-git/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://developer.mozilla.org/es/docs" target="_blank" rel="noopener noreferrer">MDN Mozilla</a></li>
            </ul>
        <a href="#footer2"><h2 id="Editores-de-textos">Editores de textos :</h2></a>
            <h3>IDEs :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">https://codepen.io/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">https://www.sublimetext.com/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">https://atom.io/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://codeshare.io/" target="_blank" rel="noopener noreferrer">https://codeshare.io/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://repl.it/" target="_blank" rel="noopener noreferrer">https://repl.it/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://pastebin.com/" target="_blank" rel="noopener noreferrer">https://pastebin.com/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://trello.com/" target="_blank" rel="noopener noreferrer">https://trello.com/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.sitepoint.com/collaborative-coding-tools-for-remote-pair-programming/" target="_blank" rel="noopener noreferrer">6 Collaborative Coding Tools for Remote Pair Programming — SitePoint</a></li>

            </ul>        
            <h3>IDEs Extensiones :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens</a></li>
                <li className="sub-segundo-contenedor"><a href="/Imagenes/add-extension-recomendado.png" target="_blank" rel="noopener noreferrer">Recomendaciones para Visual Studio code</a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
        <a href="#footer2"><h2 id="Funciones">Funciones :</h2></a>
            <h3>Aprendizaje de funciones :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://tympanus.net/codrops/css_reference/" target="_blank" rel="noopener noreferrer">https://tympanus.net/codrops/css_reference/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">Aprendisaje GIT</a></li>
                <li className="sub-segundo-contenedor"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.emmet.io/" target="_blank" rel="noopener noreferrer">https://www.emmet.io/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://caniuse.com/#feat=flexbox" target="_blank" rel="noopener noreferrer">https://caniuse.com/#feat=flexbox</a></li>
                <li className="sub-segundo-contenedor"><a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a" target="_blank" rel="noopener noreferrer">MDN etiqueta -a-</a></li>
                <li className="sub-segundo-contenedor"><a href="https://cssgridgarden.com/#es" target="_blank" rel="noopener noreferrer">CSS grid garden</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.programandoamedianoche.com/2019/05/guia-completa-para-aprender-a-utilizar-css-grid-layout/" target="_blank" rel="noopener noreferrer">CSS Grid Tutorial en Blog</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.programandoamedianoche.com/2019/01/tutorial-para-utilizar-flexbox-en-css/" target="_blank" rel="noopener noreferrer">CSS Flexbox Tutorial en Blog</a></li>            </ul>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>

                <h3>Ajuste de funciones :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://cubic-bezier.com/#.17,.67,.83,.67" target="_blank" rel="noopener noreferrer">Cubic-bezier transition funtion</a></li>
                <li className="sub-segundo-contenedor"><a href="https://the-echoplex.net/flexyboxes/" target="_blank" rel="noopener noreferrer">https://the-echoplex.net/flexyboxes/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://cssgradient.io" target="_blank" rel="noopener noreferrer">https://cssgradient.io</a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
            <h3>Herramientas Extras :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://www.google.com/search?client=opera-gx&q=google+charts&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank" rel="noopener noreferrer">Google Chart</a></li>
                <li className="sub-segundo-contenedor"><a href="https://stackshare.io" target="_blank" rel="noopener noreferrer">Stackshare tecnologias usadas en grandes empresas</a></li>
            </ul>
        <a href="#footer2"><h2 id="Recursos">Recursos :</h2></a>
            <h3>Colores :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://colorhunt.co/" target="_blank" rel="noopener noreferrer">https://colorhunt.co/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://flatuicolors.com/" target="_blank" rel="noopener noreferrer">https://flatuicolors.com/</a></li>
            </ul>
            <h3>Iconos :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://cdnjs.com/libraries/font-awesome" target="_blank" rel="noopener noreferrer">https://cdnjs.com/libraries/font-awesome</a></li>
                <li className="sub-segundo-contenedor"><a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">https://fontawesome.com</a></li>
                <li className="sub-segundo-contenedor"><a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens</a></li>
            </ul>
            <h3>Imagenes :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://logodix.com/" target="_blank" rel="noopener noreferrer">https://logodix.com/</a></li>
            </ul>
            <h3>Varias :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://www.templatemonster.com/" target="_blank" rel="noopener noreferrer">https://www.templatemonster.com/</a></li>
                <li className="sub-segundo-contenedor"><a href="ttps://www.webdesign-inspiration.com" target="_blank" rel="noopener noreferrer">ttps://www.webdesign-inspiration.com</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.lipsum.com/" target="_blank" rel="noopener noreferrer">https://www.lipsum.com/</a></li>
                <li className="sub-segundo-contenedor"><a href="https://app.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify para compartir paginas</a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer">Libro Introduction to algotithms (MIT Pres)s</a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer">Clean Code: A handbook of agile Software Craftsmanship (Robert C. Martin)</a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer">Cracking the coding interview, 6th edition:189 programing questions and solutions</a></li>
                <li className="sub-segundo-contenedor"><a href="https://coderbyte.com" target="_blank" rel="noopener noreferrer">CoderByte.com</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">Hackerrank.com</a></li>
                <li className="sub-segundo-contenedor"><a href="https://www.leetcode.com" target="_blank" rel="noopener noreferrer">leetcode.com</a></li>
                <li className="sub-segundo-contenedor"><a href="https://freefrontend.com/html-css-404-page-templates/" target="_blank" rel="noopener noreferrer">39 HTML 404 Page Templates</a></li>
                <li className="sub-segundo-contenedor"><a href="https://quizizz.com" target="_blank" rel="noopener noreferrer"></a>Juego para hacer quizez</li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>

            </ul>
            <h3>Aprendizaje :</h3>
            <ul>
                <li className="sub-segundo-contenedor"><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
                <li className="sub-segundo-contenedor"><a href="https://app.codesignal.com/" target="_blank" rel="noopener noreferrer">CodeSignal</a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
                <li className="sub-segundo-contenedor"><a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
    </div>
    {/* cierre main */}
    <aside>

    </aside>
    <footer>
        <nav>
            <ul>
                <a href="#footer1"><li>Principales lenguajes</li></a>
                <a href="#footer2"><li>Links utiles</li></a>
            </ul>
        </nav>
    </footer>
</div>
// cierre body

    )
}

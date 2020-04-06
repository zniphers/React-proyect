import React from 'react';
import './panel-tarjetas-pages-contenido.css';
import Header from './components/header/header-component';
import PanelContainer from './components/panel/panel-container-component';
import CardContainer from './components/card-container/card-container-component';
import Container from '@material-ui/core/Container';

//Dependencias firestore
import firestore from '../../../firebase/firebase-config-utils';

export default class contenido extends React.Component{
  constructor(){
    super();
    this.state = {
      //Clave:Valor
      personas: [],
      id:[],
      nombre: "",
      email: "",
      buscarPersona: "",
      respaldoPersonas: [],
      camposInvalidos: false,
      mensajeError: ""
    }
  }
  
  // Metodo para obtener info del servidor (para leer y escribir hay metodos asincronos, tal como .get()
recibirContactos = () =>{
    let arregloContactos =[];
    let arregloContactosId =[];
    // permite obtener solo un documento  
    // let ContactoRef = firestore.collection('contactos').doc('contacto1');
    //   let detDoc = ContactoRef.get().then(doc=>{
    //     if(!doc.exists){
    //         console.log("No existe documento");
    //     } else {
    //         console.log("la info del documento: ",doc.data());
    //     }}
    //     ).catch(err=>{
    //         console.log('Error consiguiendo el documento',err);
    //     });

    // obtiene varios documentos de una coleccion una vez
    let ContactoRef = firestore.collection('contactos');
    let getContactos = ContactoRef.onSnapshot(
        snapshot =>{
            if (snapshot.empty){
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach( doc =>{
                // console.log(doc.id, '=>',doc.data());
                arregloContactos.push(doc.data());
                arregloContactosId.push(doc.id);
            }
            )
            this.setState({personas : arregloContactos});
            this.setState({id: arregloContactosId})
            
            arregloContactos = [];
            arregloContactosId = [];

        });
        // .catch(err =>{
        //     console.log('Error getting documents ', err);
        // });
    //para verificar que se cumpla una propiedad especifica en los documentos usar ContactoRef.where ('capital', '==', true)
    //ContactoRef.get().then( actualiza todo solo una vez, en cambio con 
    // .onSnapshot se actualiza ante cambios, pero ojo que tambien es una promeso de por si, por lo que deben justificarse
    // y no debe llevar el .then al lado, quedando ContactoRef.onSnapshot() en ves de ContactoRef.onSnapshot.then()
}


  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(arregloPersonas => {        
    //     this.setState({personas : arregloPersonas});
    //     this.setState({respaldoPersonas : arregloPersonas});
    //   }
    // )

    this.recibirContactos();

  }

  //Al utilizar las funciones de flecha el contexto será el mismo en el que se declaró
  agregarTarjeta = () => {

    let buscarPersonaArray = this.state.personas;

    if(this.state.nombre.length > 0 && this.state.email.length > 0){
      buscarPersonaArray = buscarPersonaArray.filter( 
        persona => persona.name.includes(this.state.nombre)
      );

      if(buscarPersonaArray.length === 0){
        let personasModificadas = this.state.personas;
        let arregloIndices = this.state.personas.map( persona => persona.id);
        let indice = arregloIndices[arregloIndices.length-1] + 1; 
        
////////////////////////////////////////////////////////////////
let hoy = new Date();
let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let day = hoy.getDate();
let month = hoy.getMonth();
let year = hoy.getFullYear();
let mesfinal = month;
let mes = ()=>{switch(mesfinal){
    case 0:
        return("Enero");
        break; 
    case 1:
        return("Febrero");
        break;
    case 2:
        return("Marzo");
        break;
    case 3:
        return("Abril");
        break; 
    case 4:
        return("Mayo");
        break;
    case 5:
        return("Junio");
        break; 
    case 6:
        return("Julio");
        break; 
    case 7:
        return("Agosto");
        break;
    case 8:
        return("Octubre");
        break; 
    case 9:
        return("Septiembre");
        break; 
    case 10:
        return("Noviembre");
        break; 
    case 11:
        return("Diciembre");
        break; 
    default:
        return("caso bugueado");
        break;
};}
let horaIngreso =`${day} de ${mes()} del ${year} a las ${horas}:${minutos}`;
////////////////////////////////////////////////////////////////

        personasModificadas.push({
          "id": horaIngreso,
          "name": this.state.nombre,
          "username": "Bret",
          "email": this.state.email,    
        });

        //Metodo para escribir en la base de datos de firestore (es un metodo asincrono)

        let contacto = 
        {
          "id": horaIngreso,
          "name": this.state.nombre,
          "username": "Bret",
          "email": this.state.email,    
        };

            //genera con una id determinada
            // let setDoc = firestore.collection('contactos').doc('contacto1').set(contacto);
            //genera con una id random tipo token
              let setDoc = firestore.collection('contactos').add(contacto);
            //Verificar estado de la informacion enviada
              setDoc.then(respuesta =>{console.log(respuesta)}).catch(error=>{console.log(error)});

        //Agregar los nuevos estados
        this.setState({personas: personasModificadas});
        this.setState({respaldoPersonas: personasModificadas});   
        
        //Quitar el valor actual para los dos componentes de texto
        this.setState({nombre: ""});
        this.setState({email: ""});
      }else{
        console.log("Ya existe este usuario");
      }
    }else{
      alert("Hay campos vacios");
      this.setState({camposInvalidos: true});
      this.setState({mensajeError: "Completa este campo"});
    }
  }
  
  obtenerPersona = (event) => {    
    this.setState({nombre: event.target.value});
    if(event.target.value.length > 0){
      this.setState({camposInvalidos: false});
      this.setState({mensajeError: ""});
    }else{
      this.setState({camposInvalidos: true});
    }
  }

  obtenerEmail = (event) => {    
    this.setState({email: event.target.value});
    if(event.target.value.length > 0){
      this.setState({camposInvalidos: false});
      this.setState({mensajeError: ""});
    }else{
      this.setState({camposInvalidos: true});
    }
  }

  buscarPersona = (event) => {
    //Crear una variable para guardar todas las personas que actualmente están en la aplicación
    // Y para así poder trabajar sobre ese arreglo
    let respaldoPersonas = this.state.respaldoPersonas;    
    //Voy a filtrar el arreglo para que me regresen las personas que cumplan con la expresión 
    // persona.name.includes(event.target.value)
    let arregloPersonasModificadas = respaldoPersonas.filter( 
      persona => persona.name.includes(event.target.value)
    );
    //En este punto voy a actualizar el estado por el arreglo de personas filtradas
    this.setState({personas: arregloPersonasModificadas});
  }

  borrarPersona = (event, id, nombre, email) => {
    //Obtenemos el indice donde se encuentra el id de la persona que queremos borrar
    // let getPersonaIndex = this.state.personas.findIndex( persona => persona.id === id);
    let getPersonaIndexName = this.state.personas.map( persona => persona.name );
    let getPersonaIndexEmail = this.state.personas.map( persona => persona.email );
    let getPersonaIndexIde = this.state.id.map( persona => persona );
    if(getPersonaIndexName.indexOf(nombre) != -1 && getPersonaIndexEmail.indexOf(email) != -1){
        
      console.log(getPersonaIndexIde[getPersonaIndexName.indexOf(nombre)]);

        firestore.collection("contactos").doc(getPersonaIndexIde[getPersonaIndexName.indexOf(nombre)]).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }else{
      console.log(getPersonaIndexName.indexOf(nombre));
      console.log(getPersonaIndexEmail.indexOf(email));
    }
    // getPersonaIndex = getPersonaIndex.indexOf(id);
    //Creamos una copia del arreglo para poder manipularlo posteriormente
    // let arregloPersonas = this.state.personas;
    //Eliminamos el elemento dentro del arreglo
    // arregloPersonas.splice(getPersonaIndex, 1);


 


    //Agregamos el nuevo estado para personas
    // this.setState({personas: arregloPersonas});
  }

  

  render(){
    return (
      <Container maxWidth="lg" style={{marginTop:"10px"}}>
        <Header />
        <PanelContainer 
          funcionAgregar={this.agregarTarjeta} 
          funcionObtenerPersona={this.obtenerPersona}
          funcionObtenerEmail={this.obtenerEmail}
          funcionBuscarPersona={this.buscarPersona}
          nombre={this.state.nombre}
          email={this.state.email}
          validacion={this.state.camposInvalidos}
          mensajeError={this.state.mensajeError}
        />
        <CardContainer 
          personas={this.state.personas}
          funcionBorrarPersona={this.borrarPersona}
        />      
      </Container>
    )
  }
}
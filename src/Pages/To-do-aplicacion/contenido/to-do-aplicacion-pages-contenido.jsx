import React from 'react';
import './to-do-aplicacion-pages-contenido.css';
import {Container, Row, Col} from 'react-bootstrap';
import Home from './views/home/home-view';
import firestore from '../../../firebase/firebase-config-utils';

class ToDoContenido extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: ["hola como estas"],
      backupTasks: [],
      addTask: false,
      newTask: "",
    }
    //Ligar los métodos al contexto actual
    this.editTask = this.editTask.bind(this);
    this.editText = this.editText.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTaskState = this.editTaskState.bind(this);
  }

  componentDidMount(){
    // this.recibirTareas();
    this.obtenerTareas((resultado) => {      
        this.setState({tasks: resultado});
      })
    }

    // recibirTareas = () =>{
    //     let arregloTareas =[];
    //     let ContactoRef = firestore.collection('tareas');
    //     let getTareas = ContactoRef.onSnapshot(
    //         snapshot =>{
    //             if (snapshot.empty){
    //                 console.log('No matching documents.');
    //                 return;
    //             }
    //             snapshot.forEach( doc =>{
    //                 // console.log(doc.id, '=>',doc.data());
    //                 arregloTareas.push(doc.data());
    //             })
    //             console.log(arregloTareas);
    //             this.setState({tasks : arregloTareas});
                
    //             arregloTareas = [];
    
    //         });
    // }

  obtenerTareas(callback){
    firestore.collection("tareas").onSnapshot(function(collection) {          
        let arrayTasks = [];     
        collection.forEach( doc => {
          //Colocar cada uno de los documentos que obtenga de la base de datos                
          arrayTasks.push(doc.data());
        });
        callback(arrayTasks);         
    });   
  }

  editTaskState(){    
    this.setState(state => ({ addTask: !state.addTask}));
  }

  editTask(id){
    //Obtener el objeto que coincida con el id de la tarea que deseamos modificar
    let taskObj = this.state.tasks.find( task => task.id === id);
    let taskIndex = this.state.tasks.findIndex( task => task.id === id);
    //Cambiar el estado de ese item
    taskObj.disabled = !taskObj.disabled;
    //Crear una copia del arreglo
    let taskArray = this.state.tasks;
    taskArray[taskIndex] = taskObj;
    //Guardar el nuevo estado
    this.setState({tasks: taskArray, backupTasks: taskArray});    
  }

  editText(id, event){
    let taskObj = this.state.tasks.find( task => task.id === id);
    let taskIndex = this.state.tasks.findIndex( task => task.id === id);
    taskObj.content = event.target.value;

    let taskArray = this.state.tasks;
    taskArray[taskIndex] = taskObj;

    this.setState({tasks: taskArray, backupTasks: taskArray});
  }

  newTaskText = (evento) => {
    this.setState({newTask: evento.target.value});
  }

  addTask = async () => {    
    if(this.state.newTask.length > 0){
      //Agregar una tarea a la base de datos con el id del documento que se va agregar
      try{
        let refNewTask = await firestore.collection('tareas').doc(); 

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

        let respuesta = await refNewTask.set({
          id: refNewTask.id,
          content: this.state.newTask,
          date: horaIngreso,
        //   "23 de Marzo 2020",
          disabled: true
        });
      }catch(error){
        console.log("No se ha podido agregar la tarea: ", error.message);
      }

      this.setState({newTask: ""}, () => {
        this.setState();
      });
      
    }    
  }

  searchTask = (evento) => {
    let taskArray = this.state.backupTasks;
    taskArray = taskArray.filter( task => task.content.includes(evento.target.value));
    this.setState({tasks: taskArray});
  }

  deleteTask(id){
    //Obtener el indice del item que deseamos borrar
    let taskIndex = this.state.tasks.findIndex( task => task.id === id);
    //Crear una copía para poder manipular el arreglo
    let taskArray = this.state.tasks;
    //Borrar el elemento con el método splice
    taskArray.splice(taskIndex, 1);
    //Borrar la tarea en la base de datos
    firestore.collection('tareas').doc(id).delete().then(function() {
      console.log("Se ha borrado la tarea en la base de datos");
    }).catch(function(error) {
      console.error("Hubo un error al borrar la tarea: ", error.message);
    });
  }

  render(){
    return(
        <Container fluid={true} >
          <Row>
            <Col  className="view-container">     
                  <Home 
                    titulo="Todas"
                    addTaskState={this.state.addTask}
                    editTaskState={this.editTaskState}
                    tareas={this.state.tasks}
                    addTaskFn={this.addTask}
                    newTaskTextFn={this.newTaskText}
                    newTaskText={this.state.newTask}
                    editFn={this.editTask}
                    editTextFn={this.editText}
                    searchTaskFn={this.searchTask}
                    deleteFn={this.deleteTask}
                  />   
            </Col>
          </Row>
        </Container>   
    )
  }
}

export default ToDoContenido;
import React from 'react';
import './componente-conejo.css';

export default function conejo(){

    let array = [

    [9,1,3,4,5,6,7,8,8,9],
    [9,1,3,0,0,6,7,8,8,9],
    [1,1,3,0,0,6],
    [1,0,3,4,5,6],
    [1,1,3,0,0,6],
    [9,1,3,0,0,6,7,8,8,9],
    [9,1,3,4,5,6,7,8,8,9]

];

let consola = (valor)=> {
console.log(valor);
}

    return(
        <div style={{display: "flex", flexDirection:"row", justifyContent:"center",  alignItem:"center", marginTop:"200px", color:"black", transform:"rotate(-90deg)"}}>
        <div className="efectoComponenteConejo">
              {array.map(mostrar => {
                  return(
                    <div style={{
                      display:"flex",
                      flexDirection:"row",
                      height:"20px",
                      backgroundColor:"transparent",
                      border:"solid 0px black"
                    }}>
                     {mostrar.map(mostrar2 =>{
                        return(mostrar2 == 9 ?
                          <div style={{
                            display:"flex",
                            height:"20px",
                            width:"20px",
                            backgroundColor:"#393e46",
                            border:"solid 2px black"
                          }}/> 
                          :mostrar2 == 0 ?
                          <div style={{
                            display:"flex",
                            height:"20px",
                            width:"20px",
                            backgroundColor:"white",
                            border:"solid 2px #dfdfdf"
                          }}/>:
                          <div style={{
                            display:"flex",
                            height:"20px",
                            width:"20px",
                            backgroundColor:"#84a9ac",
                            border:"solid 2px #204051"
                          }}/>
                          )
                      })}
                    </div>
                  )
                }
              )}  
        </div>
      </div>
    )
}
import React from 'react';

export default function imagenTheFuture(props){
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",
        backgroundColor:"#00bcd4", height:"100px", width:"300px", transform: "skewY(1.5deg) skewX(3.5deg)",
        boxShadow: "-10px 12px 11px 7px rgba(0,0,0,0.75)"
        }}>
            <p style={{color:"white", 
                    marginTop:"10px",
                    marginBottom:"10px",
                    fontSize:"2rem",
                    fontFamily:"Roboto, Arial, Gothic",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"20px",
                    width:"200px",
                    fontWeight:"bold"
                    }}
                >{props.ContenidoSuperior}</p>
                {/* the */}
            <p style={{color:"white", 
                    marginTop:"0px",
                    marginBottom:"0px",
                    paddingTop:"0px",
                    paddingBottom:"0px",
                    fontSize:"3.5rem",
                    fontFamily:"Roboto, Arial, Gothic",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"40px",
                    width:"200px",
                    fontWeight:"bold"
                    }}>{props.ContenidoCentral}</p>
                    {/* FUTURE */}
            <p style={{color:"white", 
                    marginTop:"0px",
                    marginBottom:"0px",
                    fontSize:"0.6rem",
                    fontFamily:"Arial, Roboto, Gothic",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"14px",
                    width:"280px",
                    fontWeight:"bold",
                    backgroundColor:"#005082"
                    }}>{props.ContenidoInferior}</p>
                    {/* Brand NEW & IMPROVED */}
        </div>
    )
}
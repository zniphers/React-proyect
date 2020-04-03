var fecha = new Date(2020, 03, 1, 19, 27,00);
var fechaF = new Date("2020-01-2 19:14:15");
var hoy = new Date(2025, 2,1);

function obtenerfecha(string){
    let hoy = new Date();
    let day = hoy.getDate();
    let month = hoy.getMonth()+1;
    let year = hoy.getFullYear();
    if(string === '-'){
        console.log(day+"-"+month+"-"+year+" "+hoy.getHours()+":"+hoy.getMinutes() );
    }
    else{
        console.log(day+"/"+month+"/"+year);
    }
}

var obtenermes = (aqui)=>{
    const mes = aqui;
    mesfinal = mes.getMonth()+1;
    switch(mesfinal){
        case 1:
            console.log("Enero");
            break; 
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break; 
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break; 
        case 7:
            console.log("Julio");
            break; 
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Octubre");
            break; 
        case 10:
            console.log("Septiembre");
            break; 
        case 11:
            console.log("Noviembre");
            break; 
        case 12:
            console.log("Diciembre");
            break; 
        default:
            console.log("caso bugueado");
            break;
    }
}

const compararFechas = (fecha1, fecha2)=>{
    var obtenermeses = (aqui)=>{
        const mes = aqui;
        mesfinal = mes.getMonth()-1;
        switch(mesfinal){
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
        }
    }
    let primero = fecha1;
    let dia1 = primero.getDate();
    let mes1 = obtenermeses(primero);
    let segundo = fecha2;
    let dia2 = segundo.getDate();
    let mes2 = obtenermeses(segundo);
    if (primero > segundo){

        console.log("la fecha " + dia1+ " de " +  mes1 +" de " + primero.getFullYear() +" es mayor que el " + dia2+ " de " +  mes2 +" de " + segundo.getFullYear());
    }
    if (primero === segundo){

        console.log("la fecha " + dia1+ " de " +  mes1 +" de " + primero.getFullYear() +" es igual que el " + dia2+ " de " +  mes2 +" de " + segundo.getFullYear());
    }
    if (primero < segundo){
        console.log("la fecha " + dia1+ " de " +  mes1 +" de " + primero.getFullYear() +" es menor que el " + dia2+ " de " +  mes2 +" de " + segundo.getFullYear());
    }
}

console.log("");
console.log("");
console.log("");
console.log(obtenerfecha('-'));
console.log(obtenermes(new Date(2020,11,2)));
console.log(compararFechas(new Date(2021, 2, 2), new Date(2020, 11, 7)));
console.log("");
console.log("");
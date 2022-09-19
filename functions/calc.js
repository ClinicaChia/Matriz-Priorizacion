 
const db = require('../data.json');

const controller = {}

const clasf = (val) =>{

    if(val<25){
      return "bajo";
    }
    else if( val>=30 && val<60){
      return "medio";
    }
    else if( val>=50 && val<80){
      return "alto";
    }
    
    return "muy alto"
  
  } //meter en controller

controller.General = function(data) {
   
    let sum = 0;
    let total = 0;
    data.forEach(element => {
        sum += element.estado == "finalizado"? 1 : 0;
        total += 1;
        
    });
    sum = parseInt(sum/total * 100);
  
    return sum;
}

controller.clasf = clasf;

    controller.Process = (data) =>{
        
        data.map((el)=>{

            el.priorizacion = 25/5 * db["costo"][el["costo (COP)"]] +
                              25/5 * db["impacto"][el["Impacto(%)"]] +
                              25/5 * db["Alcance"][el["Alcance(%)"]] +
                              25/5 * db["tiempo"][el["Tiempo Proyecion(Semanas)"]]
                              
            return el;
          });
        
          let p1 = data.filter((el)=>{return el["estado"] == "en proceso"});
        
          let p2 = data.filter((el)=>{return el["estado"] != "en proceso"});
        
          p1 = p1.sort((a,b)=>{return b.priorizacion - a.priorizacion});
          
          data = p1.concat(p2);
          //aqui salen los datos ordenados por priorizacion
          data = data.map( (el)=>{
            el.priorizacion = clasf(el.priorizacion);
            return el;
          } )

          return data;
    }


module.exports = controller;
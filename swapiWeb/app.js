
var nombre=document.getElementById("nomPersonaje");
var altura=document.getElementById("alturaPersonaje");
var peso=document.getElementById("pesoPersonaje");
var colPelo=document.getElementById("colorPelo");
var colPiel=document.getElementById("colorPiel");
var colOjos=document.getElementById("colorOjos");
var anio=document.getElementById("añoPersonaje");
var genero=document.getElementById("genPersonaje");
const URL='https://swapi.dev/api/people/';
        

function buscar(){
    
    var numeroPers=document.getElementById("numId").value;
    fetch(URL + numeroPers)
     .then(response => response.json()) 
     .catch(error => console.error('Error:', error))
     .then(data=>{
      this.nombre.value=data.name;
      this.altura.value=data.height;
      this.peso.value=data.mass;
      this.colPelo.value=data.hair_color;
      this.colPiel.value=data.skin_color;
      this.colOjos.value=data.eye_color;
      this.anio.value=data.birth_year;
      this.genero.value=data.gender;
      console.log("holaaaa");
     })
     
}





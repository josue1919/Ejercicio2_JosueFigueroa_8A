const botones = document.querySelectorAll('.btn');
var count = 0;

function ChangeBoton(){

  //cuando el contador valga lo mismo que la longitud del array reinicia a 0 el contador
  if(count== botones.length){
    count=0;
  }

    ChangePage(botones[count].id)
    console.log(botones[count].id);
    count++;
}


//ejecutamos la funcion cada 3 segundos
  setInterval(() => {
    ChangeBoton();
  }, 3000);
  
  


const botones2 = document.querySelectorAll('.btn');

botones2.forEach(element => {
    element.addEventListener('click',()=>{
        
     ChangePage(element.id);
     
    });
});




function ChangePage(id) {
    // console.log(`views/${id}.html`)console.log(`views/${id}.html`)
    var xhttp = new XMLHttpRequest(); 
    if (id == "") {
      document.getElementById("index").innerHTML = "";
      return;
    }

    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("index").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET",`./views/${id}.html`, true);
    xhttp.send();
 
}



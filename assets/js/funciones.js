window.addEventListener('load',function(){
  var user=prompt("Ingrese su nombre de usuario: ");
  document.getElementById('user').innerHTML=user;
  var contenido=document.getElementById('sprint');

  document.getElementById('s1').onclick = function(){
    contenido.innerHTML="<h4>Sprint 1: Introcucción a Javascript</h4>"+
    "<ol>"+
      "<li>Fundamentos de Programación</li>"+
      "<li>Funciones</li>"+
      "<li>Arreglos</li>"+
      "<li>Objetos</li>"+
    "</ol>"+
    "<hr>"+
    "<h3>Quiz</h3>"+
    "<h4>Existen dos tipos de Funciones</h4>"+
    "<input type='radio' name='' value='1'>Expresadas y declaradas<br>"+
    "<input type='radio' name='' value='2'>Explicitas y declaradas<br>"+
    "<input type='radio' name='' value='3'>Expresadas y derivadas<br>"+
    "<h4>¿Cuál es la finalidad de hacer una prueba unitaria?</h4>"+
    "<input type='radio' name='' value='4'><br>"+
    "<input type='radio' name='' value='5'><br>"+
    "<input type='radio' name='' value='6'><br>"+
    "<h4>¿Qué significa DOM?</h4>"+
    "<input type='radio' name='' value='7'><br>"+
    "<input type='radio' name='' value='8'><br>"+
    "<input type='radio' name='' value='9'><br><br>"+
    "<button id='enviar'>Enviar</button>";
  }

  document.getElementById('s2').onclick=function(){
    contenido.innerHTML="";


  }

  document.getElementById('s3').onclick=function(){
    contenido.innerHTML="No hay Lecciones (Todavia)";
  }
  document.getElementById('enviar').onclick=function(){
      var cont1=0,cont2=0,cont3=0,rpta1,rpta2,rpta3;

      var respuesta1=document.getElementsByName('click1');
      var respuesta2=document.getElementsByName('click2');
      var respuesta3=document.getElementsByName('click3');

      for (var i = 0; i <respuesta1.length; i++) {
         if (respuesta1[i].checked) {
            rpta1=respuesta1[i].value;
        }
      }
      for (var i = 0; i <respuesta2.length; i++) {
         if (respuesta2[i].checked) {
            rpta2=respuesta2[i].value;
        }
      }
      for (var i = 0; i <respuesta3.length; i++) {
         if (respuesta3[i].checked) {
            rpta3=respuesta3[i].value;
        }
      }
      if(rpta1==0){cont1=1;}
      if(rpta2==0){cont2=1;}
      if(rpta3==1){cont3=1;}

      var total=cont1+cont2+cont3;

      contenido.innerHTML="<h4>Quiz</h4> Tiene "+ total+" correctas";
  }

  document.getElementById('form').onsubmit=function(e){
    e.preventDefault();
  }

});

window.addEventListener('load',function(){
  var user=prompt("Ingrese su nombre de usuario: ");
  document.getElementById('user').innerHTML=user;

  document.getElementById('s1').onclick = function(){
    var contenido=document.getElementById('sprint');
    // contenido.innerHTML=
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
    "<input type='radio' name='' value='9'><br><br>";/*+
    "<button id='enviar'>Enviar</button>"+
  "</div>";
*/
  }
  document.getElementById('form').onsubmit=function(e){
    e.preventDefault();
  }

});

window.addEventListener('load',function(){
  var user=prompt("Ingrese su nombre de usuario: ");
  document.getElementById('user').innerHTML=user;
  var contenido=document.getElementById('sprint');

  document.getElementById('s1').onclick = function(){
    contenido.innerHTML="";
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

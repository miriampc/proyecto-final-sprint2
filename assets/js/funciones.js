window.addEventListener('load',function(){
  if(typeof localStorage != undefined){
    if (sessionStorage.getItem("nomcoder")) {
      document.getElementById('user').innerHTML=sessionStorage.getItem("nomcoder");
    }else {
      var user=prompt("Ingrese su nombre de usuario: ");
      sessionStorage.setItem("nomcoder",user);
      document.getElementById('user').innerHTML=sessionStorage.getItem("nomcoder");
    }
  }else {
    console.log("Your browser no supported localStorage")
  }
});

  var contenido1=document.getElementById('contenido1');
  var contenido2=document.getElementById('contenido2');

  function mostrar(div) {
    var sprint1 = document.getElementById("sprint1");
    var sprint2 = document.getElementById("sprint2");
    var sprint3 = document.getElementById("sprint3");

  	if (div == "sprint1") {
  		 sprint1.style.display = "block";
       sprint2.style.display = "none";
       sprint3.style.display = "none";
  	} if (div == "sprint2"){
      sprint1.style.display = "none";
      sprint2.style.display = "block";
      sprint3.style.display = "none";
  	} if (div == "sprint3"){
      sprint1.style.display = "none";
      sprint2.style.display = "none";
      sprint3.style.display = "block";
    }
  }

  document.getElementById('enviar1').onclick=function(){
      var contador = 0;
      var respuesta1=document.getElementsByName('click1');
      var respuesta2=document.getElementsByName('click2');
      var respuesta3=document.getElementsByName('click3');

      if((respuesta1[0].checked==false && respuesta1[1].checked==false && respuesta1[2].checked==false)||
         (respuesta2[0].checked==false && respuesta2[1].checked==false && respuesta2[2].checked==false)||
         (respuesta3[0].checked==false && respuesta3[1].checked==false && respuesta3[2].checked==false)){
          alert("Debe marcar su respuesta en cada pregunta");
      }else {
          if(respuesta1[0].checked){contador++;}
          if(respuesta2[1].checked){contador++;}
          if(respuesta3[2].checked){contador++;}
        contenido1.innerHTML="<h4>Quiz</h4> Tiene "+ contador+" correctas";
      }
  }

  document.getElementById('enviar2').onclick=function(){
      var contador = 0;
      var answers=document.getElementsByName('opc1');
      answers.forEach(function(e){
        if(e.checked==true){
          contador++;
        }
      });
      if (contador==3) {
        var correctas=0;
        if(answers[0].checked){correctas++;}
        if(answers[3].checked){correctas++;}
        if(answers[7].checked){correctas++;}
        contenido2.innerHTML="<h4>Quiz</h4> Tiene "+ correctas+" correctas";
      }else {
          alert("Debe marcar su respuesta en cada pregunta");
      }
  }

  document.getElementById('form').onsubmit=function(e){
    e.preventDefault();
  }

var arrayObj=[ { nombre : "Arabela", apellido : "Rojas", promocion : "2da promocion", estado : "Trabajando" },
 { nombre : "Michelle", apellido : "Seguil", promocion : "5ta promoción", estado : "Trabajando" },
 { nombre : "Meche", apellido : "Zubieta", promocion : "1ra promoción", estado : "Trabajando" },
 { nombre : "Maria", apellido : "Rosan", promocion : "2da promoción", estado : "Trabajando" },
 { nombre : "Diana", apellido : "Navarro", promocion : "5ta promoción", estado : "Trabajando" },
 { nombre : "Meche", apellido : "Zubieta", promocion : "1ra promoción", estado : "Trabajando" },
 { nombre : "Maria", apellido : "Rosan", promocion : "2da promoción", estado : "Trabajando" },
 { nombre : "Diana", apellido : "Navarro", promocion : "5ta promoción", estado : "Trabajando" } ];

arrayObj.forEach(function(e,i){
  var coders=document.getElementsByClassName('div-coder');
  coders[i].innerHTML= "<div><ul><li>Nombre: "+e.nombre+"</li><li>Apellidos: "+
                                               e.apellido+"</li><li>Promocion: "+
                                               e.promocion+"</li><li>Estado: "+
                                               e.estado+"</li></ul></div>";
});


document.getElementById('p-face').style.display="none";
document.getElementById('p-link').style.display="none";
document.getElementById('p-email').style.display="none";
document.getElementById('p-telef').style.display="none";
document.getElementById('p-local').style.display="none";

// PARA EL BOTON ARRIBA
document.getElementById('boton-arriba').addEventListener('click', scrollUp);

function scrollUp(){
  var currentscroll = document.documentElement.scrollTop;
  
  if (currentscroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo (0,currentscroll - (currentscroll / 8));
  }
}

botonArriba = getElementById('boton-arriba');
window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;

  if(scroll > 100){
    botonArriba.style.display
  }
}

 // Para Facebook
 function MostrarF(){
    document.getElementById('p-face').style.display="block";
    document.getElementById('p-face').innerHTML = "https://www.facebook.com/claudiooscar.chaile";
   }
 
 function OcultarF(){
   document.getElementById('p-face').style.display="none";
 }
 
 function AccionF(){
   var imagen=document.getElementById('p-face')

   if(imagen.style.display == "none"){
      MostrarF();
   }else{
      OcultarF();
   }
 }
 
 // Para LinkedIn
 function MostrarL(){
  document.getElementById('p-face').style.display="block";
  document.getElementById('p-face').innerHTML = "https://www.linkedin.com/in/claudio-chaile-3561424a/";
 }

function OcultarL(){
 document.getElementById('p-face').style.display="none";
}

function AccionL(){
 var imagen=document.getElementById('p-face')

 if(imagen.style.display == "none"){
    MostrarL();
 }else{
    OcultarL();
 }
}

 // Para Email
 function MostrarE(){
  document.getElementById('p-face').style.display="block";
  document.getElementById('p-face').innerHTML = "claudio.chaile@gmail.com";
 }

function OcultarE(){
 document.getElementById('p-face').style.display="none";
}

function AccionE(){
 var imagen=document.getElementById('p-face')

 if(imagen.style.display == "none"){
    MostrarE();
 }else{
    OcultarE();
 }
}

// Para Teléfono
function MostrarT(){
  document.getElementById('p-face').style.display="block";
  document.getElementById('p-face').innerHTML = "+54-381-155 391259";
 }

function OcultarT(){
 document.getElementById('p-face').style.display="none";
}

function AccionT(){
 var imagen=document.getElementById('p-face')

 if(imagen.style.display == "none"){
    MostrarT();
 }else{
    OcultarT();
 }
}

// Para Domicilio
function MostrarLo(){
  document.getElementById('p-face').style.display="block";
  document.getElementById('p-face').innerHTML = "Bº Congreso - Mnza F, Casa 13 - S.M. de Tucumán";
 }

function OcultarLo(){
 document.getElementById('p-face').style.display="none";
}

function AccionLo(){
 var imagen=document.getElementById('p-face')

 if(imagen.style.display == "none"){
    MostrarLo();
 }else{
    OcultarLo();
 }
}


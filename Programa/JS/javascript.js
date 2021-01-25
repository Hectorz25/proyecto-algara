$(document).on('keypress',function(e) {
    if(e.which == 13) {
       convertirMaya();
    }
});
$(function(){
   $("#numero").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      $("#soloNumeros").html("Solo números").stop().show().fadeOut("slow");
      return false;
    }
   });
});
var x=0, y=0, z=0; //X: Nivel 3, Y: Nivel 2, Z: Nivel 1,  
var linea = "<img src=./IMG/cinco.png alt='Cinco'>";

function limpiar(){
	for(var i=1; i<4; i++){
		for(var j=1; j<5; j++){
			document.getElementById(""+i+j).innerHTML = "";
		}
	}
}

function convertirMaya(){
	limpiar();
	x=document.getElementById("numero").value;
	if(x>7999||x<=0){
		if(x==0){
			document.getElementById("11").innerHTML = "<img src=./IMG/cero.png alt='Cero'>";
		}else{
				$("#responseAlerta").animate({
						height: '+=72px'
					}, 300);
		  
					  $('<div class="alert alert-danger">' +
					'<button type="button" class="close" data-dismiss="alert">' +
					'&times;</button>Por favor ingrese un número del 0 al 7999.</div>').hide().appendTo('#responseAlerta').fadeIn(1000);
		  
					 $(".alert").delay(3000).fadeOut(
					  "normal",
					  function(){
						$(this).remove();
					  });
					  $("#responseAlerta").delay(4000).animate({
						height: '-=72px'
					}, 300);
					document.getElementById("numero").value="0";
					return false;
		}
	}
	else{
		var xs=Number.parseInt(x/400); //Da un número entero en la división(Tercer Nivel)
		var xs1=Number.parseInt(xs/5); //Saber cuantas lineas tendrá el nivel 3
		var xs2=Number.parseInt(xs%5); //Sacar residuo 
		var puntos = " ";
		for(var i=0; i<xs2; i++){
			puntos = puntos + "<img src=./IMG/uno.png alt='uno'>"; //Aquí pueden ir las imagenes
		}
		var a=1;
		while(a<=xs1){
			document.getElementById("3"+a).innerHTML = "<img src=./IMG/cinco.png alt='Cinco'>";
			a++;
		}
		document.getElementById("3"+a).innerHTML = puntos;
		var y=Number.parseInt(x%400);
		if(y==0){
			document.getElementById("21").innerHTML = "<img src=./IMG/cero.png alt='Cero'>";
			document.getElementById("11").innerHTML = "<img src=./IMG/cero.png alt='Cero'>";
		}
		else{
			var ys=Number.parseInt(y/20);
			var ys1=Number.parseInt(ys/5);
			var ys2=Number.parseInt(ys%5);
			var puntos = " ";
			for(var i=0; i<ys2; i++){
				puntos = puntos + "<img src=./IMG/uno.png alt='Uno'>";
			}
			a=1;
			while(a<=ys1){
				document.getElementById("2"+a).innerHTML = linea;
				a++;
			}
			document.getElementById("2"+a).innerHTML = puntos;
			var z=Number.parseInt(x%20);
			if(z==0){
				document.getElementById("11").innerHTML = "<img src=./IMG/cero.png alt='Cero'>";
			}
			else{
				var zs1=Number.parseInt(z/5);
				var zs2=Number.parseInt(z%5);
				var puntos = " ";
				for(var i=0; i<zs2; i++){
					puntos = puntos + "<img src=./IMG/uno.png alt='uno'>";
				}
				a=1;
				while(a<=zs1){
					document.getElementById("1"+a).innerHTML = linea;
					a++;
				}
				document.getElementById("1"+a).innerHTML = puntos;
			} 
		}
	}
	if((y<=19)&&(x>0)&&(z>0)){
		document.getElementById("21").innerHTML = "<img src=./IMG/cero.png alt='Cero'>";
	}
}


var a=0, b=0, c=0; //A: Nivel 3, B: Nivel 2, C: Nivel 1
var filaA=1, filaB=1, filaC=1;
var puntosA=" ",puntosB=" ",puntosC=" ";
var sumaA=0,sumaB=0, sumaC=0;
var resultado=0;
function agregar1(){
	if(c<19){
		c=c+1;
			if((c==5)||(c==10)||(c==15)){
				if(filaC<5){
					document.getElementById("n1"+"f"+filaC).innerHTML="<img src=./IMG/cinco.png alt='Cinco'>";
					filaC=filaC+1;
					puntosC=" ";
				}
			}else{
				puntosC = puntosC + "<img src=./IMG/uno.png alt='uno'>"
				document.getElementById("n1"+"f"+filaC).innerHTML= puntosC;
				//console.log(c);
				if(c===19){
					//Nada
					document.getElementById('suma1').disabled="true";
				}
			}
		}else{
			document.getElementById('suma1').disabled="true";
		}
		sumaC=c*1;
		sumar();
}
function agregar20(){
	if(b<19){
		b=b+1;
			if((b==5)||(b==10)||(b==15)){
				if(filaB<5){
					document.getElementById("n2"+"f"+filaB).innerHTML="<img src=./IMG/cinco.png alt='Cinco'>";
					filaB=filaB+1;
					puntosB=" ";
				}
			}else{
				puntosB = puntosB + "<img src=./IMG/uno.png alt='uno'>"
				document.getElementById("n2"+"f"+filaB).innerHTML= puntosB;
				//console.log(b);
					if(b===19){
						//Nada
						document.getElementById("suma20").disabled=true;
					}
			}
		}else{
			document.getElementById("suma20").disabled=true;
		}
	sumaB=b*20;
	sumar();
}
function agregar400(){
	if(a<19){
		a=a+1;
			if((a==5)||(a==10)||(a==15)){
				if(filaA<5){
					document.getElementById("n3"+"f"+filaA).innerHTML="<img src=./IMG/cinco.png alt='Cinco'>";
					filaA=filaA+1;
					puntosA=" ";
				}
			}else{
				puntosA = puntosA + "<img src=./IMG/uno.png alt='uno'>"
				document.getElementById("n3"+"f"+filaA).innerHTML= puntosA;
				//console.log(a);
					if(a===19){
					//Nada
					document.getElementById('suma400').disabled=true;
				}
			}
		}else{
			document.getElementById('suma400').disabled=true;
		}
	sumaA=a*400;
	sumar();
}
function sumar(){
	resultado = sumaA+sumaB+sumaC;	
}
function Resultado(){
	if((a>=1)&&(b==0)&&(c==0)){
		document.getElementById('n1f1').innerHTML="<img src=./IMG/cero.png alt='Cero'>";
		document.getElementById('n2f1').innerHTML="<img src=./IMG/cero.png alt='Cero'>";

	}
	if((b>=1)&&(a==0)&&(c==0)){
		document.getElementById('n1f1').innerHTML="<img src=./IMG/cero.png alt='Cero'>";
	}
	
	document.getElementById('resultado').value=resultado;
	document.getElementById('suma1').disabled=true;
	document.getElementById('suma20').disabled=true;
	document.getElementById('suma400').disabled=true;
	
}
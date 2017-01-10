/*function nom(){//----------------------------------------------------------nom de la fonction
const SEUIL = 200;//
var nb;//-------------------------------------------------------------------------entier


for (var nb = 1; nb <= SEUIL; nb++) {//-------------------------------------------boucle For
	//document.getElementById("liste").innerHTML = "<li>"+nb+"</li>";
	//document.write("<li>"+nb+"</li>");
	document.getElementById("liste").innerHTML+="<li>"+nb+"</li>";

}
}
nom();*/
//////////////////////////////////////////////////////////////////////////////////////////////////

function nom(){//----------------------------------------------------------nom de la fonction
var SEUIL;//
var nb;//-------------------------------------------------------------------------entier

var SEUIL=prompt("Combien de cases voulez-vous?(en entier et inférieur à 500)");
if (SEUIL>501|SEUIL!=parseInt(SEUIL)) {
	alert("C'est pas bon, essaye encore")
} 
 
else {


		for (var nb = 1; nb <= SEUIL; nb++) {//-------------------------------------------boucle For
			//document.getElementById("liste").innerHTML = "<li>"+nb+"</li>";
			//document.write("<li>"+nb+"</li>");
			document.getElementById("liste").innerHTML+="<li>"+nb+"</li>";

		}
	}
}
nom();
//Équipier 1 : Pierre-Olivier Tremblay - 20049076
//Équipier 2 : Leopold Patret - 20137744

		//// DIFFERENTES FONCTIONS ////
var validateUsername= function (value){			//valider le nom d'utilisateur
var id1 = value.charAt(0);
var id2 = value.charAt(1);
var id3 = value.charAt(2);
var id4 = value.charAt(3);
var id5 = value.charAt(4);
var verifid1 = (id1.match(/[A-Za-z]/)!=null);
var verifid2 = (id2.match(/[A-Za-z]/)!=null);
var verifid3 = (id3.match(/[A-Za-z]/)!=null);
var verifid4 = (id4.match(/[A-Za-z]/)!=null);
var verifid5 = (id5.match(/[A-Za-z]/)!=null);
var estValide=(verifid1 && verifid2 && verifid3 && verifid4 && verifid5);  // sa fait un peu beaucoup de variable je pense XD je me suis inspiré de notre devoir 2
}
var validatePassword= function (value){			//valider le mot de passe


} 
var updateHeader = function (username){			//mettre à jour le nom d'utilisateur dans le <header>


}
var searchMovies = function (movies,searchValue){		//retourner une liste de films dont le titre contient les caractères tappés dans la barre de recherche.


}
var sortMovies = function (movies,isAscending){			//retourner une liste de films triée.


}
var populateSelect = function(movies) {			//retourner une liste de tous les genres (string) disponibles


}
var filterMovies = function(movies,genreFilter){		//appelée lorsque l'utilisateur sélectionne un genre dans la boîte de sélection. Celle-ci doit retourner une liste de films contenant le genre reçu en paramètre: genreFilter


}
var displayMovie = function(movie){			//appelée lorsque l'application à besoin d'afficher un film. Celle-ci doit retourner un objet JavaScript particulier.


}


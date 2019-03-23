//Équipier 1 : Pierre-Olivier Tremblay - 20049076
//Équipier 2 : Leopold Patret - 20137744

//// DIFFERENTES FONCTIONS ////
var valideUsername = function (value){ 
for (var i = 0; i < 5; i++) {
    var tab= [[i]];
    var letre = value.charAt(i);
    tab.push(letre);
    var verif=tab[1].charCodeAt(0);
if ((verif>=65&&verif<=90)||(verif>=97&&verif<=122)){
    alert("good");// juste pour les test , a changer 
}else{
    alert("bad");// "         "
}
}
for (var i = 5; i < value.length; i++){
  var tab2= [[i]];
    var chltr = value.charAt(i);
    tab.push(chltr);
    var verif2=chltr.charCodeAt(0);
if (((verif2>=65&&verif2<=90)||(verif2>=97&&verif2<=122)||(verif2>=48&&verif2<=57))){
   alert("good");
}else{
   alert("bad");
}
}
/*ici pour ensuite faire les test de verification pour les adresse mail il faudra utiliser .length-(longueur des 3 adresse mais possible et verrfier que c'est bien 
celle-ci qui ont été renté dans la code par la manière des numéro ASCI ou alors avec coparaison direct avec le stringet ensuite la fonction de validation de l'identifiant ser
complète)*/
}

var validatePassword = function(value) {
  //valider le mot de passe
};
var updateHeader = function(username) {
  //mettre à jour le nom d'utilisateur dans le <header>
};
var searchMovies = function(movies, searchValue) {
  //retourner une liste de films dont le titre contient les caractères tappés dans la barre de recherche.
};
var sortMovies = function(movies, isAscending) {
  //retourner une liste de films triée.
};
var populateSelect = function(movies) {
  //retourner une liste de tous les genres (string) disponibles
};
var filterMovies = function(movies, genreFilter) {
  //appelée lorsque l'utilisateur sélectionne un genre dans la boîte de sélection. Celle-ci doit retourner une liste de films contenant le genre reçu en paramètre: genreFilter
};
var displayMovie = function(movie) {
  //appelée lorsque l'application à besoin d'afficher un film. Celle-ci doit retourner un objet JavaScript particulier.
};

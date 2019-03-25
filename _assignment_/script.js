//Équipier 1 : Pierre-Olivier Tremblay - 20049076
//Équipier 2 : Leopold Patret - 20137744

//// DIFFERENTES FONCTIONS ////

/* La fonction doit se nommer validateUsername*/

/**
 * Vérifie si le username est valide
 *
 * @param {string} value : text in username area.
 *
 */

var validateUsername = function(value) {
  //On vérifie si c'est un courriel
  var finCourrielValide = ["@homeflix.ca", "@homeflix.com", "@homeflix.org"];
  if (value.indexOf("@") == -1) {
    var cond1 = value.length >= 5; //Verifie si taille est plus que 5
    var cond2 = value.slice(0, 5).match(/^[a-zA-Z]+$/g) != null; //Verifie si 5 premiers caracteres sont juste des lettres
    var cond3 = value.slice(5).match(/^[a-zA-Z0-9]*$/g) != null; //Verifie si le reste est juste des lettres ou chiffres

    return cond1 && cond2 && cond3;
  } else {
    var cond1Tab = finCourrielValide.map(function(mailEnd) {
      return value.indexOf(mailEnd) + mailEnd.length == value.length;
    });
    var cond1 = cond1Tab.indexOf(true) != -1; //Verifie si le courriel finit avec une des fins valides

    if (cond1) {
      var cond2 = value.slice(0, cond1).match(/^[a-zA-Z0-9.]+$/g) != null;
      return cond2;
    }

    return cond1;
  }
};

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

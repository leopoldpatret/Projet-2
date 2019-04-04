//Équipier 1 : Pierre-Olivier Tremblay - 20049076
//Équipier 2 : Leopold Patret - 20137744

//// DIFFERENTES FONCTIONS ////

/* La fonction doit se nommer validateUsername*/

/**
 * Retourne un booléen disant si le username est valide
 *
 * @param {string} value : text in username area.
 *
 */

var validateUsername = function(value) {
  var finCourrielValide = ["@homeflix.ca", "@homeflix.com", "@homeflix.org"];
  //Verifie si c'est un courriel
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

/**
 * Retourne un booléen disant si le mot de passe est valide
 *
 * @param {string} value : text in password area.
 *
 */

var validatePassword = function(value) {
  var cond1 = value.length >= 8 && value.length <= 16; //Verifie si entre 8 et 16 caracteres inclus

  //Verifie si contient les caracteres que l'on veut verifier
  var cond2a = value.match(/[A-Z]/g) != null;
  var cond2b = value.match(/[!-/:-@[-`{-~]/g) != null;
  var cond2c = value.match(/[0-9]/g) != null;

  if (cond2a && cond2b && cond2c) {
    var cond3 = value.match(/[A-Z]/g).length >= 1; //Verifie s'il y a au moins 1 majuscule
    var cond4 = value.match(/[0-9]/g).length >= 1; //Verifie s'il y a au moins 1 chiffre
    var cond5 = value.match(/[!-/:-@[-`{-~]/g).length >= 1; //Verifie s'il y a au moins 1 caractere special

    return cond1 && cond3 && cond4 && cond5;
  }

  return false;
};

/**
 * Insère le nom d'utilisateur de la personne qui vient de se connecter dans le header
 *
 * @param {string} username : nom d'utilisateur.
 *
 */
var updateHeader = function(username) {
  var headerUser = document.getElementById("username");

  headerUser.innerHTML = username;
};

/**
 * Retourne une liste de films, dont le titre contient les caractères
 * tappés dans la barre de recherche
 *
 * @param {[string]} movies : liste de films disponibles
 * @param {string} searchValue : text in search area
 *
 */

var searchMovies = function(movies, searchValue) {
  searchValue.toLowerCase(); //Pour considérer toutes les options
  var moviesSearched = movies.filter(function(element) {
    var majElement = element.title.toLowerCase();

    if (majElement.indexOf(searchValue) != -1) {
      return element;
    }
  });

  return moviesSearched;
};
var sortMovies = function(movies, isAscending) {
  movies = movies.sort(function(a, b) {
    return a.title < b.title ? -1 : 1;
  });
  if (isAscending == true) {
    return movies;
  } else {
    if (isAscending == false) {
      return movies.reverse();
    }
  }
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

// test pour la fonction sortMovie sur codeboot
/*
var sortMovies = function(movies, isAscending) {
   movies=movies.sort();
if (isAscending== true){
return movies ;
}else{
  if (isAscending==false){
    movies= movies.reverse();
  return movies ;
  }
}
    print(movies);
};
sortMovies(["Leo","pold","Pat","tret",Avenger","Spiderman","Game of thrones","Batman"], false);
*/

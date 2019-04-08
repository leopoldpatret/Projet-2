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
  document.getElementById("username").innerHTML = username;
};

/**
 * Retourne une liste de films, dont le titre contient les caractères
 * tappés dans la barre de recherche
 *
 * @param {[Object]} movies : liste de films disponibles
 * @param {string} searchValue : text in search area
 *
 */

var searchMovies = function(movies, searchValue) {
  console.log(movies[0]);
  searchValue.toLowerCase(); //Pour considérer toutes les options
  var moviesSearched = movies.filter(function(element) {
    var majElement = element.title.toLowerCase();

    if (majElement.indexOf(searchValue) != -1) {
      return element;
    }
  });

  return moviesSearched;
};

/**
 * Retourne une liste des films triés par titre
 *
 *
 * @param {[Object]} movies : liste de films disponibles
 * @param {boolean} isAscending : Ordre croissant ou non
 *
 */

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

/**
 * Retourne une liste de tous les genres de films disponibles
 *
 *
 * @param {[Object]} movies : liste de films disponibles
 *
 */

var populateSelect = function(movies) {
  var listGenres = movies[0].genres;

  for (var i = 1; i < movies.length; i++) {
    movies[i].genres.forEach(function(genre) {
      if (listGenres.indexOf(genre) == -1) listGenres.push(genre);
    });
  }

  return listGenres;
};

/**
 * Retourne une liste de tous les films contenant
 * le genre recherché
 *
 * @param {[Object]} movies : liste de films disponibles
 * @param {string} genreFilter : genre recherché
 *
 */
var filterMovies = function(movies, genreFilter) {
  movies.filter(function(film) {
    if (film.genres.indexOf(genreFilter) != -1) return film;
  });
};

/**
 * Retourne un objet JS particulier du film voulu
 *
 * @param {Object} movie : liste de films disponibles
 *
 */

var SHOW_SAMPLE = true;

var displayMovie = function(movie) {
  var acronyme = "";
  movie.title
    .split(" ")
    .slice(0, 3)
    .forEach(function(titleWord) {
      acronyme += titleWord[0];
    }); //Fonctionne tester avec console.log
};
/*
<div class="c-main_item_card">
<div class="c-main_item_cover -red">
<p class="c-main_item_preview">S</p>
<div class="c-main_item_details">
<h3 class="c-main_item_header">Title :</h3>
<p class="c-main_item_text">Sample</p>
<h3 class="c-main_item_header">Genre :</h3>
<p class="c-main_item_text">Action, Funny, Drama</p>
<h3 class="c-main_item_header">Synopsis :</h3>
<p class="c-main_item_text">
Some amazing content full of interesting things and cool text that will deeply affect your life.
</p>
<h3 class="c-main_item_header">
        Length :
        <span class="c-main_item_span">2h05min</span>
        </h3><h3 class="c-main_item_header">
        Language :
        <span class="c-main_item_span">EN</span>
        </h3><h3 class="c-main_item_header">
        Rating :
        <span class="c-main_item_span">9.7 / 10</span>
        </h3>
        </div>
        </div>
        <h2 title="Sample" class="c-main_item_title">Sample</h2>
        </div>


         tout sa c'est le code html que le site utilise pour afficher l'échantillon qui est donnée dans la consigne 
         on vas donc devoir utiliser toute les classe qui son la et les remplir pour chaque film je sais pas si on sépare chaque 
         variable (genre, duree, rating, ...) ou si on essaye de faire un fonction dans la fonction qui va etre utilisé pour l'affichage.
*/

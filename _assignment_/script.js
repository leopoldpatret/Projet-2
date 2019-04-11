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
    return movies.reverse();
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

  listGenres.sort();

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
  var filtre = movies.filter(function(film) {
    if (film.genres.indexOf(genreFilter) != -1) return film;
  });

  return filtre;
};

/**
 * Retourne un objet JS particulier du film voulu
 *
 * @param {Object} movie : liste de films disponibles
 *
 */

var SHOW_SAMPLE = true;

/* Différentes couleurs:
.c-main_item_cover.(-red | -blue | -green
  -orange | -yellow | -purple)*/

var displayMovie = function(movie) {
  var colors = ["-red", "-blue", "-green", "-orange", "-yellow", "-purple"];

  var acronyme = "";
  movie.title
    .split(" ")
    .slice(0, 3)
    .forEach(function(titleWord) {
      acronyme += titleWord[0];
    });

  /*Définir tous les éléments nécessaires */
  var movieContainer = document.createElement("div");
  movieContainer.className = "c-main_item_card";

  var movieTitle = document.createElement("h2");
  movieTitle.className = "c-main_item_title";
  movieTitle.title = movie.title;
  movieTitle.innerHTML = movie.title;

  var movieCover = document.createElement("div");
  movieCover.className =
    "c-main_item_cover " +
    colors[Math.floor(Math.random() * (colors.length + 1))];

  var acr = document.createElement("p");
  acr.className = "c-main_item_preview";
  acr.innerHTML = acronyme.toUpperCase();

  var movieDetails = document.createElement("div");
  movieDetails.className = "c-main_item_details";

  var createDetails = function(header, tag, inner) {
    var h3 = document.createElement("h3");
    h3.className = "c-main_item_header";
    h3.innerHTML = header;

    var description = document.createElement(tag);

    if (tag == "p") {
      description.className = "c-main_item_text";
    } else description.className = "c-main_item_span";// ici il y a un problème je pense et c'est pour sa que l'affichage n'est pas correct pour la durée, note et langue 

    description.innerHTML = inner;

    return [h3, description];
  };

  var titre = createDetails("Title :", "p", movie.title);
  var genre = createDetails(
    "Genres :",
    "p",
    movie.genres.slice(0, 3).toString() + "..."
  );
  var synopsisraw =movie.overview; 
  var synopsis2 = synopsisraw.substr(0, 125);
  var synopsis = createDetails("Synopsis :", "p", synopsis2.substr(0, Math.min(synopsis2.length, synopsis2.lastIndexOf(" ")))+"...");
  
  var innerDuree =
    movie.runtime % 60 < 10
      ? Math.floor(movie.runtime / 60) + "h0" + (movie.runtime % 60) + "min"
      : Math.floor(movie.runtime / 60) + "h" + (movie.runtime % 60) + "min";

  var duree = createDetails("Length :", "span", innerDuree);
  var langage = createDetails(
    "Language :",
    "span",
    movie.language.toUpperCase()
  );

  var rating = createDetails("Rating :", "span", movie.rating + "/10");

  /*Relier les éléments en 1 objet HTML */

  var appendFunction = function(parent, child, childIsArray) {
    if (childIsArray)
      child.forEach(function(el) {
        parent.appendChild(el);
      });
    else parent.appendChild(child);
  };

  //Pour la section movieDetails
  appendFunction(movieDetails, titre, true);
  appendFunction(movieDetails, genre, true);
  appendFunction(movieDetails, synopsis, true);
  appendFunction(movieDetails, duree, true);
  appendFunction(movieDetails, langage, true);
  appendFunction(movieDetails, rating, true);

  //Pour la section movieCover
  appendFunction(movieCover, acr, false);
  appendFunction(movieCover, movieDetails, false);

  //Pour la section movieContainer
  appendFunction(movieContainer, movieCover, false);
  appendFunction(movieContainer, movieTitle, false);

  return { title: movie.title, genres: movie.genres, element: movieContainer };
};

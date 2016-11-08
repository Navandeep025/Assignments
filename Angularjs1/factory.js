// var app= angular.module("myApp",[]);
app.factory('movieService', function($http, $q) {

  return {
   getMovie: function(movie,pageno) {
     var deferred = $q.defer();
     $http.get('http://www.omdbapi.com/?s='+movie+"&page="+pageno)

       .then(function(response) { 
          	deferred.resolve({movies : response.data});
       });
     return deferred.promise;
   }
  }
 });

app.factory('movieDetailsFactory', function($http, $q ,$stateParams) {

  return {

   getMovieDetails: function(param) {
     var deferred = $q.defer();
     $http.get('http://www.omdbapi.com/?i='+param)

       .then(function(response) { 
          	deferred.resolve({details : response.data});
          //	console.log({details : response.data});
       });
     return deferred.promise;
   }
  }
 });
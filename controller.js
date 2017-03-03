var myApp = angular.module("myApp", []);
// dependency injection inside [] - brings in third party modules to augment angular (happened pre-node modules)
myApp.controller("myController", ($scope, $http)=>{
	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';
	$scope.movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';
	var imagePath = 'http://image.tmdb.org/t/p/w300/';
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';
	$http({
		method: 'GET', 
		url: movieURL,
	}).then(
		function successFunction(movieData){
			console.log(movieData)
			$scope.movieData = movieData
		},
		function failedFunction(movieData){
			console.log(movieData)
		}
	)
	// $scope.test = "is this werkin'";
});
// everything above line 5 is tied together to html via $scope
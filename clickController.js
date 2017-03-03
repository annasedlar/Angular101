var clickApp = angular.module("clickApp", []);
console.log(clickApp)

clickApp.controller("clickController", ($scope)=>{
	console.log('test')
	$scope.test = "is this working";
	$scope.students = [];
	$scope.tasks = [];
	$scope.handleClick = function(){
		console.log("You clicked");
		$scope.students.push($scope.studentName);
	}
	$scope.clearStudents = function(){
		$scope.students = [];
	}
	$scope.submitHandler = function(){
		$scope.tasks.push({
			name: $scope.task,
			date: $scope.taskDate
		})
		$scope.task = "";
		$scope.date = "";
		$scope.taskFilter = "";
	}



});

// var clickApp = angular.module('clickApp', []);
// clickApp.controller('clickController', ($scope)=>{
//     $scope.test = 'is this working'
//     $scope.handleClick = function(){
//         console.log('did u click')
//     }
// })
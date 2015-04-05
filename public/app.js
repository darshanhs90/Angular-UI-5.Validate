var app=angular.module("myApp",['ngRoute','ui.route']);
app.controller("MainController",function($scope){
$scope.routes=['/route-1','/route-2','/route-3'];

});
app.config(function($routeProvider,$locationProvider){
$routeProvider.otherwise{
	templateUrl:'main.html',
	controller:'MainController'
}
$locationProvider.html5mode(true);
});

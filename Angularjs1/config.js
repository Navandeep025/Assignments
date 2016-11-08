// var app1 = angular.module("myApp",['ngRoute']);
app.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('Search',{
		url: '/searchDet/:title1',
		templateUrl: "table.html",
		controller: "myCtrl"
	})
	.state('details',{
		url: '/details/:param',
		templateUrl: "details.html",
		controller: "myDetailsCtrl"

	});
}]);
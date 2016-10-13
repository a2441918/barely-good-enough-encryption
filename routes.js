(function(){
	var app = angular.module('bge', ['ngRoute']).config(config); //Creating AngularJS application, injecting ngRoute and inserting a config file into ngRoute
	

	function config($routeProvider) //holds value of current path of AngularJS application
	{
		$routeProvider.when('/', { //when Routeprovider is just a /, use Controller 1
			controller: 'controller1',
			templateUrl: 'views/view.html'
		})
		.otherwise({
			redirectTo: '/' // redirect back to /
		})

	}
})(); // IIFE
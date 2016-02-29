var app = angular.module("miniRouting", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state("home", {
		templateUrl: "js/home/homeTmpl.html",
		controller:"homeCtrl",
		url: "/"
	})
	.state("settings", {
		templateUrl: "js/settings/settingsTmpl.html",
		controller: "settingsCtrl",
		url: "/settings"
	})
	.state("products", {
		templateUrl: "js/products/productsTmpl.html",
		controller: "productsCtrl",
		url: "/products/:id"
	});
});
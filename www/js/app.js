var app = angular.module("app", ["ngRoute"]);
app.config(function($locationProvider, $routeProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    $routeProvider.when('/',{
        templateUrl: "../main.html",
        controller: "MyController"
    }).otherwise({ redirectTo: '/' });
});
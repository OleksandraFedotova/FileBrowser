var app = angular.module("app", ["ngRoute"]);

var configFunc = function ($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "/View/FileBrowserPage.html",
        controller: "fileBrowserCtrl"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
};

configFunc.$inject = ["$routeProvider"];
app.config(configFunc);
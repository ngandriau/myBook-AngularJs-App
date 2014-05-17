//The app module
var BookApp = angular.module("BookApp", ['ui.bootstrap']);

BookApp.controller("welcomeAppCtrl", function($scope){
   $scope.message = "hello";
});
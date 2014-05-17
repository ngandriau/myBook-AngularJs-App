//The app module
var BookApp = angular.module("BookApp", []);

BookApp.controller("welcomeAppCtrl", function($scope){
   $scope.message = "hello";
});
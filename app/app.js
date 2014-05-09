// Application starting point
var guidebookConfig = function($routeProvider) {
  $routeProvider.when("/", {
    controller : "ChaptersController", // dies zeigt nicht auf das js File
    templateUrl : "app/view/chapter.html"
  });
};

var Guidebook = angular.module('Guidebook', ['ngRoute']).config(guidebookConfig);

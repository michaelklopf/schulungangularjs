// Application starting point
var appConfig = function($routeProvider) {
  $routeProvider.when("/", {
    controller : "ChaptersController", // dies zeigt nicht auf das js File
    templateURL : "view/chapter.html"
  });
};

var App = angular.module('Guidebook', []).config(appConfig);

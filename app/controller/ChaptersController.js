Guidebook.controller('ChaptersController', function($scope, ChapterModel) {
  $scope.name = "Hoooowdie Haaaaay";
  $scope.kapitel = ChapterModel.getChapters();
});

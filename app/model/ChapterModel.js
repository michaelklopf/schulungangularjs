Guidebook.service('ChapterModel', function(){
  this.getChapters = function() {
    return [
      {
          id: 1,
          title: "The Brodock Bros 10",
          summary: "You can't handle that much broage"
      },
      {
          id: 2,
          title: "Broman 04",
          summary: "Broman saves the world"
      },
      {
          id: 3,
          title: "Indiana Bro 02",
          summary: "Indiana Bro finds the Great Temple"
      }
    ];
  }
});

Guidebook.service('ChapterModel', function(){
  this.getChapters = function() {
    return [
      {
        id: 1,
        title : "Titel 1",
        summary : "Zusammenfassung von Titel 1"
      },
      {
        id: 2,
        title : "Titel 2",
        summary : "Zusammenfassung von Titel 2"
      },
      {
        id: 3,
        title : "Titel 3",
        summary : "Zusammenfassung von Titel 3"
      }
    ];
  }
});

require(['jquery', 'q', 'util',
  'requestStream', 'renderVideo', 'takeScreenshot', 'resizeImage'
], function($, Q, util,
  requestStream, renderVideo, takeScreenshot, resizeImage
) {

  $('#Start').on('click', function(){


    /* Schritt 1: Videofeed anzeigen */

    // Stream anfragen, als Video einblenden und das
    // Video-Objekt zurückgeben
    var whenVideo = requestStream()
      .then(renderVideo)
      .then(function(video){
        $(video).appendTo('#VideoWrapper')
          .get(0)
          .play();
        $('#Start').attr('disabled', true);
        return video;
      });

    // Fehlerfall (Kamera-Erlaubnis verweigert o.Ä.)
    whenVideo.fail(
      util.handleError('Kann Stream nicht anzeigen')
    );


    /* Schritt 2: Foto-Aufnehm-Funktion */

    // Screenshot und Thumbnail erstellen,
    // Photo-Objekt zurückgeben
    function takePhoto(source){
      return Q.all([
          takeScreenshot(source),
          resizeImage(source, 100, 100)
        ])
        .spread(function(full, thumb) {
          return new util.Photo(full, thumb);
        });
    }

    /* Schritt 3: Fotos aufnehmen und anzeigen */

    // Wenn der Videostream bereit ist, wird
    // der Foto-Button aktiviert
    whenVideo.then(function(video){
      $('#Photo')
        .attr('disabled', false)
        .on('click', function(){
          // Foto aufnehmen und anzeigen
          takePhoto(video)
            .then(function(photo){
              return photo.to$();
            })
            .then(function($photo){
              return $photo.appendTo('#Gallery');
            })
            .fail(
              util.handleError('Konnte Foto nicht erstellen')
            );
        });
    });

    /* Schritt 4: Bilder aus der Galerie löschen */

    $('#Gallery').on('click', 'button', function(evt){
      $(evt.target).parent().remove();
    });

  }); // Ende #Start on click

}); // Ende require()

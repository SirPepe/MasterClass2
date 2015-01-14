require(['jquery', 'q', 'util',
  'requestStream', 'renderVideo', 'takeScreenshot', 'resizeImage'
], function($, Q, util,
  requestStream, renderVideo, takeScreenshot, resizeImage
) {

  $('#Start').on('click', function() {

    // Stream anfragen, als Video einblenden und das
    // Video-Objekt zurückgeben
    var whenVideo = requestStream()
      .then(renderVideo)
      .then(function(video) {
        $(video).appendTo('#VideoWrapper').get(0).play();
        $('#Start').attr('disabled', true);
        return video;
      });

    // Fehlerfall (Kamera-Erlaubnis verweigert o.Ä.)
    whenVideo.fail(
      util.handleError('Kann Stream nicht anzeigen')
    );

    // Wenn der Videostream bereit ist, wird
    // der Foto-Button aktiviert
    whenVideo.then(function(video) {
      $('#Photo')
        .attr('disabled', false)
        .on('click', function() {
          // Foto aufnehmen und anzeigen
          var whenPhoto = takePhoto(video);
          whenPhoto
            .then(function(photo) {
              return photo.to$();
            })
            .then(function($photo) {
              return $photo.appendTo('#Gallery');
            })
            .fail(
              handleError('Konnte Foto nicht erstellen')
            );
        });
    });

    // Screenshot und Thumbnail erstellen, Photo-Objekt zurückgeben
    function takePhoto(source) {
      return Q.all([
          takeScreenshot(source),
          resizeImage(source, 100, 100)
        ])
        .spread(function(full, thumb) {
          return new util.Photo(full, thumb);
        });
    }

    // Bilder aus der Galerie löschen
    $('#Gallery').on('click', 'button', function(evt) {
      $(evt.target).parent().remove();
    });

  }); // Ende #Start on click

}); // Ende require()

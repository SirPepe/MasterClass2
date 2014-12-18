define(function(){

  function handleError(message){
    return function(err){
      var msg = message + "\n" + err.name;
      if(err.message){
        msg += ': ' + err.message;
      }
      window.alert(msg);
      $('body').addClass('error');
      console.log(err);
    };
  }

  // Constructorfunktion für Foto-Objekte
  function Photo(full, thumb){
    this.id = Date.now();
    this.full = full;
    this.thumb = thumb;
    this.fullUrl = window.URL.createObjectURL(full);
    this.thumbUrl = window.URL.createObjectURL(thumb);
  }
  Photo.prototype.to$ = function(){
    var $wrapper = $('<div>');
    var $link = $('<a>').attr('href', this.fullUrl);
    var $img = $('<img>').attr('src', this.thumbUrl);
    var $close = $('<button>').text('X');
    $link.appendTo($wrapper);
    $close.appendTo($wrapper);
    $img.appendTo($link);
    return $wrapper;
  };

  return {
    handleError: handleError,
    Photo: Photo
  };

});
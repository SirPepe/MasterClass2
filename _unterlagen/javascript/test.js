require(['modul', 'jquery'], function(modul, $){

var promise = modul();

// API-Test
QUnit.test('Modul-API', function(assert){
  assert.equal(typeof modul, 'function', 'Modul gibt eine Funktion zurück');
  assert.equal(typeof promise.then, 'function', 'Funktion gibt ein Promise zurück');
});

// Promise-Test
QUnit.asyncTest('Modul-Promise', function(assert){
  var clicked = false;
  $('button').on('click', function(){
    clicked = true;
  });
  promise.then(function(value){
    assert.ok(clicked, 'Promise wird bei Button-Klick aufgelöst');
    assert.equal(value, 42, 'Promise wird mit "42" aufgelöst');
    start();
  });
});

});
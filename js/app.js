var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13
  });
  var tribeca = {lat: 40.719526, lng: -74.0089934};

  var marker = new google.maps.Marker({
    position: tribeca,
    map: map,
    title: 'First Marker!'
  });


}

function setHeight() {
  windowHeight = $(window).innerHeight();
  $('#map').css('min-height', windowHeight );
};

setHeight();
$(window).resize(function() {
  setHeight();
});

// var ViewModel = function() {
//     var self = this;
// };
//
// ko.applyBindings( new ViewModel());

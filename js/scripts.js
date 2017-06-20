//price calc section
//busines logic
function Price(litre, time) {
  this.litre= litre;
  this.time = time;
  this.price = "";
}

Price.prototype.cost = function() {

  return this.litre + this.time;
};

$(document).ready(function() {
  $("form#location").submit(function(event) {
    event.preventDefault();

    var litre = parseInt($("#litre").val());
    var time = parseInt($("#time").val());
    var newPrice = new Price(litre, time);
    $("#show-price").show();
    $("#price").text(newPrice.cost());
  });

});

// end price calc


// map section

//function to set map properties
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(-1.3005320,36.7845840),
    zoom:10, //zoom level specifies the zoom level for the map
};
//this creates a new map inside the div with id googlemap using the parameters that are passed through the function
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker=new google.maps.Marker({position:myCenter});
marker.setMap(map);

}

// end of map section

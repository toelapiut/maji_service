// header
$(document).ready(function(){
   $("#link1").click(function(){
        $path=$("#box1").offset().top;
        $('body').animate({scrollTop:$path},1000);
   });
   $("#link2").click(function(){
        $path=$("#box2").offset().top;
        $('body').animate({scrollTop:$path},1000);
   });
   $("#link3").click(function(){
        $path=$("#box3").offset().top;
        $('body').animate({scrollTop:$path},1000);
   });
   $("#link4").click(function(){
        $path=$("#box4").offset().top;
        $('body').animate({scrollTop:$path},1000);
   });
});
// header section


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
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
// end of map section

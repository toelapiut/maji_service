// //busines logic
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

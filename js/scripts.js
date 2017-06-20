// //busines logic
function Price(litre, time) {
  this.litre= litre;
  this.time = time;
  this.price = "";
}

Price.prototype.cost = function() {

  return this.litre + this.time;
};

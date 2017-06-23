$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


//business logic
function Users(name,email,phonenum,altnum,username,pass){
  this.fullname=name;
  this.emailaddress=email;
  this.phonenumber=phonenum;
  this.alternativenumber=altnum;
  this.username=username;
  this.password=pass;
}
//price calc section
//busines logic
function Order(litre, time) {
  this.litre= litre;
  this.time = time;
  this.price = 120;
}

Order.prototype.cost = function() {

  return this.litre + this.time;
};
Order.prototype.checkSupplierDetails=function(place){
  var suppliers=['Peter Njoroge','Kamau Mweiga','James Machira','Mark Mwaniki','Apiut Toel','Brian Gitau',
                 'Victor Miriti','Emmanuel Kaptain','Paul Kipchirchir','Barclay Koin','Samuel Kinyanjui',
                 'Fredrick Omondi','Chris Theuri','Stanley Macharia','Cornelius Ngondo']
  if (place==="Donholm"){
    console.log(place);

   return suppliers[0];
  }
}
//user logic
$(document).ready(function(){
  $("form#signup").submit(function(event){
    event.preventDefault();
    var userDetails=[];
    var inputfullname=$("input#fullname").val();
    var inputemail=$("input#email").val();
    var inputphonenumber=parseInt($("input#phonenum").val());
    var inputalternativenumber=parseInt($("input#altnum").val());
    var inputusername=$("input#username").val();
    var inputpassword=$("input#password").val();
    var result= new Users(inputfullname,inputemail,inputphonenumber,inputalternativenumber,inputusername,inputpassword);
     userDetails.push(result);
     alert("Thank you" + " " + inputfullname + " " + "for subscribing to our service");
      $('form#signup').reset();
  });

});
$(document).ready(function() {
  $("form#location").submit(function(event) {
    event.preventDefault();

    var locations=$("select#locations").val();
    var litre = parseInt($("#litre").val());
    var time = parseInt($("#time").val());
    var newOrder = new Order(litre, time);
    $("#show-price").show();
    $("#price").text(newOrder.cost());
    $("#Suppliername").text(newOrder.checkSupplierDetails(locations));
  });

});

// end price calc

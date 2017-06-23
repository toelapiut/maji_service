//business logic

// start of function for signup details
function Users(name,email,phonenum,altnum,username,pass){
  this.fullname=name;
  this.emailaddress=email;
  this.phonenumber=phonenum;
  this.alternativenumber=altnum;
  this.username=username;
  this.password=pass;
}
//end of signup details.

//price calc section
//busines logic
// start of function for calculating the price for each range
function Order(litre, time) {
  this.litre= litre;
  this.time = time;
  this.price = 120;
}
Order.prototype.cost = function() {

  return this.litre + this.time;
};
// end of function for calculating the price for each range

//start of function for checking the various suppliers in each region
function Supplier(suppliernames,suppliercontacts,supplieraltcontacts,places){
  this.suppliernames=suppliernames;
  this.suppliercontacts=suppliercontacts;
  this.supplieraltcontacts=supplieraltcontacts;
  this.places=places;
}



  var suppliersNames=['Peter Njoroge','Kamau Mweiga','James Machira','Mark Mwaniki','Apiut Toel','Brian Gitau',
                     'Victor Miriti','Emmanuel Kaptain','Paul Kipchirchir','Barclay Koin','Samuel Kinyanjui',
                     'Fredrick Omondi','Chris Theuri','Stanley Macharia','Cornelius Ngondo'];
  var suppliersContacts=['0722960809','0722960809','0722960809','0722960809','0722960809',
                        '0722960809','0722960809','0722960809','0722960809','0722960809',
                         '0722960809'];
 var suppliersaltContacts=['07145423233','07145423233','07145423233','07145423233','07145423233',
                           '07145423233','07145423233','07145423233','07145423233','07145423233',
                           '07145423233','07145423233','07145423233','07145423233','07145423233'];
var places=['Donholm','Buruburu 1 2 4','Umoja 1','Umoja Innercore','Githurai','Karen','Kileleshwa','Kawangware',
            'Ngara','Eastleigh','Kikuyu','Kibera','Langata','Westlands','Parklands','Embakasi'];
// var supplierDonholm=['Peter Njoroge','0712345678','0712345678'];
// if (place==="Donholm"){
//     return supplierDonholm[0] , supplierDonholm[1] ,supplierDonholm[2];
//   }

var checkSupplierDetails=function(locations){
  var varioussupplierPeople=[];
  var result;
    for(index=0;index<=suppliersNames.length;index++)
    {
      var supplierPeople= new Supplier(suppliersNames[index],suppliersContacts[index],suppliersaltContacts[index],
                                        places[index]);
      varioussupplierPeople.push(supplierPeople);

    }

    varioussupplierPeople.forEach(function(supplierPeople){

        if (supplierPeople.places===locations)
        {
          result=supplierPeople;

        }
      })
      return result;

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
     alert("Thankyou" + " " + inputfullname + " " + "for subscribing to our service");
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

    var newSupplier=checkSupplierDetails(locations);
    console.log(newSupplier.suppliernames);
    $("#show-price").show();
    $("#price").text(newOrder.cost());

    $('#show-suppliers').show();
    $("#Suppliername").text(newSupplier.suppliernames);
     $("#Suppliercontacts").text(newSupplier.suppliercontacts);
     $("#Supplieraltcontact").text(newSupplier.supplieraltcontacts);
    //  $("#Suppliercontacts").text(newSupplier.checkSupplierDetails(locations));
    // $("#Supplieraltcontact").text(newSupplier.checkSupplierDetails(locations));
  });

});

// end price calc

//business logic
function Users(name,email,phonenum,altnum,username,pass){
  this.fullname=name;
  this.emailaddress=email;
  this.phonenumber=phonenum;
  this.alternativenumber=altnum;
  this.username=username;
  this.password=pass;
}

//user logic
$(document).ready(function(){
  $("form#signup").submit(function(event){
    event.preventDefault();
    var userDetails=[];
    var inputfullname=$("input#fullname").val();
    var inputemail=$("input#email1").val();
    var inputphonenumber=parseInt($("input#phonenum").val());
    var inputalternativenumber=parseInt($("input#altnum").val());
    var inputusername=$("input#username").val();
    var inputpassword=$("input#password").val();
    var result= new Users(inputfullname,inputemail,inputphonenumber,inputalternativenumber,inputusername,inputpassword);

    userDetails.push(result);
     console.log(userDetails);

  });
  });

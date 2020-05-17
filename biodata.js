$(document).ready(function(){
//for user name and gen value
$("#create").click(function(){
var test = document.getElementById("check").checked;
if (test == false) {
  $("#agree").html("Please Check the Agree Box to Contionue");

} else {
  var gen = $("#selectGender").val();
  var did = $("#nameInput").val();
  $("#name").html(gen + " " + did);

//for contact value
var numb = $("#number").val();
$("#contact").html("Mobile No. " + numb);

//for emailgetting value module.exports;
var eml = $("#getemail").val();
$("#email").html("E-mail : " + eml);

//getting fatherget
var fat = $("#fatherGet").val();
$("#fName").html("Father's Name " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting motherget
var fat = $("#motherget").val();
$("#mother").html("Mother's Name " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting date of birth
var fat = $("#dobget").val();
$("#dob").html("Date of Birth " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting marital status
var fat = $("#maritalget").val();
$("#marital").html("Marital Status " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting nationalityget
var fat = $("#nationalityget").val();
$("#nationality").html("Nationality " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting religion
var fat = $("#religionget").val();
$("#religion").html("Religion " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting height
var fat = $("#heightget").val();
$("#height").html("Height " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat + "ft");

//getting weitht get
var fat = $("#weightget").val();
$("#weight").html("Weight " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat + "kgs");

//getting language
var fat = $("#languageget").val();
$("#language").html("Language Known " + "&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//getting peraddress
var fat = $("#addressget").val();
$("#address").html("Permanent Address " + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + ":" +"&nbsp&nbsp" + fat);

//for education field
var edu1 = $("#educationget1").val();
$("#one").html(edu1);

var edu2 = $("#educationget2").val();
$("#two").html(edu2);

//for experience values
var ex1 = $("#expget1").val();
$("#eone").html(ex1);

var ex2 = $("#expget2").val();
$("#etwo").html(ex2);

var ex3 = $("#expget3").val();
$("#ethree").html(ex3);

//print current date
var ho = new Date();
var handa = ho.toDateString();
$(".date").html("Date" + ":" + handa );


//print my sign @nirmalhax
$(".sign").html("Coded@Nirmalhax");


$(".form").css("display", "none");
}

});

});

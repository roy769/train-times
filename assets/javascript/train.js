// Initialize Firebase
  var config = {
    apiKey: "AIzaSyChEe-dt9TYZhj3AJUYSqcw_jjOpglc1Co",
    authDomain: "train-this.firebaseapp.com",
    databaseURL: "https://train-this.firebaseio.com",
    projectId: "train-this",
    storageBucket: "",
    messagingSenderId: "193895585409"
  };
  
  firebase.initializeApp(config);

  //database
  var database= firebase.database();

  //button
  $("#submit").on("click",function(event) {

event.preventDefault();

//grab input

var getUsr= $("#usr").val().trim();
var getDest= $("#dest").val.trim();
var getTrain= $("#train").val.trim();
var getFreq= $("#freq").val().trim();


//create local files

var trainData = {
name: getUsr,
Destination: getDest,
Train:getTrain,
Frequency: getFreq
};

//push dta not set data to database

database.ref().push(getUsr);

//log new stuff

console.log(getUsr.name);
console.log(getTrain.Train);
console.log(getDest.Destination);
console.log(getFreq.Frequency);

//alert
alert("Train info Updated");

//clear textboxes

$("usr").val("");
$("dest").val("");
$("train").val("");
$("freq").val("");

});
//firebase event for adding to database

database.ref().on("child_added",function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());


//store in a variable

var getUsr= childSnapshot.val().name;
var getDest= childSnapshot.val().Destination;
var getFreq= childSnapshot.val().Frequency;
var getTrain= childSnapshot.val().Train;

console.log(getUsr);
console.log(getTrain);
console.log(getDest);
console.log(getFreq);

var makePretty= moment.unix(getTrain).format("HH:mm");

//add train data

$("#train-table > tbody").append("<tr><td>"+ getUsr + "<tr><td>" + getTrain + "<tr><td>" + getDest + "<tr><td>" + getFreq + "<tr><td>");

});

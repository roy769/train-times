// Initialize Firebase
<<<<<<< HEAD
var config = {
  apiKey: "AIzaSyChEe-dt9TYZhj3AJUYSqcw_jjOpglc1Co",
  authDomain: "train-this.firebaseapp.com",
  databaseURL: "https://train-this.firebaseio.com",
  projectId: "train-this",
  storageBucket: "train-this.appspot.com",
  messagingSenderId: "193895585409"
};
firebase.initializeApp(config);

  //database
  var trainThis= firebase.database();
=======
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
>>>>>>> ec59143f74f9ae76974fceee7653f8d34afde16d

  //button
  $("#submit").on("click",function(event) {

event.preventDefault();

//grab input

<<<<<<< HEAD
var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val.trim();
var firstTrainUnix = $("#first-train-input").val.trim();
var frequency = $("#frequency-input").val().trim();
=======
var getUsr= $("#usr").val().trim();
var getDest= $("#dest").val.trim();
var getTrain= $("#train").val.trim();
var getFreq= $("#freq").val().trim();
>>>>>>> ec59143f74f9ae76974fceee7653f8d34afde16d


//create local files

<<<<<<< HEAD
var newTrain = {
name: trainName,
Destination: destination,
Train:firstTrainUnix,
Frequency: frequency
=======
var trainData = {
name: getUsr,
Destination: getDest,
Train:getTrain,
Frequency: getFreq
>>>>>>> ec59143f74f9ae76974fceee7653f8d34afde16d
};

//push dta not set data to database

<<<<<<< HEAD
trainThis.ref().push(newTrain);

//log new stuff

console.log(newTrain.name);
console.log(newTrain.Destination);
console.log(firstTrainUnix);
console.log(newTrain.frequency);
=======
database.ref().push(getUsr);

//log new stuff

console.log(getUsr.name);
console.log(getTrain.Train);
console.log(getDest.Destination);
console.log(getFreq.Frequency);
>>>>>>> ec59143f74f9ae76974fceee7653f8d34afde16d

//alert
alert("Train info Updated");

//clear textboxes

<<<<<<< HEAD
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");

return false;
});
//firebase event for adding to database

trainThis.ref().on("child_added",function(childSnapshot, prevChildKey) {
=======
$("usr").val("");
$("dest").val("");
$("train").val("");
$("freq").val("");

});
//firebase event for adding to database

database.ref().on("child_added",function(childSnapshot, prevChildKey) {
>>>>>>> ec59143f74f9ae76974fceee7653f8d34afde16d
  console.log(childSnapshot.val());


//store in a variable

<<<<<<< HEAD
var tname = childSnapshot.val().name;
var tDestination = childSnapshot.val().destination;
var tFrequency = childSnapshot.val().frequency;
var tFirstTrain = childSnapshot.val().firsTrain;

//math
var differenceTimes =  moment().diff(moment.unix(tFirstTrain), "minutes");
var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes")%tFrequency;
var tMinutes = tFrequency - tRemainder;
//arrival
var tArrival = moment().add(tMinutes, "m").format("hh:mm A");

var smallTime = moment().format("hh:mm A");
var X = moment().format("X");

console.log(tMinutes);
console.log(tArrival);
console.log(smallTime);
console.log(X);



//add train data

$("#train-table > tbody").append("<tr><td>"+ tName + "<tr><td>" + tDestination + "<tr><td>" + tFrequency + "<tr><td>" + getFreq + "<tr><td>" + "<tr><td>" + tArrival + "<tr><td>" + tMinutes  "<tr><td>");
=======
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

$("#train-table > tbody").append("<tr><td>"+ getUsr "<tr><td>"
+ getTrain + "<tr><td>" + getDest + "<tr><td>" + getFreq "<tr><td>");

>>>>>>> ec59143f74f9ae76974fceee7653f8d34afde16d
});

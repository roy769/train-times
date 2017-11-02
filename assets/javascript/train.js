// Initialize Firebase
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

  //button
  $("#submit").on("click",function(event) {

event.preventDefault();

//grab input

var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val.trim();
var firstTrainUnix = $("#first-train-input").val.trim();
var frequency = $("#frequency-input").val().trim();


//create local files

var newTrain = {
name: trainName,
Destination: destination,
Train:firstTrainUnix,
Frequency: frequency
};

//push dta not set data to database

trainThis.ref().push(newTrain);

//log new stuff

console.log(newTrain.name);
console.log(newTrain.Destination);
console.log(firstTrainUnix);
console.log(newTrain.frequency);

//alert
alert("Train info Updated");

//clear textboxes

$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");

return false;
});
//firebase event for adding to database

trainThis.ref().on("child_added",function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());


//store in a variable

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
});

const nameButton = document.getElementById("nameClick");
const dateButton = document.getElementById("dateButton");
const yearBtn = document.getElementById("yearBtn");
const movieBtn = document.getElementById("movieBtn");

const nameArr = [];

let dateSlot = document.getElementById("dateSlot");
let kindOfDay = document.getElementById("kindOfDay");
let movieName = document.getElementById("movieInput");

var x = new Date();
var myVar = x.toDateString();
var newYear = x.getFullYear();
console.log(newYear);

var is_weekend = function (date1) {
  //   var dt = new Date(date1);
  if (x.getDay() == 6 || x.getDay() == 0) {
    kindOfDay.innerHTML = "Whoo its the weekend!";
  } else {
    kindOfDay.innerHTML = "Boo its a weekday";
  }
};

dateSlot.append(myVar);

nameButton.addEventListener("click", function () {
  let input = document.getElementById("nameInput").value;
  if (nameArr.indexOf(input) > -1) {
    // In the array!
    console.log("no repeats");
    document.getElementById("yourName").innerHTML = "Sorry no repeats";
    return "no repeats";
  } else {
    nameArr.push(input);
  }

  var newListItem = document.createElement("li");
  newListItem.textContent = nameArr[nameArr.length - 1];
  nameSlot = document.getElementById("nameSlot");
  nameSlot.appendChild(newListItem);
  document.getElementById("yourName").innerHTML = "Cool Names:";
  console.log(nameArr);
});

dateButton.addEventListener("click", is_weekend);

yearBtn.addEventListener("click", function () {
  let selectedYear = document.getElementById("birth-year").value;
  console.log(newYear - selectedYear);
  if (newYear - selectedYear > 50) {
    document.getElementById("yearStatement").innerHTML = "Your a dinoasur";
  } else if (newYear - selectedYear > 30) {
    document.getElementById("yearStatement").innerHTML =
      "Your no spring chicken";
  } else {
    document.getElementById("yearStatement").innerHTML = "Ya still a baby";
  }
});

movieBtn.addEventListener("click", function () {
  var movie = document.getElementById("movieInput").value;
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var newListItem = document.createElement("li");
    var newTitleItem = document.createElement("li");
    var newDirectorItem = document.createElement("li");
    console.log(response);

    newListItem.textContent = "Title: " + response.Title;
    newTitleItem.textContent = "Year " + response.Year;
    newDirectorItem.textContent = "Director: " + response.Director;

    movieSlot = document.getElementById("movieSlot");
    movieSlot.appendChild(newListItem);
    movieSlot.appendChild(newTitleItem);
    movieSlot.appendChild(newDirectorItem);
  });
});


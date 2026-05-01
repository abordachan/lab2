const pointButton = document.getElementById("btn-point");
const pointCountDisplay = document.getElementById("point-count");

// Initialize count variable
let pointCount = 0;

// Create an array to represent the point system in tennis
const points = ["Love", 15, 30, 40, "Game"];

// Use event listeners to track button clicks
// Increment count variable and update corresponding display elements on webpage
pointButton.addEventListener("click", () => {
  pointCount = (pointCount + 1) % points.length;
  // Whatever pointCount equals is used as an index to find corresponding element in points array
  pointCountDisplay.innerHTML = points[pointCount];
  // Create an alert when the point count reaches "Love"
  if (pointCountDisplay.innerHTML === "Love") {
    alert("Game, Set, Match!");
  }
});
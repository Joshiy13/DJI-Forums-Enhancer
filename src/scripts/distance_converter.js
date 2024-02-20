// Retrieve distanceUnits from local storage
let distanceUnits = localStorage.getItem("distanceUnits");

// Function to check distanceUnits
function checkDistanceUnits() {
    console.log("distanceUnits is set to:", distanceUnits);
}

// Check distanceUnits initially
checkDistanceUnits();

// Check distanceUnits in an infinite loop with a 5-second delay
setInterval(function() {
    distanceUnits = localStorage.getItem("distanceUnits");
    checkDistanceUnits();
}, 5000);


// Add event listener to "test2" element
document.getElementById("test2").addEventListener("click", function() {
    console.log("test2 was clicked");
    console.log(localStorage.getItem("distanceUnits"));
});

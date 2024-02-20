// Retrieve distanceUnits from local storage
const distanceUnits = localStorage.getItem("distanceUnits");

// Check conditions based on distanceUnits
if (distanceUnits === "kilometers") {
    console.log("Testing1");
}

// Add event listener to "test2" element
document.getElementById("test2").addEventListener("click", function() {
    console.log("test2 was clicked");
    console.log(localStorage.getItem("distanceUnits"));
});

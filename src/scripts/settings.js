// Open the specified tab and hide all others
function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}


// Open the default tab on page load
document.addEventListener("DOMContentLoaded", function () {
    openTab('GeneralSettings'); // Set the default tab here
    // Add event listeners to tab buttons
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function() {
            var tabName = this.getAttribute("data-tab");
            openTab(tabName);
        });
    }
});

//Set the default value of the distance units dropdown
var distanceUnitsDropdown = document.getElementById("distanceUnits");
var savedDistanceUnits = localStorage.getItem("distanceUnits");
if (savedDistanceUnits) {
    distanceUnitsDropdown.value = savedDistanceUnits;
}

//automatically save settings when changed
document.getElementById("distanceUnits").addEventListener("change", function() {
    saveSettings();
});
document.getElementById("fixMistakes").addEventListener("change", function() {
    saveSettings();
});


var fixMistakesCheckbox = document.getElementById("fixMistakes");
var savedFixMistakes = localStorage.getItem("fixMistakes");
if (savedFixMistakes === "true") {
    fixMistakesCheckbox.checked = true;
}

// Save settings to local storage
function saveSettings() {
    var distanceUnits = document.getElementById("distanceUnits").value;
    var fixMistakes = document.getElementById("fixMistakes").checked;

    localStorage.setItem("distanceUnits", distanceUnits);
    localStorage.setItem("fixMistakes", fixMistakes);
}


//Code for debugging can be ignored
document.getElementById("test1").addEventListener("click", function() {
    console.log("test1 was clicked");
    console.log(localStorage.getItem("distanceUnits"));
});

document.getElementById("test2").addEventListener("click", function() {
    console.log("test2 was clicked");
});

document.getElementById("test3").addEventListener("click", function() {
    console.log("test3 was clicked");
});

document.getElementById("distanceUnits").addEventListener("change", function() {
    console.log("distance was changed to " + this.value);
});

document.getElementById("fixMistakes").addEventListener("change", function() {
    console.log("fixMistakes was changed to " + this.checked);
});
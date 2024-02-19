// Open the specified tab and hide all others
function openTab(tabName) {
    var i, tabcontent, tablinks;
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

//when test1 is clicked send a message to console saying test1 was clicked also document.getElementById isnt working
document.getElementById("test1").addEventListener("click", function() {
    console.log("test1 was clicked");
});

document.getElementById("test2").addEventListener("click", function() {
    console.log("test2 was clicked");
});

document.getElementById("test3").addEventListener("click", function() {
    console.log("test3 was clicked");
});
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

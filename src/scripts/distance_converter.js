function putKilometers() {
    // Replace the part of the content that contains "Flight distance:"
    const userEquipmentDivs = document.querySelectorAll("div.user_equipment");
    userEquipmentDivs.forEach(div => {
        const content = div.innerHTML;
        const regex = /Flight distance\s*:\s*(\d+)\s*&nbsp;ft/i; // Regular expression to match "Flight distance : <number> ft"
        const match = regex.exec(content);
        if (match) {
            const feet = parseInt(match[1]);
            const kilometers = feet * 0.3048 / 1000; // Convert feet to kilometers
            const updatedContent = content.replace(regex, `Flight distance: ${kilometers.toFixed(2)} km`);
            // Update the content only if a match was found
            div.innerHTML = updatedContent;
        }
    });
}

// Check distanceUnits initially
putKilometers();

setInterval(function() {
    putKilometers();
}, 5000);


// Add event listener to "test2" element
document.getElementById("test2").addEventListener("click", function() {
console.log("test2 was clicked");
console.log(localStorage.getItem("distanceUnits"));
});
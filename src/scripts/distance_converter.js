

// Function to check distanceUnits
function checkDistanceUnits() {


        // Replace the content of all divs called user_equipment with "test"
        const userEquipmentDivs = document.querySelectorAll("div.user_equipment");
        console.log("dista");
        userEquipmentDivs.forEach(div => {
            div.textContent = "test";
        });
    }


    function putKilometers() {
        let distanceUnit = localStorage.getItem("distanceUnits");
    
        // Replace the part of the content that contains "Flight distance:"
        const userEquipmentDivs = document.querySelectorAll("div.user_equipment");
        userEquipmentDivs.forEach(div => {
            // Check if the div contains "Flight distance:"
            const content = div.innerHTML;
            const regex = /Flight distance\s*:\s*\d+\s*&nbsp;ft/i; // Regular expression to match "Flight distance : <number> ft"
            const updatedContent = content.replace(regex, `Flight distance: ${distanceUnit}&nbsp;ft`);
            // Update the content only if a match was found
            if (updatedContent !== content) {
                div.innerHTML = updatedContent;
            }
        });
    }
    

// Check distanceUnits initially
putKilometers();

// Check distanceUnits in an infinite loop with a 5-second delay
setInterval(function() {
    putKilometers();
}, 5000);


// Add event listener to "test2" element
document.getElementById("test2").addEventListener("click", function() {
    console.log("test2 was clicked");
    console.log(localStorage.getItem("distanceUnits"));
});

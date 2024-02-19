browser.storage.local.get(["km", "mile", "feet", "meter"]).then((result) => {
    const { km, mile, feet, meter } = result;

    // Apply conversions based on user preferences
    if (km) {
        // Apply kilometers conversion
    }

    if (mile) {
        // Apply miles conversion
    }

    if (feet) {
        // Apply feet conversion
    }

    if (meter) {
        // Apply meters conversion
    }
});

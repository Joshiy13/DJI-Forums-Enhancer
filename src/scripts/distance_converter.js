function putKilometers() {
    const userEquipmentDivs = document.querySelectorAll("div.user_equipment");
    userEquipmentDivs.forEach(div => {
        const content = div.innerHTML;
        const regex = /Flight distance\s*:\s*(\d+)\s*&nbsp;ft/i;
        const match = regex.exec(content);
        if (match) {
            const feet = parseInt(match[1]);
            const kilometers = feet * 0.3048 / 1000;
            const updatedContent = content.replace(regex, `Flight distance: ${kilometers.toFixed(2)} km`);
            div.innerHTML = updatedContent;
        }
    });
}

putKilometers();
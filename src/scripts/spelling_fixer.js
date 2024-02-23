
function fixSpelling() {

    // Replace "Point:" with "Points:" in the text content of the document
    const info = document.querySelector('.info');
    if (info) {
        info.innerHTML = info.innerHTML.replace(/Point:/g, 'Points:');
        if (!info.innerHTML.includes('just')) {
            info.innerHTML = info.innerHTML.replace(/just/g, 'Online');
        }
    }

    const navlist = document.querySelector('.navlist');
    navlist.innerHTML = navlist.innerHTML.replace(/PMs/g, 'Private Messages');
    navlist.innerHTML = navlist.innerHTML.replace(/Reminders/g, 'Notifications');


    // Replace "Point" with "Points" in the text content of span with class "home-title"
    const homeTitle = document.querySelector('.home-title');
    if (homeTitle) {
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/Point(?![s:])/g, 'Points');
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/Post(?![s:])/g, 'Posts');
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/Reply(?![s:])/g, 'Replies');
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/PM(?![s:])/g, 'Private Messages');
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/Setting(?![s:])/g, 'Settings');
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/Favorite(?![s:])/g, 'Favorites');
        homeTitle.innerHTML = homeTitle.innerHTML.replace(/Remind(?![s:])/g, 'Notifications');
    }
}


fixSpelling();
browser.browserAction.onClicked.addListener((tab) => {
  // Open the settings window when the toolbar icon is clicked.
  browser.tabs.create({ url: "scripts/settings.html" });
});

// Add listener for pinning the extension to the toolbar.
browser.runtime.onInstalled.addListener(() => {
  browser.browserAction.setBadgeText({ text: "" }); // Clear badge text if any.
  browser.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 0] }); // Clear badge color if any.
  browser.browserAction.setTitle({ title: "DJI Forums Enhancer" }); // Set title of the extension.
});

browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.create({ url: "html/settings.html" });
});


browser.runtime.onInstalled.addListener(() => {
  browser.browserAction.setBadgeText({ text: "" }); // Clear badge text if any.
  browser.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 0] }); // Clear badge color if any.
  browser.browserAction.setTitle({ title: "DJI Forums Enhancer" }); // Set title of the extension.
  localStorage.setItem("distanceUnits", "feet");
});

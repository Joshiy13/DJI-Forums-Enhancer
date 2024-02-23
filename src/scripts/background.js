browser.runtime.onInstalled.addListener(() => {
  browser.browserAction.setBadgeText({ text: "" });
  browser.browserAction.setBadgeBackgroundColor({ color: [0, 0, 0, 0] });
  browser.browserAction.setTitle({ title: "DJI Forums Enhancer" });
});
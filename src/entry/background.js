chrome.runtime.onInstalled.addListener(() => {
  const newURL = "/welcome.html";
  chrome.tabs.create({ url: newURL });
});

chrome.action.onClicked.addListener(() => {
  const newURL = "/newtab.html";
  chrome.tabs.create({ url: newURL });
});

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { redirectUrl: chrome.runtime.getURL("/welcome.html") };
  },
  {
    urls: [chrome.runtime.getURL("/")],
    types: ["main_frame"],
  },
  ["blocking"]
);

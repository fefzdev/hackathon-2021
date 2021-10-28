chrome.runtime.onInstalled.addListener(() => {
  const newURL = "/welcome.html";
  chrome.tabs.create({ url: newURL });
});

chrome.action.onClicked.addListener(() => {
  const newURL = "/newtab.html";
  chrome.tabs.create({ url: newURL });
});

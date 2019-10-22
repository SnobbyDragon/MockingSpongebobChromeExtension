chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "mockingSpongebob",
    title: "Mocking Spongebob",
    type: "normal",
    contexts: ["selection"]
  });
});

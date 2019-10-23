chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "mockingSpongebob",
    title: "Mocking Spongebob",
    type: "normal",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  var output = [];
  for (var i = 0; i < info.selectionText.length; i++) {
    if (i%2 == 0) {
      output.push(info.selectionText.charAt(i).toLowerCase());
    } else {
      output.push(info.selectionText.charAt(i).toUpperCase());
    }
  }
  alert(output.join(""));
});

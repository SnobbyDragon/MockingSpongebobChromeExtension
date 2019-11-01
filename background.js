chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "mockingSpongebob",
    title: "Mocking Spongebob",
    type: "normal",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (!info.selectionText) {
    // alert("Slow down there buckaroo");
    return;
  }
  var output = [];
  // size limit? what about non-alphabetical characters?
  for (var i = 0; i < info.selectionText.length; i++) {
    if (i%2 == 0) {
      output.push(info.selectionText.charAt(i).toLowerCase());
    } else {
      output.push(info.selectionText.charAt(i).toUpperCase());
    }
  }
  // put text on an image and save previous mock
  let mockedText = output.join("");
  // alert(mockedText);
  // chrome.storage.sync.set({"previous": chrome.storage.sync.get("current", function (obj) {
  //   console.log("current moved to previous", obj);
  // })}, function() {
  //   console.log("Updated previous text");
  // });
  chrome.storage.sync.set({"current": mockedText}, function() {
    console.log("Saved current text");
  });
});

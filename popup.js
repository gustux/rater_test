// popup.js

document.body.onload = function() {
  chrome.storage.sync.get("RaterLink", function(url) {
    if (!chrome.runtime.error) {
      document.getElementById("divLink").innerText = url.RaterLink; //update div with RaterLink value.
    }
  });
}

document.getElementById("btSet").onclick = function() {
  var newLink = document.getElementById("tbInput").value;
  chrome.storage.sync.set({ "RaterLink" : newLink }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
}

// background.js

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("https://paste+your+link+here") // Adjust URL as needed where the popup will be triggered
  ) {
    // Delay sending message to ensure content script is ready
    setTimeout(() => {
      chrome.tabs.sendMessage(
        tabId,
        { action: "showPopup" },
        function (response) {
          if (chrome.runtime.lastError) {
            console.error(
              "Error sending message:",
              chrome.runtime.lastError.message
            );
          } else {
            console.log("Message sent to content script");
          }
        }
      );
    }, 200); // Adjust delay time as needed (e.g., 200 milliseconds)
  }
});

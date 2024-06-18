// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "showPopup") {
    createPopup();
  }
});

// Function to create the popup
function createPopup() {
  const existingPopup = document.getElementById("refocus-popup");
  if (existingPopup) return; // Prevent creating multiple popups

  const overlay = document.createElement("div");
  overlay.id = "popup-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    z-index: 9998; /* Behind the popup */
  `;
  document.body.appendChild(overlay);

  const popup = document.createElement("div");
  popup.id = "refocus-popup";
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8); 
    padding: 40px 20px; /* Increase vertical padding */
    border-radius: 10px;
    color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    width: 50%; /* Make the popup larger */
    max-width: 500px;
    text-align: center;
  `;

  const title = document.createElement("h1");
  title.style.color = "white";
  title.textContent = "Please don't waste your life";
  title.style.marginBottom = "50px"; // Add vertical space below the title
  title.style.fontSize = "30px";
  popup.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Refocus and get back to work!";
  paragraph.style.marginBottom = "30px"; // Add vertical space below the paragraph
  paragraph.style.fontSize = "15px";
  popup.appendChild(paragraph);

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-around";
  buttonContainer.style.marginTop = "20px"; // Add vertical space above the buttons
  popup.appendChild(buttonContainer);

  const continueButton = document.createElement("button");
  continueButton.style.cssText = `
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  `;
  continueButton.textContent = "Continue to Site";
  continueButton.addEventListener("click", function () {
    // Remove the popup and overlay
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  });
  buttonContainer.appendChild(continueButton);

  const ignoreButton = document.createElement("button");
  ignoreButton.style.cssText = `
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  `;
  ignoreButton.textContent = "Go to Task list";
  ignoreButton.addEventListener("click", function () {
    window.location.href = "https://chatgpt.com/";
  });
  buttonContainer.appendChild(ignoreButton);

  // Append the popup to the body
  document.body.appendChild(popup);
}

chrome.runtime.onMessage.addListener(function (message) {
  if (message === "showPopup") {
    createPopup();
  }
});

function createPopup() {
  const popup = document.createElement("div");
  popup.id = "refocus-popup";
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #212121; /* Dark background color */
    padding: 20px;
    border-radius: 5px;
    color: white; /* Text color to white for better contrast */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  `;

  const title = document.createElement("h1");
  title.style.color = "blue";
  title.textContent = "Please don't waste your life";
  popup.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Refocus and get back to work!";
  popup.appendChild(paragraph);

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-around";
  popup.appendChild(buttonContainer);

  const continueButton = document.createElement("button");
  continueButton.style.backgroundColor = "blue"; /* Blue button color */
  continueButton.style.color = "white";
  continueButton.textContent = "Continue to Site";
  continueButton.addEventListener("click", function () {
    // Get the current URL (assuming the blocked site is the current tab)
    const currentUrl = window.location.href;
    window.location.href = currentUrl; // Open the current URL in the same tab
  });
  buttonContainer.appendChild(continueButton);

  const ignoreButton = document.createElement("button");
  ignoreButton.style.backgroundColor = "blue"; /* Blue button color */
  ignoreButton.style.color = "white";
  ignoreButton.textContent = "Go to Redirect Link";
  ignoreButton.addEventListener("click", function () {
    // Replace 'your-redirect-link' with your desired URL
    window.location.href = "https://chatgpt.com/";
  });
  buttonContainer.appendChild(ignoreButton);

  document.body.appendChild(popup);
}

chrome.runtime.sendMessage("showPopup");

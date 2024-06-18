---

# Bryan Super Power Extension

## Description

The Bryan Super Power Extension is designed to help users stay focused by prompting them to refocus when visiting distracting websites.

## Features

- **Popup Prompt**: When a user navigates to `https://paste+your+link+here`, a popup is displayed on the page to encourage refocusing and productivity.
- **Customizable Message**: The popup includes a customizable message and buttons to either continue to the site or redirect to a task list.
- **Overlay Effect**: A semi-transparent overlay is added to dim the background, focusing attention on the popup.

## Installation

1. Download or clone the repository.
2. Navigate to `chrome://extensions` in your Chrome browser.
3. Enable **Developer mode** (toggle switch usually located in the top right corner).
4. Click on **Load unpacked** and select the folder containing the extension files.

## Usage

- Once installed, navigate to `https://paste+your+link+here`.
- The extension detects the page load and displays a popup with a message encouraging users to refocus.
- Choose to either continue to the site or redirect to a task list using the buttons provided in the popup.

## Structure

- **`manifest.json`**: Configuration file specifying extension details, permissions, scripts, and icons.
- **`background.js`**: Background script that listens for tab updates and sends messages to the content script.
- **`content.js`**: Content script that listens for messages from the background script and handles popup creation on the YouTube page.
- **`popup.html`**: HTML file (not included in the provided code) referenced as the default popup for the extension.

## Technologies Used

- **JavaScript**: Used for scripting both the background and content scripts.
- **Chrome Extension API**: Leveraged to interact with Chrome browser tabs and runtime environment.

## Troubleshooting

- **Message Port Closed Error**: If encountering issues related to "message port closed", ensure the content script is initialized and ready before messages are sent from the background script. A small delay (e.g., 200 milliseconds) can help synchronize this communication.

## Contributions

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

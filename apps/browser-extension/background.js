/**
 * Background script for the browser extension.
 * Handles extension installation, listens for events, and manages the extension's state and behavior.
 */

import { extractAndSaveAmazon } from './extractAndSaveAmazon.js';

chrome.runtime.onInstalled.addListener(() => {
  setDailyAlarm(); // Set an alarm on installation
});

/**
 * Sets a daily alarm for showing a tracking popup.
 * Uses the frequency value from Chrome storage to determine the alarm interval.
 * Defaults to 1440 minutes (once a day) if frequency is not set.
 */
function setDailyAlarm() {
  chrome.storage.sync.get("frequency", ({ frequency }) => {
    const minutes = parseInt(frequency, 10) || 1440; // Default to 1440 minutes (once a day) if not set 
    chrome.alarms.create("trackingPopup", { periodInMinutes: minutes });
  });
}

// Listen for changes in options and update the alarm accordingly
chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === "frequency") {
      setDailyAlarm(); // Reset the alarm with the new frequency
    }
  }
});

let popupId = null;

/**
 * Shows the tracking popup window.
 * If a popup window is already open, it brings it into focus.
 * Otherwise, it creates a new popup window.
 */
function showTrackingPopup() {
  debugger
  console.log('Time to show the daily popup!');

  let origin = 'https://safe.dfda.earth';  
  //origin = 'https://local.quantimo.do';

  if (popupId !== null) {
    chrome.windows.get(popupId, { populate: true }, (win) => {
      if (chrome.runtime.lastError) {
        // The window was closed or never created. Create it.
        chrome.windows.create({
          url: origin + '/app/public/android_popup.html',
          type: 'popup',
          width: 1,
          height: 1,
          left: 100,
          top: 100,
          focused: false
        }, (win) => {
          popupId = win.id;
        });
      } else {
        // The window exists. Update it.
        chrome.windows.update(popupId, { focused: true });
      }
    });
  } else {
    // No window ID, create a new window.
    chrome.windows.create({
      url: origin + '/app/public/android_popup.html',
      type: 'popup',
      width: 1,
      height: 1,
      left: 100,
      top: 100,
      focused: false
    }, (win) => {
      popupId = win.id;
    });
  }
}

// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showTrackingPopup") {
    showTrackingPopup();
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log("Got an alarm!", alarm);
  if (alarm.name === "trackingPopup") {
    showTrackingPopup();
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get("quantimodoAccessToken", ({ quantimodoAccessToken }) => {
    if (!quantimodoAccessToken) {
      redirectToLogin();
    }
    // Else, proceed with the extension's functionality as the token exists
  });
});

/**
 * Redirects the user to the login page.
 * Queries the currently active tab and opens the login URL in a new tab.
 */
function redirectToLogin() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Handle the case where there are no active tabs
    const loginUrl = `https://safe.dfda.earth/app/public`;
    chrome.tabs.create({ url: loginUrl });

  });  
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the URL contains 'quantimodoAccessToken'
  if (changeInfo.url && changeInfo.url.includes("quantimodoAccessToken")) {
    const url = new URL(changeInfo.url);
    const quantimodoAccessToken = url.searchParams.get("quantimodoAccessToken");
    if (quantimodoAccessToken) {
      chrome.storage.sync.set({ quantimodoAccessToken }, () => {
        console.log("Access token saved:")// quantimodoAccessToken);
        // Optionally, redirect the user to the intended URL or show some UI indication
      });
    }
  }
});

// Whenever you need to make an authenticated request to an API that requires this token, you can retrieve it from storage like so:
chrome.storage.sync.get("quantimodoAccessToken", ({ quantimodoAccessToken }) => {
  if (quantimodoAccessToken) {
    // Use the quantimodoAccessToken for your API requests
    // Example: Authorization: Bearer ${quantimodoAccessToken}
  } else {
    // Handle the case where the token is not available
  }
});

chrome.action.onClicked.addListener((tab) => {
  // Perform the action when the extension button is clicked
  chrome.tabs.create({url: "https://safe.dfda.earth/app/public"});
});

// background.js

// Create a new context menu item.
chrome.contextMenus.create({
  id: "extractAndSaveAmazon", // Add this line
  title: "Extract and Save Product Details",
  contexts: ["page"], // This will show the item when you right click on a page
});

// Listen for click events on your context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "extractAndSaveAmazon") {
    // Inject the script into the current tab
    // chrome.scripting.executeScript({
    //   target: {tabId: tab.id},
    //   function: extractAndSaveAmazon
    // });
    chrome.tabs.create({url: "https://www.amazon.com/gp/css/order-history"});
  }
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "navigate") {
    // Navigate to the specified URL
    chrome.tabs.update({url: request.url});
  }
});

/**
 * Parses a delivery date string into ISO format.
 * @param {string} deliveryDate - The delivery date string to parse.
 * @returns {string} The parsed date in ISO format.
 */
function parseDate(deliveryDate) {
  deliveryDate = deliveryDate.replace(/[^0-9]/g, "Delivered ");
  deliveryDate += ", " + new Date().getFullYear();
  // convert to ISO date
  return new Date(deliveryDate).toISOString();
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("Tab updated:", changeInfo);
  // Check if the updated tab's URL is the Amazon order history page
  if (changeInfo.url && changeInfo.url.startsWith("https://www.amazon.com/gp/css/order-history")) {
    debugger
    console.log("Amazon order history page loaded");
    // Execute the extractAndSaveAmazon function
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: extractAndSaveAmazon
    });
  }
});

/**
 * Retrieves the QuantiModo access token from Chrome storage.
 * @returns {Promise<string>} A promise that resolves to the access token if found, or rejects if not found.
 */
async function getQuantimodoAccessToken() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get("quantimodoAccessToken", ({ quantimodoAccessToken }) => {
      if (quantimodoAccessToken) {
        resolve(quantimodoAccessToken);
      } else {
        reject("Access token not found");
      }
    });
  });
}

/**
 * Checks if the user has a QuantiModo access token stored.
 * @returns {Promise<boolean>} A promise that resolves to true if the token is found, false if not.
 */
function hasAccessToken() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(["quantimodoAccessToken"], ({ quantimodoAccessToken }) => {
      if (quantimodoAccessToken) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

// background.js

// Check if the user has an access token when the extension is loaded
hasAccessToken().then(hasToken => {
  if (!hasToken) {
    redirectToLogin();
  }
});


// Listen for all web requests
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Parse the URL from the details
    const url = new URL(details.url);

    // Check if the URL has the 'quantimodoAccessToken' query parameter
    const quantimodoAccessToken = url.searchParams.get("quantimodoAccessToken");
    if (quantimodoAccessToken) {
      // Save the token to local storage
      chrome.storage.sync.set({ quantimodoAccessToken }, () => {
        console.log("Access token saved:")//, quantimodoAccessToken);
      });
    }
  },
  // filters
  {
    urls: ["https://safe.dfda.earth/*"],
    types: ["main_frame"]
  }
);

let currentUrl = '';
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the updated tab's URL is the reminders inbox page
  if (changeInfo.status === "loading" && changeInfo.url) {
    currentUrl = changeInfo.url;
  }
  //console.log("changeInfo", changeInfo);
  if (changeInfo.status === "complete" &&
    currentUrl &&
    currentUrl.indexOf("https://safe.dfda.earth/app/public/#/app/") > -1) {
    // Execute your function here
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      //console.log("tabs", tabs);
      if(!tabs[0]) {
        console.log("No active tabs. Tabs:", tabs);
        return;
      }
      chrome.tabs.sendMessage(tabs[0].id, {message: "getFdaiLocalStorage", key: "accessToken"}, function(response) {
        if(!response) {
          console.error("No response from getFdaiLocalStorage");
          return;
        }
        //console.log(response.data);
        chrome.storage.sync.set({quantimodoAccessToken: response.data}, function() {
          console.log('Access token saved:')//, response.data);
        });
      });
    });
  }
});


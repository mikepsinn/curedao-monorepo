/** 
 * Popup script for the browser extension.
 * Handles UI interactions in the extension's popup window.
 */

// popup.js
/**
 * Event listener callback function for the DOMContentLoaded event.
 * Retrieves the 'behavior' setting from Chrome storage and performs the corresponding action.
 * If 'behavior' is "direct", it opens the reminders inbox page directly.
 * Otherwise, it sets up a click event listener on the 'recordButton' to open the reminders inbox page.
 */
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get("behavior", ({ behavior }) => {
    if (behavior === "direct") {
      chrome.tabs.create({url: "https://safe.dfda.earth/app/public/#/app/reminders-inbox"});
    } else {
      // Assuming you have a button setup as previously described
      document.getElementById('recordButton').addEventListener('click', function() {
        var redirectUrl = "https://safe.dfda.earth/app/public/#/app/reminders-inbox";
        chrome.tabs.create({url: redirectUrl}, function() {
          window.close(); // Close the popup window
        });
      });
    }
  });

/**
 * Click event listener for the 'amazonBtn' element.
 * Opens the Amazon order history page in a new tab or focuses an existing tab with the same URL.
 */
document.getElementById('amazonBtn').addEventListener('click', function() {
  const url = 'https://www.amazon.com/gp/css/order-history';

  chrome.tabs.query({}, function(tabs) {
    let tabExists = false;

    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].url === url) {
        tabExists = true;
        chrome.tabs.update(tabs[i].id, {active: true, url: url}, function(tab) {
          chrome.tabs.reload(tab.id);
        });
        break;
      }
    }

    if (!tabExists) {
      window.open(url, '_blank');
    }
  });
});

});


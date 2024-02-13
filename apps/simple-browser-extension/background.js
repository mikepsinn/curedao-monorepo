chrome.runtime.onInstalled.addListener(() => {
  setDailyAlarm(); // Set an alarm on installation
});

function setDailyAlarm() {
  chrome.storage.sync.get("frequency", ({ frequency }) => {
    const minutes = parseInt(frequency, 10) || 1440; // Default to 1440 minutes (once a day) if not set
    chrome.alarms.create("dailyPopup", { periodInMinutes: minutes });
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

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log("Got an alarm!", alarm);
  if (alarm.name === "dailyPopup") {
    console.log("Time to show the daily popup!");
    // Open a window instead of creating a notification
    chrome.windows.create({
      url: 'popup.html',
      type: 'popup',
      width: 300,
      height: 200,
      left: 100,
      top: 100
    });
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

function redirectToLogin() {
  //const currentUrl = encodeURIComponent("Your extension's main or current URL here");
  const currentUrl = encodeURIComponent(window.location.href);
  const loginUrl = `https://safe.fdai.earth/login?intended_url=${currentUrl}`;
  chrome.tabs.create({ url: loginUrl });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the URL contains 'quantimodoAccessToken'
  if (changeInfo.url && changeInfo.url.includes("quantimodoAccessToken")) {
    const url = new URL(changeInfo.url);
    const quantimodoAccessToken = url.searchParams.get("quantimodoAccessToken");
    if (quantimodoAccessToken) {
      chrome.storage.sync.set({ quantimodoAccessToken }, () => {
        console.log("Access token saved:", quantimodoAccessToken);
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


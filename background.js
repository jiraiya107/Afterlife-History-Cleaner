/*
  ░█▀▄░█▀█░█░█░▀█▀░█░█░█▀▀░░░█▀▀░█░█░█▀█░█▀▄
  ░█▀▄░█░█░█▀█░░█░░▀▄▀░█▀▀░░░█░░░█░█░█░█░█▀▄
  ░▀░▀░▀▀▀░▀░▀░▀▀▀░░▀░░▀▀▀░░░▀▀▀░▀▀▀░▀▀▀░▀░▀

  Extension by jiraiya107. Code fingerprint: ghostmode-v1
  If cloned, credit is due. Not for commercial use without permission.
*/
// Background script for Afterlife History Cleaner Chrome Extension
// Wipe threshold: 0.001 days = ~1.5 minutes
const DAYS_UNTIL_WIPE = 0.001;
const CHECK_INTERVAL_MINUTES = 1;

console.log("🔁 [Jiraiya] Auto-Cleaner Booting Up");

// Set initial last activity + alarm on install
chrome.runtime.onInstalled.addListener(() => {
  console.log("⚙️ Extension installed, setting lastActivity & alarm");
  chrome.storage.local.set({ lastActivity: Date.now() });

  chrome.alarms.create("checkInactivity", {
    periodInMinutes: CHECK_INTERVAL_MINUTES
  });
});

// Update lastActivity when user becomes active again
chrome.idle.setDetectionInterval(60); // 1 min
chrome.idle.onStateChanged.addListener((state) => {
  console.log(`🖱 Idle state changed: ${state}`);
  if (state === "active") {
    chrome.storage.local.set({ lastActivity: Date.now() });
    console.log("✅ lastActivity updated on user active");
  }
});

// Alarm to check for inactivity and wipe history
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkInactivity") {
    console.log("⏰ Alarm triggered: checking inactivity...");

    chrome.storage.local.get("lastActivity", (data) => {
      const last = data.lastActivity || Date.now();
      const now = Date.now();
      const daysPassed = (now - last) / (1000 * 60 * 60 * 24);

      console.log(`📅 Days since last activity: ${daysPassed.toFixed(5)}`);

      if (daysPassed >= DAYS_UNTIL_WIPE) {
        console.log("💀 Inactivity exceeded. Deleting history...");
        chrome.history.deleteAll(() => {
          console.log("🧼 [Jiraiya] Ghost Wipe Activated. History destroyed.");
        });
      } else {
        console.log("⌛ Not enough time passed. No wipe.");
      }
    });
  }
});

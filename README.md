🧼 Afterlife History Cleaner

A privacy-first Chrome Extension that automatically clears your browsing history after a set period of user inactivity. Built with Manifest V3.

---

💡 About the Project

Afterlife Cleaner is designed for people who want their digital footprint cleaned automatically after they're gone (or just idle too long). Once your device has been inactive for a configurable amount of time (default: 14 days), this extension will silently clear your Chrome browsing history.

Inspired by the idea of disappearing with digital dignity.

---

## 🚀 Features

* 🧠 Tracks user activity using Chrome's idle API
* 🕒 Configurable inactivity threshold (default set to 0.001 days = \~1.5 minutes for demo)
* ⏰ Uses alarms and background service worker to schedule checks
* 🧽 Automatically clears all Chrome browsing history
* 📦 Lightweight and runs silently in background

---

## 🔧 How It Works

1. On installation, it records the current timestamp.
2. When you become active again, it updates your `lastActivity` timestamp.
3. Every minute (or whatever interval is configured), it checks:

   * Has enough time passed since last activity?
   * If yes → clears all browsing history using chrome.history.deleteAll()

---

## 📁 Folder Structure

```
afterlife-cleaner/
├── manifest.json
├── background.js
└── icon.png
```

---

## 🔐 Permissions Used

* `history` – to clear browsing history
* `storage` – to store lastActivity timestamp
* `idle` – to detect when user is inactive
* `alarms` – to schedule periodic checks

---

## 📦 Installation (Developer Mode)

1. Clone or download this repo
2. Go to chrome://extensions
3. Enable "Developer Mode"
4. Click "Load unpacked"
5. Select the `afterlife-cleaner/` folder
6. Done ✅

---

## 📜 License

MIT License

This project is free to use, modify, and distribute. If you use this idea commercially, credit is appreciated.

---

## 👤 Author

Developed by jiraiya107
GitHub: [https://github.com/jiraiya107](https://github.com/jiraiya107)
LINKDIN:-(https://www.linkedin.com/in/dhruv-patel-9712b331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
WEBSITE:- mountaintode.online

Follow my journey and explore more tools and concepts at his GitHub profile.

# stay-awake-render 💢

This is **not a production-ready package** — just a simple and practical tool tailored for my own workflow.

## 🧠 Purpose

* Prevent the Render server from going idle / shutting down
* Log activity locally for debugging and monitoring
* Keep things lightweight and simple

## 📁 Structure

* `main.js` → Entry point
* `logger.js` → Custom logging utility
* `/logs` → Daily log files

## ⚙️ Usage

This package is designed to run on a **local machine**, where it can:

* Send periodic requests (keep-alive)
* Store logs in daily files inside the `/logs` directory
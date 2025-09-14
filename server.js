// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dns from "dns";

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend access

// 🔑 Replace with your Google Safe Browsing API key
const GOOGLE_API_KEY = "AIzaSyDAl6qHyEd5QFxYHhsLCzP5_TzpHPYLjQo";
const API_URL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${GOOGLE_API_KEY}`;

// ✅ URL scanning endpoint
app.post("/scan", async (req, res) => {
  const { url } = req.body;

  const body = {
    client: { clientId: "fraudshield-pro", clientVersion: "1.0" },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }]
    }
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();
    if (result.matches) {
      res.json({ status: "🚨 Malicious", details: result.matches });
    } else {
      res.json({ status: "✅ Safe" });
    }
  } catch (err) {
    res.status(500).json({ error: "Scan failed", details: err.message });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));

function checkDomainExists(url) {
  return new Promise((resolve) => {
    try {
      const hostname = new URL(url).hostname;
      dns.lookup(hostname, (err) => {
        resolve(!err); // true if domain resolves
      });
    } catch {
      resolve(false);
    }
  });
}

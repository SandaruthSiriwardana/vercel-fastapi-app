# vercel-fastapi-app

## A simple FastAPI application deployed on Vercel

```
{
  "builds": [
    {
      "src": "main.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "main.py"
    }
  ]
}
```
## Why Streamlit + Vercel doesn’t work
Streamlit isn’t designed for Vercel serverless functions. Here’s why you’re seeing it:

*   Vercel deploys each Python file as a serverless function, which has a 250 MB unzipped size limit (including dependencies).

*   Streamlit installs a lot of dependencies (e.g., numpy, pandas, tornado), and Vercel tries to package them into a function — which exceeds the limit.

*   Even if it did fit, Vercel kills serverless functions after execution — Streamlit needs a persistent process to run the WebSocket server and UI.

So, unfortunately, Streamlit + Vercel won’t work reliably.


## vercel-static-app (HTML/CSS/JS static site) 
```
{
  "builds": [
    { "src": "index.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```
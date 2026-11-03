# AI Log – Stage 06

## Tool Used
ChatGPT (OpenAI)

## Purpose
To implement data fetching from a mock REST API in the Planner Wellness React application using `fetch` and `useEffect`.

## How I Used AI
I used ChatGPT to:
- Configure `json-server` and create a `db.json` file containing five wellness activities.
- Add an API script to `package.json`.
- Create an `api.js` file with a reusable `fetchActivities()` function.
- Modify `App.jsx` to fetch activities using `useEffect`.
- Implement loading and error states.
- Preserve the existing design, theme toggle, and activity management functionality.

**Relevant prompts and AI responses:**

1. **Prompt:** "How should the scripts section in package.json look?"

   **AI response:** Provided the correct configuration for running Vite and json-server on separate ports.

   **My modifications:** Updated `package.json` and started both servers from the frontend directory.

2. **Prompt:** "Here is my current App.jsx. Help me connect it to the API without changing the existing design."

   **AI response:** Provided an updated component using `useEffect`, `fetchActivities()`, and loading/error states.

   **My modifications:** Integrated the code into the existing application while keeping the Botanical Wellness interface.

3. **Prompt:** "The error message does not appear when I stop the API."

   **AI response:** Suggested checking port 3001 using `netstat` and stopping the remaining server process.

   **My modifications:** Identified the running process, stopped it, and successfully tested the loading and error messages.

## Issues Encountered
The error state was not displayed initially because the mock API server was still running in the background.

I used `netstat` to identify the process listening on port 3001 and `taskkill` to stop it.

After refreshing the application, the loading message appeared, followed by the expected error message.

## Personal Verification
- Confirmed that the API returned five activities.
- Verified that React displayed the activities fetched from the API.
- Confirmed that the loading message appeared.
- Successfully tested the error state by stopping the API server.
- Checked that the original application layout was preserved.

## Reflection
This stage helped me understand how React communicates with an external API and how `useEffect` can be used to fetch data when a component mounts.

I also learned why loading and error states are important and how to troubleshoot a server process that continues running in the background.

## Result
The Planner Wellness application now fetches activities from a mock REST API instead of using a hardcoded initial array.

Loading and error handling have been implemented. Activity changes remain local to React and are not yet persisted to the API.

## AI Conversation Reference
[Add the shared ChatGPT conversation link here]

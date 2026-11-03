# AI Log – Stage 05

## Tool Used
ChatGPT (OpenAI)

## Purpose
I used ChatGPT to help implement local state and event handling in my Planner Wellness application, based on the Stage 5 requirements and the React components developed in Stage 4.

## How I Used AI
I worked through the requirements step by step, using ChatGPT to adapt the existing React components and make the application interactive.

AI helped me with:
- Managing the activities array using `useState`.
- Implementing functions for marking activities as completed and deleting them.
- Passing event handlers between `App.jsx`, `ActivityList.jsx`, and `ActivityCard.jsx` through props.
- Understanding how `map()` and `filter()` allow state updates without modifying the original array.
- Updating the activity counter automatically when the state changes.
- Implementing light and dark mode while preserving the existing design.
- Reviewing the Stage 5 requirements and identifying missing elements.

## Issues Encountered
One of the main challenges was connecting the event handlers correctly between the React components. I used ChatGPT to clarify how functions are passed through props and how changes in the parent component update the displayed activities.

I also needed to preserve the existing Botanical Wellness design while introducing interactive elements and theme switching.

During the final review, I identified that the initial theme did not yet follow the system preference automatically.

## Personal Verification
I reviewed the component structure and checked that the activity list was managed through React state rather than modified directly.

I also checked the implementation of the completion checkbox, delete button, activity counter, and light/dark mode styling.

The browser console, system theme preference, and final GitHub publication still require verification.

## Reflection
AI was useful for understanding React state management, connecting event handlers, and identifying potential implementation issues. I learned how changes in state trigger interface updates and how to keep components reusable through props.

I want to continue improving my ability to implement and debug React functionality independently, using AI mainly for clarification and verification.

## Result
The application now includes interactive activity management using React state, completion and deletion functionality, an automatically updated activity counter, and light/dark mode controls.

The main Stage 5 functionality is implemented, with final testing and documentation updates remaining.

## AI Conversation Reference
The following ChatGPT conversation documents the assistance received during Stage 5, including React state management, event handling, theme implementation, and verification of the project requirements.

[ChatGPT – Stage 5 Development Conversation](https://chatgpt.com/share/e/6ae9d19f-b084-83eb-8920-4458f070c648)
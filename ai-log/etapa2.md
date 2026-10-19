# AI Log – Stage 02

## Tool Used
ChatGPT (OpenAI)

## Purpose
I used ChatGPT to help implement the JavaScript logic for my Planner Wellness application, based on the Stage 2 requirements and the data model defined in Stage 1.

## How I Used AI
I worked through the requirements step by step, using ChatGPT to generate and adapt JavaScript functions to my project.

AI helped me with:
- Creating the activities array based on the README data model.
- Implementing the functions for listing, counting, searching, adding, updating, and deleting activities.
- Understanding JavaScript methods such as `map()`, `filter()`, and `reduce()`, as well as the principle of immutability.
- Organizing console tests into CRUD and validation sections.
- Identifying and fixing errors during implementation.

## Issues Encountered
Initially, my JavaScript file had the `.js.txt` extension, which prevented the browser from loading it. I identified the issue through the `ERR_FILE_NOT_FOUND` message and corrected the file extension.

I also encountered the error `Identifier 'lista' has already been declared`, caused by declaring the same variable twice. I fixed this by removing duplicate declarations and reorganizing the testing code.

## Personal Verification
I manually checked the console output after each implementation step and compared the results with the expected behavior.

I verified the CRUD operations, input validation, and that the original array remained unchanged after adding a new activity.

## Reflection
AI was useful for understanding the requirements, structuring the code, and debugging errors. However, my goal for the next stages is to rely less on AI-generated solutions and focus more on implementing the functions independently, using AI mainly for clarification and troubleshooting.

## Result
The application now includes the basic JavaScript data logic, tested separately from the HTML/CSS interface and ready to be reused in future stages.

## AI Conversation Reference
The following ChatGPT conversation documents the step-by-step implementation of Stage 2, including code generation, debugging, explanations, and verification of the JavaScript functionality.

[ChatGPT – Stage 2 Development Conversation](https://chatgpt.com/share/e/6ad66f0c-0d00-83eb-8d62-598097788a6c)

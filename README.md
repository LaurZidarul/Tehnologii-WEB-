# Tehnologii-WEB-Planner-wellness

Repository utilizat pentru evidenta progresului proiectului personal din cadrul materiei Tehnologii WEB. 

# Planner pentru activități și rutine de wellness

# Descriere

Aplicația este un planner destinat organizării activităților zilnice și a rutinelor de wellness într-un singur loc.

Utilizatorul își poate organiza activități și rutine personale, precum rutina de skincare, administrarea medicamentelor sau suplimentelor, activitatea fizică și alte obiceiuri de îngrijire și organizare personală.

Pe parcursul dezvoltării, aplicația va integra și funcționalități precum remindere, monitorizarea stării de spirit, urmărirea ciclului menstrual și un mood board personal.

Exemple de activități:

- Skincare de seară – Self-care – prioritate medie;
- Administrare vitamine – Sănătate – prioritate ridicată;
- 30 de minute de mișcare – Fitness – prioritate scăzută.

## Data model

| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| name | text | required, max 100 chars |
| completed | boolean | toggled from the list, default false |
| priority | fixed values | Low, Medium, High |
| category | relation | Self-care, Health, Fitness |
| user | relation | the owner of the activity (from week 11) |

Sample data used across all stages:

1. Evening skincare, active, Medium
2. Take daily vitamins, done, High
3. 30-minute workout, active, Low

## How to run

The application is built with React and Vite.

To run the application locally:

cd frontend
npm install
npm run dev

Open the local address displayed in the terminal (usually http://localhost:5173/).

To verify the production build:

npm run build

The original HTML/CSS version from Stage 1 is preserved in the mockup/ folder.

## AI usage

| Tool | Used for |
| -------------- | ----------------------------------------- |
| ChatGPT (OpenAI) | Defining the application theme and data model, drafting the README, and assistance with the Stage 1 HTML and CSS structure |

Details per stage: see the `ai-log/` folder.

## Status

## Stage 1 checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](PERMALINK) | Read the README |
| S1-R2 | AI usage section | [README.md](PERMALINK) | Read AI usage |
| S1-R3 | AI log for Stage 1 | [etapa-01.md](PERMALINK) | Read the AI log |
| S1-R4 | Header, form and 3 cards with own data | [index.html](PERMALINK) | Open the page |
| S1-R5 | Finished card looks different | [style.css](PERMALINK) | Look at the completed card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](PERMALINK) | Resize below 700px |
| S1-R7 | Visible focus and readable dark theme | [style.css](PERMALINK) | Use Tab and dark mode |
| S1-R8 | Stage 1 commit pushed | [Stage 1 commit](LINK-COMMIT) | Check commit history |


## Stage 2 checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](PERMALINK) | Open page, F12 |
| S2-R2 | 3+ activities with id, name, state, priority | [activitati.js](PERMALINK) | Read the array |
| S2-R3 | List, count, search, add, toggle, delete | [activitati.js](PERMALINK) | Check console output |
| S2-R4 | Add rejects empty name and invalid priority | [activitati.js](PERMALINK) | Check validation messages |
| S2-R5 | Original array unchanged after adding | [activitati.js](PERMALINK) | Check original array length |
| S2-R6 | README Stage 2 section and AI log | [README.md](PERMALINK), [etapa-02.md](PERMALINK) | Read documentation |
| S2-R7 | Stage 2 commit pushed | [Stage 2 commit](LINK-COMMIT) | Check commit history |

## Stage 3 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S3-R1 | Vite development server starts without errors | [package.json](frontend/package.json) | Run `npm install` and `npm run dev` |
| S3-R2 | Application name and dynamically calculated counter | [App.jsx](frontend/src/App.jsx) | Change activity data and check the counter |
| S3-R3 | Activity data matches the README | [App.jsx](frontend/src/App.jsx) | Compare the data with the README |
| S3-R4 | Stage 1 CSS styles are reused | [app.css](frontend/src/app.css) | Open the application and check the styling |
| S3-R5 | Dependencies are ignored and the build succeeds | [.gitignore](frontend/.gitignore) | Check Git status and run `npm run build` |
| S3-R6 | README and Stage 3 AI log are completed | [README.md](README.md), [etapa-03.md](ai-log/etapa-03.md) | Read the documentation |
| S3-R7 | Stage 3 commit is published on GitHub | Commit link to be added | Check the commit history |


## Stage 4 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S4-R1 | At least two components in `src/components/` | [components](frontend/src/components/) | Open the folder |
| S4-R2 | Activity card receives data through props | [ActivityCard.jsx](frontend/src/components/ActivityCard.jsx) | Check the component's props |
| S4-R3 | List uses `.map()` and a unique `key`, without React warnings | [ActivityList.jsx](frontend/src/components/ActivityList.jsx) | Open the browser console (F12) |
| S4-R4 | Empty list displays a message | [ActivityList.jsx](frontend/src/components/ActivityList.jsx) | Temporarily replace the activities array with `[]` |
| S4-R5 | Completion status changes the card appearance | [ActivityCard.jsx](frontend/src/components/ActivityCard.jsx) | Change the `completed` value and check the card |
| S4-R6 | README and Stage 4 AI log are completed | [README.md](README.md), [etapa-04.md](ai-log/etapa-04.md) | Read the documentation |
| S4-R7 | Stage 4 commit is published on GitHub | Commit link to be added | Check the commit history |

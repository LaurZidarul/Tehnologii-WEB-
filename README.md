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

Open `index.html` in a browser. No build step, no server.

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

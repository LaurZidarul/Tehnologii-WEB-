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

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

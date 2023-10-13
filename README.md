# Frontend-focused Challenge: An Evernote-inspired UI

```
STACK: React/TypeScript + SCSS + React-testing-library, tried to use Tailwind CSS but version of the create-react-app was too old
TESTS: Enough to showcase what good testing looks like
```
## Getting Started:
`cd api && npm install && npm run serve`

`cd client && npm install && npm start`

API: `http://localhost:3000/api/notes`

### `GET /api/notes`

#### Parameters

| Name   | Type | In    | Description                             |
| :----- | :--- | ----- | --------------------------------------- |
| `from` | Date | query | List notes created after this date only |

### `POST /api/notes`

#### Parameters

| Name   | Type   | In   | Description                           |
| :----- | :----- | ---- | ------------------------------------- |
|  | string | body | **Required.** The content of the note |

## Run Unit Tests:
`cd client && npm test`, after finishing, press `a` to run all tests.

## Error when starting the React app: 
```
Error: error:0308010C:digital envelope routines::unsupported
```
In Bash, run this first: 
```
export NODE_OPTIONS=--openssl-legacy-provider
```

## Overview

This challenge is to implement a small set of UI functionality providing the ability to create and interact with a list of notes.

## Features:

An **_Evernote-inspired_** UI was built:
![image](https://github.com/xiaohan-du/coding-challenge/assets/16627563/ff962407-092f-410b-90a1-19a052a408eb)
which includes the following functionalities:

- The UI provides a list of notes currently in the system
- The UI lists notes created within the last 6 months only by default
- The UI offers a toggle button to switch between displaying all notes or only those from the last 6 months.
- The UI allows users to create a new note. Clicking the "New Note" button opens a modal.
- The UI provides validation and feedback for the following when creating a new note:
  - A message if the note is empty: "Please enter a valid note of less than 500 characters."
  - User input automatically stops if the note exceeds 500 characters.
- The UI provides sticky buttons, so when users scroll down, the "New Note" and toggle buttons remain accessible. This provides a better user experience.
- The UI is responsive and works across all screen widths.

## Project Architecture :

```
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Note
│   │   │   │   ├── __tests__
│   │   │   │   │   ├── incomingProps
│   │   │   │   │   │   └── NoteProps.ts
│   │   │   │   │   └── Note.test.tsx
│   │   │   │   ├── Note.tsx
│   │   │   │   └── Note.module.scss
│   │   │   └── ...
│   │   ├── interfaces
│   │   │   ├── INoteProps.ts
│   │   │   └── ...
│   │   ├── App.scss
│   │   ├── App.tsx
│   │   ├── useAppState.ts
│   │   ├── color.scss
│   │   ├── mixins.scss
│   │   ├── index.scss
│   │   ├── index.tsx
│   │   └── ...
│   ├── ...
│   └── package.json
└── 
```

### Key Principles:

- `App.tsx` is the main page that calls components.
  - It relies on `useAppState.ts` to interact with the API and manage states.
  - `useAppState.ts` stores all functions and props
- Components are organized in the components folder. Each component consists of:
  - A `.tsx` file for rendering the UI.
  - A `.module.scss` file for storing styles.
  - A `__tests__` folder for unit tests.
- In the `__tests__` folder, there is
  - A `.test.tsx` file to run unit tests.
  - An `incomingProps` folder to store mock props if necessary.
- An `interfaces` folder is used to store and export all interfaces for use in components and pages.
- The SCSS follows the [BEM](https://getbem.com/) methodology.
 
### Features:
- Data and UI are separated. Data is only processed in `useAppState.ts`, UI is only rendered in component `.tsx` file
- This makes UI rendering faster and unit testing easier
- No more messy states in components

## Possible improvements
- A fancier UI?
- New note could be fetched without clicking th toggle button.

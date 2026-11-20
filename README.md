

# Hooks Toolkit

A React project demonstrating eight reusable custom Hooks through simple, interactive examples.

## Project Overview

Hooks Toolkit is a learning project built with React and Vite. It demonstrates how custom Hooks help organize and reuse stateful logic across React components.

Each Hook has its own file and a dedicated demo component where its functionality can be tested.

## Features

This project demonstrates eight custom Hooks:

1. **useToggle** – Toggles a value between `true` and `false`.
2. **useDebounce** – Delays updating a value until the user stops typing.
3. **useDocumentTitle** – Updates the browser tab title dynamically.
4. **useLocalStorage** – Saves and restores data using browser local storage.
5. **useWindowSize** – Tracks the browser window's width and height.
6. **useOnlineStatus** – Detects whether the browser is online or offline.
7. **useKeyPress** – Detects when a specific keyboard key is pressed or released.
8. **useClickOutside** – Detects clicks outside a specified element.

## Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS
- HTML5
- CSS3

## Project Structure

```text
src/
├── components/
│   ├── ToggleDemo.jsx
│   ├── DebounceDemo.jsx
│   ├── DocumentTitleDemo.jsx
│   ├── LocalStorageDemo.jsx
│   ├── WindowSizeDemo.jsx
│   ├── OnlineStatusDemo.jsx
│   ├── KeyPressDemo.jsx
│   └── ClickOutsideDemo.jsx
│
├── hooks/
│   ├── useToggle.js
│   ├── useDebounce.js
│   ├── useDocumentTitle.js
│   ├── useLocalStorage.js
│   ├── useWindowSize.js
│   ├── useOnlineStatus.js
│   ├── useKeyPress.js
│   └── useClickOutside.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd hooks-toolkit
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Learning Objectives

Through this project, I practiced:

- Creating and using reusable custom Hooks.
- Managing component state with `useState`.
- Handling side effects with `useEffect`.
- Working with browser events and APIs.
- Using cleanup functions to remove event listeners and clear timers.
- Persisting information with local storage.
- Managing dependencies in React Effects.
- Separating reusable logic from UI components.

## Author

**Ritha IRAGENA**

Built as part of my React learning journey at SheCanCode.


<div align="center">

# ⚛️ React Learning Lab

### React 19 • JavaScript • Interactive Components • Mini Projects

A collection of hands-on React exercises, interactive components, and mini-projects developed to explore modern React fundamentals, state management, Hooks, component architecture, asynchronous operations, and frontend development.

<br />

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

<br />

[![React DOM](https://img.shields.io/badge/React_DOM-19.2.6-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-10.3.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![npm](https://img.shields.io/badge/npm-Package_Manager-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/)

<br />

![Learning](https://img.shields.io/badge/Project-Learning_&_Practice-blue?style=flat-square)
![Frontend](https://img.shields.io/badge/Type-Frontend_Only-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Ongoing-orange?style=flat-square)

<br />

**Learn React by Building, Experimenting, and Solving Problems.**

<br />

[Overview](#-overview) •
[Projects](#-featured-mini-projects) •
[Learning](#-what-ive-learned) •
[Tech Stack](#-technology-stack) •
[Structure](#-project-structure) •
[Installation](#-getting-started) •
[Roadmap](#-learning-roadmap)

</div>

---

# 📖 Overview

**React Learning Lab** is a personal learning repository containing practical exercises and interactive mini-projects built while studying React and modern JavaScript.

Instead of focusing on a single application, this repository serves as a collection of small, independent implementations covering different React concepts.

The exercises progress from basic component creation and JSX syntax to more advanced topics such as state management, asynchronous operations, DOM references, side effects, and game algorithms.

### 🎯 Learning Objectives

- Understand React's component-based architecture.
- Develop reusable and composable UI components.
- Learn JSX syntax and dynamic rendering.
- Manage application state with React Hooks.
- Understand how props and events work.
- Handle user input and form submissions.
- Render dynamic lists and conditional content.
- Update arrays and nested objects immutably.
- Manage complex state using reducers.
- Work with asynchronous JavaScript and external APIs.
- Synchronize React components with browser APIs.
- Build interactive games and animations.
- Improve JavaScript problem-solving skills.

> [!NOTE]
> This is an educational repository. Components are intentionally implemented as separate exercises and rendered together for experimentation.

---

# 🌟 Featured Mini Projects

## 🎮 1. Tic-Tac-Toe — Two Players

**Source:** [`Caro.jsx`](my-react-app/src/Caro.jsx)

A two-player Tic-Tac-Toe game demonstrating React state management, component communication, and game logic.

### Features

- Interactive 3×3 game board.
- Alternating X and O turns.
- Winner detection.
- Move validation.
- Game history tracking.
- Time-travel functionality.
- Restart game functionality.

### React Concepts

`useState` · Props · Event Handling · Array Immutability · Conditional Rendering

### Component Architecture

```text
Game
 │
 ├── Board
 │    │
 │    └── Square × 9
 │
 ├── Game Status
 │
 ├── Move History
 │
 └── Reset Button
```

### Learning Highlights

The game stores each board state in an array:

```jsx
const [history, setHistory] = useState([
  Array(9).fill(null)
]);

const [currentMove, setCurrentMove] = useState(0);
```

The history mechanism supports navigation between previous moves.

```jsx
function jumpTo(nextMove) {
  setCurrentMove(nextMove);
}
```

This exercise demonstrates how React state can represent both the current UI and historical application data.

---

## 🤖 2. Tic-Tac-Toe vs AI Bot

**Source:** [`CaroWithBot.jsx`](my-react-app/src/CaroWithBot.jsx)

An interactive Tic-Tac-Toe game featuring a computer-controlled opponent with two difficulty levels.

### Features

- Player versus computer.
- Easy and Hard difficulty modes.
- Random-move AI.
- Minimax-based AI.
- Winner and draw detection.
- Simulated bot thinking delay.
- Restart functionality.
- Responsive board styling.

### Difficulty Modes

| Mode | Algorithm | Behavior |
|---|---|---|
| ⚡ Easy | Random Selection | Chooses an available square randomly |
| 🧠 Hard | Minimax | Evaluates possible future moves and chooses an optimal move |

### Minimax Algorithm

The Hard AI evaluates possible game outcomes recursively.

```text
Current Board
     │
     ▼
Generate Possible Moves
     │
     ▼
Simulate Bot Move
     │
     ▼
Simulate Player Response
     │
     ▼
Evaluate Game Outcome
     │
     ├── Bot Wins    → Positive Score
     │
     ├── Player Wins → Negative Score
     │
     └── Draw        → Zero
     │
     ▼
Choose Best Move
```

### Evaluation Logic

```javascript
if (winner === 'O') return 10 - depth;

if (winner === 'X') return depth - 10;

if (isBoardFull(squares)) return 0;
```

The implementation uses:

- Recursive search.
- Maximizing and minimizing players.
- Depth-based scoring.
- Immutable board copies.
- Win/loss/draw evaluation.

### React Concepts

`useState` · `useEffect` · Derived State · Timer Cleanup · Event Handling

### Algorithms Practiced

`Minimax` · Recursion · Game Trees · Decision Making

> [!TIP]
> Minimax is a foundational algorithm used in turn-based game AI and adversarial search.

---

## ✅ 3. Task Management with useReducer

**Sources:**

- [`CRUDList.jsx`](my-react-app/src/CRUDList.jsx)
- [`AddTask.jsx`](my-react-app/src/AddTask.jsx)
- [`TaskList.jsx`](my-react-app/src/TaskList.jsx)

A task management exercise demonstrating how to handle multiple state transitions using React's `useReducer` Hook.

### Features

- Add tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Manage task state through reducer actions.

### Reducer Actions

| Action | Description |
|---|---|
| `added` | Create a task |
| `changed` | Update task information |
| `deleted` | Remove a task |

### Architecture

```text
CRUDList
   │
   ├── useReducer
   │      │
   │      └── tasksReducer
   │              │
   │              ├── added
   │              ├── changed
   │              └── deleted
   │
   ├── AddTask
   │
   └── TaskList
          │
          └── Task
```

### Reducer Example

```jsx
const [tasks, dispatch] = useReducer(
  tasksReducer,
  initialTasks
);
```

Dispatching an action:

```javascript
dispatch({
  type: 'added',
  id: nextId++,
  text: text
});
```

This project demonstrates how reducers centralize state transitions and separate update logic from UI components.

---

## ❄️ 4. Interactive Snowflake Cursor

**Source:** [`ObjectFollowCursor.jsx`](my-react-app/src/ObjectFollowCursor.jsx)

**Styles:** [`ObjectFollowCursor.css`](my-react-app/src/ObjectFollowCursor.css)

An animated winter-themed interface where snowflakes follow the user's cursor.

### Features

- Cursor position tracking.
- Dynamic snowflake generation.
- Randomized particle properties.
- CSS animations.
- Enable/disable snow effect.
- Automatic particle cleanup.
- Animated snowflake rotation.

### React Concepts

`useState` · `useEffect` · `useRef` · Pointer Events · Dynamic Lists

### JavaScript Concepts

- `Math.random()`
- `Date.now()`
- `Array.from()`
- `setInterval()`
- Array filtering
- Unique identifiers

### Particle Lifecycle

```text
Pointer Movement
       │
       ▼
Read Cursor Coordinates
       │
       ▼
Generate Snowflakes
       │
       ▼
Update React State
       │
       ▼
Render Animated Elements
       │
       ▼
CSS Animation
       │
       ▼
Remove Expired Particles
```

The implementation also includes a form for practicing updates to object properties stored in React state.

---

## ⏱️ 5. Stopwatch

**Source:** [`Stopwatch.jsx`](my-react-app/src/Stopwatch.jsx)

A stopwatch exercise using React state and references.

### Features

- Start timer.
- Stop timer.
- Display elapsed seconds.
- Millisecond-level display precision.

### React Concepts

`useState` · `useRef` · Event Handling

### Implementation

```jsx
const [time, setTime] = useState(null);
const [now, setNow] = useState(null);

const intervalRef = useRef(null);
```

The interval identifier is stored in a ref:

```javascript
intervalRef.current = setInterval(() => {
  setNow(Date.now());
}, 10);
```

This demonstrates why refs are useful for storing mutable values that do not need to trigger rendering.

---

## 🎬 6. Video Player

**Source:** [`VideoPlayer.jsx`](my-react-app/src/VideoPlayer.jsx)

An interactive video player controlled through React state.

### Features

- Play video.
- Pause video.
- Synchronize playback with React state.
- Control native HTML video elements.

### React Concepts

`useState` · `useRef` · `useEffect`

### Example

```jsx
useEffect(() => {
  if (isPlaying) {
    ref.current.play();
  } else {
    ref.current.pause();
  }
}, [isPlaying]);
```

This exercise demonstrates synchronization between React state and an external browser API.

---

## 🐶 7. Image Navigation with useRef

**Source:** [`Dogs.jsx`](my-react-app/src/Dogs.jsx)

An interactive dog image gallery demonstrating programmatic scrolling.

### Features

- Navigation buttons for individual images.
- Smooth horizontal scrolling.
- DOM element references.
- Scroll alignment.

### React Concepts

`useRef` · Event Handling · DOM Manipulation

### Example

```jsx
const firstDogRef = useRef(null);

function handleScrollFirstDog() {
  firstDogRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });
}
```

This illustrates how React refs can provide controlled access to DOM elements.

---

## 🌍 8. Nested Travel Plan

**Sources:**

- [`NestedCity.jsx`](my-react-app/src/NestedCity.jsx)
- [`places.js`](my-react-app/src/places.js)

A recursive tree-rendering exercise using normalized hierarchical data.

### Features

- Display nested locations.
- Render recursive components.
- Remove completed locations.
- Update parent-child relationships.

### Data Structure

```text
Travel Plan
│
├── Earth
│   ├── Africa
│   ├── Americas
│   ├── Asia
│   ├── Europe
│   └── Oceania
│
├── Moon
│   ├── Rheita
│   ├── Piccolomini
│   └── Tycho
│
└── Mars
    ├── Corn Town
    └── Green Hill
```

### React Concepts

`useState` · Recursive Components · Props · Immutable Updates

### Important Learning

Instead of storing deeply nested objects, the project stores locations by ID:

```javascript
{
  0: {
    id: 0,
    title: '(Root)',
    childIds: [1, 42, 46]
  }
}
```

This structure simplifies updates to hierarchical data.

---

## 🧠 9. Interactive Quiz

**Source:** [`FastQuiz.jsx`](my-react-app/src/FastQuiz.jsx)

A form-based quiz demonstrating asynchronous operations and state-driven UI.

### Features

- Controlled textarea.
- Asynchronous form submission.
- Loading/submitting state.
- Input validation.
- Success feedback.
- Error handling.

### State Model

```text
Typing
   │
   ▼
Submitting
   │
   ├── Correct Answer
   │       │
   │       ▼
   │     Success
   │
   └── Incorrect Answer
           │
           ▼
         Error
           │
           ▼
         Typing
```

### React Concepts

`useState` · Controlled Inputs · Conditional Rendering

### JavaScript Concepts

`async/await` · Promises · `try/catch` · `setTimeout`

---

## ⚽ 10. Football Player Gallery

**Sources:**

- [`RenderList.jsx`](my-react-app/src/RenderList.jsx)
- [`Footballers.jsx`](my-react-app/src/Footballers.jsx)
- [`Utils.jsx`](my-react-app/src/Utils.jsx)

A dynamically rendered football player gallery that loads player images from an external API.

### Features

- Render player information.
- Fetch player avatars asynchronously.
- Display player cards.
- Handle failed API requests.
- Clean up asynchronous effects.

### External API

[TheSportsDB](https://www.thesportsdb.com/)

### API Example

```javascript
const response = await fetch(
  `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`
);
```

### React Concepts

`useState` · `useEffect` · List Rendering

### JavaScript Concepts

`fetch()` · `async/await` · JSON Parsing · Optional Chaining

---

# 📚 What I've Learned

This repository documents my progress learning React through practical implementation.

Rather than only studying theoretical concepts, I applied them by building interactive components and small applications.

## 1. ⚛️ React Fundamentals

| Topic | What I Practiced | Source |
|---|---|---|
| React Components | Creating reusable functional components | `App.jsx`, `GoodJob.jsx` |
| JSX | Writing HTML-like syntax inside JavaScript | `App.jsx` |
| JSX Expressions | Embedding JavaScript expressions with `{}` | `CurlyBraces.jsx` |
| Import / Export | Reusing components across files | `main.jsx`, `Profile.jsx` |
| Component Composition | Combining smaller components | `PropInComponent.jsx` |
| Props | Passing data between components | `PropInComponent.jsx` |
| Children Props | Passing JSX through `children` | `PropInComponent.jsx` |
| Conditional Rendering | Rendering UI based on conditions | `ConditionalRendering.jsx` |
| List Rendering | Rendering arrays with `.map()` | `ShoppingList.jsx` |
| React Keys | Assigning stable identities to list elements | `RenderingList.jsx` |

### Key Takeaways

- React interfaces are composed of reusable components.
- JSX combines JavaScript expressions with declarative UI.
- Props allow parent components to communicate with children.
- Components should remain reusable and focused on specific responsibilities.
- Lists should use stable keys.
- Rendering should describe the UI based on current data.

---

## 2. 🎣 React Hooks

### Hooks Used in This Repository

| Hook | Purpose | Practice Files |
|---|---|---|
| `useState` | Manage reactive component state | `Counter.jsx`, `Caro.jsx` |
| `useEffect` | Synchronize with external systems | `VideoPlayer.jsx`, `PropChanging.jsx` |
| `useRef` | Store references and mutable values | `Dogs.jsx`, `Stopwatch.jsx` |
| `useReducer` | Manage complex state transitions | `CRUDList.jsx` |

### useState

Practiced:

- Primitive state values.
- Object state.
- Array state.
- Controlled form inputs.
- Derived values.
- Shared state between components.

Example:

```jsx
const [count, setCount] = useState(0);
```

Related exercises:

```text
Counter.jsx
ChooseElement.jsx
UpdateArr.jsx
UpdatingObjects.jsx
Caro.jsx
```

### useEffect

Practiced:

- Synchronizing with browser APIs.
- Running intervals.
- Handling asynchronous operations.
- Cleaning up timers.
- Managing effect dependencies.

Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

Related exercises:

```text
PropChanging.jsx
VideoPlayer.jsx
RenderList.jsx
CaroWithBot.jsx
```

### useRef

Practiced:

- Referencing DOM elements.
- Storing timer IDs.
- Managing mutable values without rerendering.
- Programmatic scrolling.
- Controlling video elements.

Related exercises:

```text
Dogs.jsx
Stopwatch.jsx
VideoPlayer.jsx
ObjectFollowCursor.jsx
```

### useReducer

Practiced:

- Reducer functions.
- Action objects.
- Dispatching actions.
- Centralized state transitions.
- Immutable updates.

Related exercise:

```text
CRUDList.jsx
```

---

## 3. 🔄 State Management

| Concept | Example |
|---|---|
| Updating primitive state | `Counter.jsx` |
| Updating object properties | `UpdatingObjects.jsx` |
| Updating nested objects | `UpdatingObjects.jsx` |
| Updating arrays | `UpdateArr.jsx` |
| Adding/removing array elements | `UpdateArr.jsx` |
| Selecting items by ID | `ChooseElement.jsx` |
| Avoiding duplicate state | `ChooseElement.jsx` |
| Normalizing nested data | `NestedCity.jsx` |
| Managing state with reducers | `CRUDList.jsx` |
| Lifting state to parent components | `Counter.jsx`, `Caro.jsx` |

### Important Principles

**State should be treated as immutable.**

Instead of directly modifying objects:

```javascript
person.name = 'New Name';
```

Create a new object:

```javascript
setPerson({
  ...person,
  name: 'New Name'
});
```

For arrays:

```javascript
setArr([
  ...arr,
  newItem
]);
```

Remove items:

```javascript
setArr(
  arr.filter(item => item.id !== targetId)
);
```

Update items:

```javascript
setArr(
  arr.map(item =>
    item.id === targetId
      ? { ...item, name: 'Updated' }
      : item
  )
);
```

---

## 4. 🖱️ Events & User Interaction

| Concept | Source |
|---|---|
| Button click events | `ClickMe.jsx` |
| Form submission | `ClickMe.jsx` |
| Preventing default behavior | `ClickMe.jsx` |
| Input change events | `ColorAndTime.jsx` |
| Passing event handlers through props | `Interactivities.jsx` |
| Pointer movement | `ObjectFollowCursor.jsx` |
| Conditional button disabling | `CaroWithBot.jsx` |
| Component communication through callbacks | `CRUDList.jsx` |

### Example

```jsx
function handleClick() {
  setCount(count + 1);
}

return (
  <button onClick={handleClick}>
    Clicked {count} times
  </button>
);
```

---

## 5. 📝 Forms & Controlled Inputs

Practiced:

- Controlled text inputs.
- Controlled textarea.
- Controlled select elements.
- Controlled checkboxes.
- Form submission.
- Input validation.
- Updating state from form events.
- Displaying form errors.

Related files:

```text
AddTask.jsx
TaskList.jsx
FastQuiz.jsx
ColorAndTime.jsx
UpdatingObjects.jsx
```

---

## 6. 📋 Rendering & Component Composition

Practiced:

- Conditional rendering using `if`.
- Conditional rendering using `&&`.
- Conditional rendering using ternary operators.
- Rendering dynamic lists with `.map()`.
- Using React fragments.
- Passing JSX as children.
- Building recursive components.
- Extracting reusable child components.

Related files:

```text
ConditionalRendering.jsx
ShoppingList.jsx
RenderingList.jsx
PropInComponent.jsx
NestedCity.jsx
```

---

## 7. 🌐 Asynchronous JavaScript

| Topic | Practice |
|---|---|
| Promises | `FastQuiz.jsx` |
| async/await | `FastQuiz.jsx`, `Utils.jsx` |
| Error handling | `FastQuiz.jsx`, `Utils.jsx` |
| Fetch API | `Utils.jsx` |
| JSON parsing | `Utils.jsx` |
| Async effect cleanup | `RenderList.jsx` |
| Timer-based asynchronous behavior | `CaroWithBot.jsx` |

### Example

```javascript
async function loadData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Request failed');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
```

---

## 8. 🧠 Algorithms & Data Structures

| Concept | Implementation |
|---|---|
| Minimax Algorithm | `CaroWithBot.jsx` |
| Recursion | `CaroWithBot.jsx`, `NestedCity.jsx` |
| Game Tree Exploration | `CaroWithBot.jsx` |
| Winner Detection | `Caro.jsx` |
| Array Operations | `UpdateArr.jsx`, `CRUDList.jsx` |
| Tree Structures | `NestedCity.jsx` |
| Normalized Object Structures | `places.js` |
| Searching Arrays | `ChooseElement.jsx` |
| Filtering Arrays | `CRUDList.jsx` |
| Mapping Arrays | `ShoppingList.jsx` |

### Most Advanced Algorithm

**Minimax — Tic-Tac-Toe AI**

```text
                  Current Board
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Move 1       Move 2       Move 3
          │            │            │
          ▼            ▼            ▼
      Evaluate      Evaluate      Evaluate
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
                 Best Decision
```

This implementation helped practice recursive reasoning and evaluating competing outcomes.

---

## 9. 🎨 CSS & Styling

Practiced:

- External CSS files.
- Inline JSX styles.
- Dynamic styles.
- CSS variables.
- Flexbox layouts.
- Responsive media queries.
- Hover and active states.
- CSS transitions.
- CSS animations.
- Gradient backgrounds.
- Scroll snapping.
- Dark-mode media queries.

Related files:

```text
App.css
index.css
Caro.css
CaroWithBot.css
ObjectFollowCursor.css
Dogs.css
profile.css
card.css
```

### Example: Dynamic Styling

```jsx
<p style={{ color: color }}>
  Dynamic text color
</p>
```

### Example: CSS Animation

```css
@keyframes cursorRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

---

## 10. 🛠️ Development Tools

| Tool | What I Practiced |
|---|---|
| Vite | Creating and running React projects |
| npm | Dependency and script management |
| ESLint | Static code analysis |
| React Fast Refresh | Updating React components during development |
| Git | Version control |
| GitHub | Repository management |
| Browser DevTools | Inspecting UI and debugging |
| JavaScript ES Modules | Importing and exporting modules |

---

# 🧰 Technology Stack

## Core Technologies

| Technology | Version | Purpose |
|---|---|---|
| React | `^19.2.6` | UI development |
| React DOM | `^19.2.6` | Browser rendering |
| JavaScript | ES6+ | Application logic |
| JSX | — | React component syntax |
| CSS3 | — | UI styling |
| HTML5 | — | Application entry document |

---

## Build Tools & Development Dependencies

| Package | Version | Purpose |
|---|---|---|
| Vite | `^8.0.12` | Build tool and development server |
| @vitejs/plugin-react | `^6.0.1` | React integration with Vite |
| ESLint | `^10.3.0` | JavaScript linting |
| @eslint/js | `^10.0.1` | ESLint JavaScript rules |
| eslint-plugin-react-hooks | `^7.1.1` | React Hooks lint rules |
| eslint-plugin-react-refresh | `^0.5.2` | React Fast Refresh lint rules |
| globals | `^17.6.0` | Global variable definitions |
| @types/react | `^19.2.14` | React type definitions |
| @types/react-dom | `^19.2.3` | React DOM type definitions |

> Package versions are taken directly from `my-react-app/package.json`. The `^` symbol allows compatible updates, so installed versions may differ depending on the lockfile.

---

# 🏗️ Application Architecture

```text
┌────────────────────────────────────────────┐
│                 Browser                    │
└────────────────────┬───────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────┐
│                React DOM                   │
│                                            │
│              createRoot()                  │
└────────────────────┬───────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────┐
│                 main.jsx                   │
│                                            │
│              React StrictMode              │
└────────────────────┬───────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────┐
│             React Components               │
│                                            │
│  ┌───────────┐  ┌───────────┐               │
│  │   Games   │  │   Forms   │               │
│  └───────────┘  └───────────┘               │
│                                            │
│  ┌───────────┐  ┌───────────┐               │
│  │  Hooks    │  │  Lists    │               │
│  └───────────┘  └───────────┘               │
│                                            │
│  ┌───────────┐  ┌───────────┐               │
│  │Animation  │  │  Media    │               │
│  └───────────┘  └───────────┘               │
└────────────────────────────────────────────┘
```

The project is a client-side React application.

No custom backend server or database is required.

The football player gallery communicates directly with an external API using the browser Fetch API.

---

# 📂 Project Structure

```text
dzt711-react/
│
├── README.md
│
└── my-react-app/
    │
    ├── README.md
    ├── package.json
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    │
    └── src/
        │
        ├── main.jsx
        ├── App.jsx
        ├── App.css
        ├── index.css
        │
        ├── AddTask.jsx
        ├── TaskList.jsx
        ├── CRUDList.jsx
        │
        ├── Caro.jsx
        ├── Caro.css
        ├── CaroWithBot.jsx
        ├── CaroWithBot.css
        │
        ├── Counter.jsx
        ├── Stopwatch.jsx
        │
        ├── ClickMe.jsx
        ├── FastQuiz.jsx
        ├── ChooseElement.jsx
        │
        ├── UpdatingObjects.jsx
        ├── UpdateArr.jsx
        ├── NestedCity.jsx
        ├── places.js
        │
        ├── Profile.jsx
        ├── profile.css
        ├── PropInComponent.jsx
        ├── PropChanging.jsx
        ├── ColorAndTime.jsx
        │
        ├── ConditionalRendering.jsx
        ├── RenderingList.jsx
        ├── RenderList.jsx
        ├── ShoppingList.jsx
        ├── Todos.jsx
        │
        ├── Footballers.jsx
        ├── Utils.jsx
        ├── ImgData.jsx
        ├── Interactivities.jsx
        │
        ├── Dogs.jsx
        ├── Dogs.css
        ├── VideoPlayer.jsx
        │
        ├── ObjectFollowCursor.jsx
        ├── ObjectFollowCursor.css
        │
        ├── CSSList.jsx
        ├── CSSPortfolio.jsx
        ├── card.css
        │
        ├── CurlyBraces.jsx
        ├── GetDate.jsx
        └── GoodJob.jsx
```

---

# 📋 Complete Exercise Index

This section provides a quick reference for the learning exercises included in the repository.

| File | Main Topic |
|---|---|
| `App.jsx` | Basic React components |
| `Profile.jsx` | Components, images, JSX |
| `GoodJob.jsx` | Component composition |
| `CurlyBraces.jsx` | JavaScript expressions in JSX |
| `GetDate.jsx` | JavaScript Date API |
| `PropInComponent.jsx` | Props and children |
| `PropChanging.jsx` | Props, state and effects |
| `ColorAndTime.jsx` | Controlled select and dynamic props |
| `ConditionalRendering.jsx` | Conditional UI |
| `ShoppingList.jsx` | Rendering lists |
| `RenderingList.jsx` | Dynamic component generation |
| `RenderList.jsx` | Async data and list rendering |
| `Footballers.jsx` | Data arrays |
| `Utils.jsx` | Fetch API and utilities |
| `Todos.jsx` | Conditional rendering |
| `Counter.jsx` | State and event handling |
| `ClickMe.jsx` | Events and forms |
| `Interactivities.jsx` | Event handler props and gallery |
| `UpdatingObjects.jsx` | Immutable object updates |
| `UpdateArr.jsx` | Immutable array updates |
| `ChooseElement.jsx` | Derived state and selection |
| `NestedCity.jsx` | Recursive trees and normalized state |
| `places.js` | Hierarchical data |
| `AddTask.jsx` | Controlled input |
| `TaskList.jsx` | Task components |
| `CRUDList.jsx` | useReducer and CRUD operations |
| `FastQuiz.jsx` | Async forms and state |
| `Caro.jsx` | Game state and history |
| `CaroWithBot.jsx` | Minimax AI |
| `Stopwatch.jsx` | useRef and intervals |
| `VideoPlayer.jsx` | DOM synchronization |
| `Dogs.jsx` | DOM refs and scrolling |
| `ObjectFollowCursor.jsx` | Pointer tracking and animations |
| `CSSList.jsx` | Inline styling |
| `CSSPortfolio.jsx` | Object-based styling |
| `ImgData.jsx` | Structured gallery data |

---

# 🚀 Getting Started

## Prerequisites

You need Node.js and npm installed.

Recommended environment:

| Tool | Requirement |
|---|---|
| Node.js | Version compatible with Vite 8 |
| npm | Version compatible with your Node.js installation |
| Git | Latest stable version |
| Browser | Modern browser |

Vite 8 requires Node.js `20.19+` or `22.12+`.

Check your versions:

```bash
node --version
npm --version
git --version
```

---

## 1. Clone the Repository

```bash
git clone https://github.com/dzt711/dzt711-react.git
```

Navigate into the repository:

```bash
cd dzt711-react
```

> Update the repository URL if your GitHub repository uses a different owner or name.

---

## 2. Navigate to the React Application

```bash
cd my-react-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

Vite will display a development URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 📜 Available Scripts

All scripts should be executed inside:

```text
my-react-app/
```

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Code Quality

```bash
npm run lint
```

---

# ⚙️ Build Configuration

The project uses Vite with the official React plugin.

**File:** `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### Build Flow

```text
JSX + JavaScript + CSS
          │
          ▼
         Vite
          │
          ▼
    React Plugin
          │
          ▼
   Production Build
          │
          ▼
        dist/
```

### React Compiler

The React Compiler is not explicitly enabled in the supplied configuration.

The application uses the standard Vite React plugin.

---

# 🧹 ESLint Configuration

The repository uses ESLint with the Flat Config system.

Configured rules include:

- Recommended JavaScript linting rules.
- React Hooks rules.
- React Refresh compatibility rules.
- Browser globals.

Configuration file:

```text
my-react-app/eslint.config.js
```

Check the source:

```bash
npm run lint
```

---

# 🔄 React Rendering Lifecycle

A simplified representation of how state changes affect the interface:

```text
User Interaction
       │
       ▼
Event Handler
       │
       ▼
State Update
       │
       ▼
React Schedules Render
       │
       ▼
Component Re-renders
       │
       ▼
React Updates DOM
       │
       ▼
Updated Interface
```

Example:

```jsx
const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);
```

---

# 🔍 Key React Principles Practiced

## Declarative UI

Describe what the interface should look like based on state.

## Component Reusability

Split complex interfaces into smaller components.

## One-Way Data Flow

Pass data downward through props.

## Lifting State Up

Move shared state to the nearest common parent.

## Immutable State

Create new objects and arrays instead of modifying existing state.

## Derived State

Calculate values from existing state instead of storing unnecessary duplicates.

## Effect Cleanup

Clean up timers, subscriptions and asynchronous work when appropriate.

## Separation of Concerns

Keep rendering, data and event-handling logic organized.

---

# 🗺️ Learning Roadmap

## Phase 1 — React Fundamentals

- [x] React components
- [x] JSX syntax
- [x] Import/export components
- [x] JavaScript expressions in JSX
- [x] Props
- [x] Children props
- [x] Conditional rendering
- [x] List rendering
- [x] Component composition

## Phase 2 — State & Events

- [x] useState
- [x] Event handling
- [x] Controlled inputs
- [x] Form submission
- [x] Updating objects
- [x] Updating arrays
- [x] Lifting state up
- [x] Avoiding redundant state
- [x] Nested state management

## Phase 3 — Advanced Hooks

- [x] useEffect
- [x] useRef
- [x] useReducer
- [x] Effect cleanup
- [x] DOM references
- [x] Timer management
- [x] External system synchronization

## Phase 4 — JavaScript & Algorithms

- [x] Promises
- [x] async/await
- [x] Fetch API
- [x] Error handling
- [x] Recursion
- [x] Minimax algorithm
- [x] Tree data structures
- [x] Array transformations

## Phase 5 — Future Learning

- [ ] React Router
- [ ] Context API
- [ ] Custom Hooks
- [ ] useMemo
- [ ] useCallback
- [ ] TypeScript
- [ ] React Testing Library
- [ ] Vitest
- [ ] API integration with backend services
- [ ] Authentication
- [ ] Global state management
- [ ] React performance optimization
- [ ] Accessibility improvements
- [ ] Deployment

> [!NOTE]
> The roadmap reflects concepts demonstrated by the source code and suggested future topics. Planned topics are not currently claimed as implemented.

---

# 🔧 Potential Improvements

As this is a learning repository, some implementations may be refined over time.

### Project Organization

The current `main.jsx` renders most exercises sequentially on the same page.

A future improvement would be organizing exercises into categories:

```text
src/
├── components/
│
├── exercises/
│   ├── fundamentals/
│   ├── props/
│   ├── state/
│   ├── hooks/
│   ├── forms/
│   └── effects/
│
├── projects/
│   ├── tic-tac-toe/
│   ├── tic-tac-toe-ai/
│   ├── task-manager/
│   ├── stopwatch/
│   └── snowflake-cursor/
│
├── data/
├── utils/
└── App.jsx
```

### Additional Improvements

- Introduce navigation between exercises.
- Extract shared game components.
- Improve mobile responsiveness.
- Add component-level testing.
- Improve accessibility.
- Add loading states for API-based content.
- Improve error handling for external resources.
- Separate large inline image data into asset files.
- Add screenshots and live demos.
- Resolve ESLint warnings as the project evolves.

---

# 📸 Screenshots

Screenshots can be added as the repository evolves.

Suggested directory:

```text
docs/
└── screenshots/
    ├── tic-tac-toe.png
    ├── tic-tac-toe-ai.png
    ├── task-manager.png
    ├── snowflake-cursor.png
    ├── stopwatch.png
    └── football-gallery.png
```

Example:

```markdown
![Tic Tac Toe](docs/screenshots/tic-tac-toe.png)
```

---

# 📚 Learning Resources

The following documentation is useful for studying the concepts practiced in this repository.

| Resource | Link |
|---|---|
| React Documentation | [react.dev](https://react.dev/) |
| React Learn | [react.dev/learn](https://react.dev/learn) |
| React Hooks | [React Hooks Reference](https://react.dev/reference/react/hooks) |
| Vite Documentation | [vite.dev](https://vite.dev/) |
| JavaScript MDN | [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| CSS MDN | [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| ESLint | [eslint.org](https://eslint.org/) |

---

# 🎯 Repository Purpose

This repository serves as:

**A personal React learning journal**

A place to document concepts learned through implementation.

**A collection of practical exercises**

A reference for React components, Hooks, events, and state management.

**A JavaScript problem-solving playground**

An environment to practice algorithms, asynchronous programming, and interactive UI behavior.

**A foundation for future projects**

Knowledge from these exercises can be applied to larger frontend and full-stack applications.

---

# 👨‍💻 Author

<div align="center">

### dzt711

React & JavaScript Learning Journey

[![GitHub](https://img.shields.io/badge/GitHub-@dzt711-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dzt711)

</div>

---

# 📄 License

No license file was included in the supplied repository structure.

Unless a license is added, the repository should not be assumed to be open-source licensed.

---

<div align="center">

## ⚛️ React Learning Lab

### Learn • Build • Experiment • Improve

<br />

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css&logoColor=white)

<br />

**Built while learning modern React development.**

Developed by [@dzt711](https://github.com/dzt711)

<br />

⭐ If you find these exercises useful, consider starring the repository!

</div>

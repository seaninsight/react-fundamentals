# React Fundamentals

## Assumptions

- You have a basic understanding of HTML and JavaScript
- You have a basic understanding of Node, npm, and bundlers — the basic structure of modern JS SPA’s

## React at a high level

- React is a library for creating stateful, interactive UI’s, not a framework
  - Batteries not included
  - You will need other tools outside of React to complete your app
    - Routing, data fetching, global state, etc.
- React is unopinionated
- React has a one-way data flow (parent -> children)
- React Native

## Essential JS for React

- Functions / Arrow functions
- Array and array methods
  - map, filter, find, reduce, etc.
- Destructuring
  - const { onChange, someData } = props
  - const [value, setValue] = useState(0)
- Template literals with backticks
  - `Hello, ${name}`
- Ternaries
  - isDaytime ? <Daytime sky="blue"> : <Nighttime sky="black">

## What is a component?

- Components are functions
  - React.createElement / JSX not required
- JSX is not ugly 😉 Quick overview of JSX
- State
- Props

## How does React connect components to a web page?

- index.js
- App.js
- Index.html / <div id=“root” />
- ReactDOM.createRoot()

## A word about class components

- This was formerly the only React API
- React discourages classes and considers them legacy
- Error boundaries are the only exception to this rule

## The component lifecycle

- One-way data flow
- What triggers a render?
- Component mounting/unmounting
- Who owns what data? Passing functions and data…

## Functional components and hooks

- Lifecycle methods previously only available in classes
- useState
- useEffect
- useRef to persist data between renders
- useMemo and useCallback for optimization
- Custom hooks and third-party hooks

## Events

- These look like JS events but are actually React synthetic events
- Removing events when component unmounts to prevent memory leaks

## Controlled vs Uncontrolled Inputs

- Quick demo of a form
- Show how a form could be managed without controlled inputs
- Show how a form could be managed with controlled inputs

## Adding Styles

- Import CSS file directly
- CSS in JS
- Tailwind classes
- MUI
- Super quick overview of all of the above

## Atomic Design

- What is it?
- Why use it?

## TypeScript

- Quick overview of TS in React
- Component interfaces
- Typing components, elements, events, etc.

## Routing

- React Router
- Static vs dynamic routes and data
- Code splitting (router is a good place to do it)

## Global State: Redux / Zustand / etc.

- Third party libraries
- Redux and Redux Toolkit are king
- Newcomers and their goals

## Data Fetching

- Axios and native Fetch API
- Graphql

## NextJS

- Isomorphic React exists without Next, but next makes it better
- So so fast
- Where rendering happens: SSR, SSG, Client-side

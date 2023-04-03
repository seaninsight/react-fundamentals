# React Fundamentals

## Assumptions

- You have a basic understanding of HTML and JavaScript
- You have a basic understanding of Node, npm, and bundlers — the basic structure of modern JS SPA’s

## [tl;dr](https://www.youtube.com/watch?v=Tn6-PIqc4UM&t=1s)

- React is a library for making components
- Components are just functions
- Pass data with props
- Track component data with state
- If props or state change, the component re-renders
- Use hooks for advanced functionaity
- Hooks are also just functions
- Data always flows parent -> child
- Use third-party libraries for framework-like experience

## React at a high level

- React is a library for creating stateful, interactive UI’s, [not a framework](https://react.dev/learn/start-a-new-react-project)
  - Batteries not included
  - You will need other tools outside of React to complete your app
    - Routing, data fetching, global state, etc.
- React is unopinionated
- React has a one-way data flow (parent -> children)
- React Native

## [Essential JS](https://www.javascripttutorial.net/es6/) for React

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
  - [React.createElement](https://react.dev/reference/react/createElement) / JSX not required
  - [Thinking in react](https://react.dev/learn/thinking-in-react)
- [JSX](https://react.dev/learn/writing-markup-with-jsx) is not ugly 😉
- [State](https://react.dev/learn/managing-state)
- [Props](https://react.dev/learn/passing-props-to-a-component)

## Structuring a React app

- No forced structure
- Convention
- [How to structure your components](https://legacy.reactjs.org/docs/faq-structure.html)

## How does React connect components to a web page?

- index.js
- App.js
- index.html / &lt;div id=“root” /&gt;
- ReactDOM.createRoot()

## A word about class components

- The legacy [Component class](https://react.dev/reference/react/Component) was formerly the only way to create components
- React discourages classes and considers them _legacy_
- [Error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) are the only exception to this rule

## Props and State

- Each component has its own [state](https://react.dev/learn/state-a-components-memory)
- [Props](https://react.dev/learn/passing-props-to-a-component) is an array passed to child components to share data

## The component lifecycle

- [One-way data flow](https://react.dev/learn/you-might-not-need-an-effect#passing-data-to-the-parent)
- [What triggers a render?](https://react.dev/learn/render-and-commit)
- Component mounting/unmounting

## Global state

- ["Prop drilling"](https://kentcdodds.com/blog/prop-drilling) vs [context](https://react.dev/learn/passing-data-deeply-with-context#replace-prop-drilling-with-context) vs third party state management
- React's [Context API](https://react.dev/reference/react/useContext)
- Third-party libs
  - [Redux](https://react-redux.js.org/) / [Redux Toolkit](https://redux-toolkit.js.org/)
  - [Zustand](https://zustand-demo.pmnd.rs/)
  - [Jotai](https://jotai.org/)

## Functional components and hooks

- [Lifecycle methods](https://legacy.reactjs.org/docs/react-component.html) previously only available in classes
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef) to persist non-state data between renders
- [useMemo](https://react.dev/reference/react/useMemo) and [useCallback](https://react.dev/reference/react/useCallback) for optimization
- [Custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) and [third-party hooks](https://usehooks.com/)

## Events

- [React events](https://react.dev/learn/responding-to-events) like JS events but are actually React synthetic events
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

## Data Fetching

- Axios and native Fetch API
- Graphql

## NextJS

- Isomorphic React exists without Next, but next makes it better
- So so fast
- Where rendering happens: SSR, SSG, Client-side

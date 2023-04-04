# React Fundamentals

## Assumptions

- You have a basic understanding of HTML and JavaScript
- You have a basic understanding of Node, npm, and bundlers — the basic structure of modern JS SPA’s

## [tl;dr](https://www.youtube.com/watch?v=Tn6-PIqc4UM&t=1s)

- React is a library for making UI components
- JSX components are [just functions](https://react.dev/reference/react/createElement)
- Pass data with [props](https://react.dev/learn/passing-props-to-a-component)
- Track component data with [state](https://react.dev/learn/managing-state)
- If props or state change, the component re-renders
- Use hooks to connect components with React's API
- Hooks are also just functions
- Data always flows parent -> child
- Use third-party libraries for framework-like experience (routing, global state mgmt, netorking, etc.)

## React at a high level

- React is a library for creating stateful, interactive UI’s, [not a framework](https://react.dev/learn/start-a-new-react-project)
  - Batteries not included
  - You will need other tools outside of React to complete your app
    - Routing, data fetching, global state, animation, etc.
- React has a one-way data flow (parent -> children)
- [React Native](https://reactnative.dev/)

## [Essential JS](https://www.javascripttutorial.net/es6/) for React

- Functions / Arrow functions
- Array and array methods
  - `map`, `filter`, `find`, `reduce`, etc.
- Destructuring
  - `const { onChange, someData } = props`
  - `const [value, setValue] = useState(0)`
- Template literals with backticks
  - ```
      const greeting = `Hello, ${name}`
    ```
- Ternaries
  - `isDaytime ? <Daytime sky="blue" /> : <Nighttime sky="black" />`

## TypeScript

- Quick overview of [TS in React](https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---complete-guide)
- Component [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- Data objects
- [Typing components](https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript)

## What is a component?

- Components are functions

  - [React.createElement](https://react.dev/reference/react/createElement) / JSX not required
    <details>
      <summary>React without JSX example</summary>

    ```
      const BirthdayGift = (props) => {
        return React.createElement("div", {}, [
          React.createElement("h1", {}, props.name),
          React.createElement("h2", {}, props.message),
          React.createElement("h2", {}, props.gift),
        ]);
      };

      const App = () => {
        return React.createElement("div", {}, [
          React.createElement("h1", {}, "Happy Birthday!"),
          React.createElement(BirthdayGift, {
            name: "Sean",
            message: "Have a great birthday!",
            gift: "Starbucks gift card",
          }),
          React.createElement(BirthdayGift, {
            name: "David",
            message: "Wishing you the best year ever!",
            gift: "iPhone 14",
          }),
          React.createElement(BirthdayGift, {
            name: "Hector",
            message: "It's gonna be an awesome year! Happy birthday!",
            gift: "Pappy Van Winkle 20 Year" }),
        ]);
      };

      ReactDOM.render(React.createElement(App), document.getElementById("root"));
    ```

    </details>
    <details>
      <summary>Same example with JSX</summary>

    ```
        const BirthdayGift = ({name, message, gift}) => {
          return (
            <div>
              <h1>{name}</h1>
              <h2>{message}</h2>
              <h2>{gift}</h2>
            </div>
          )
        };

        const App = () => {
          return (
            <div>
              <h1>Happy Birthday!</h1>
              <BirthdayGift name="Sean" message="Have a great birthday!" gift="Starbucks gift card" />
              <BirthdayGift name="David" message="Wishing you the best year ever!" gift="iPhone 14" />
              <BirthdayGift name="Hector" message="It's gonna be an awesome year! Happy birthday!" gift="Pappy Van Winkle 20 Year" />
            </div>
          );
        };
    ```

    </details>

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
- [Props](https://react.dev/learn/passing-props-to-a-component) is an object passed to child components to share data

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

## Events

- [React events](https://react.dev/learn/responding-to-events) like JS events but are actually React synthetic events
- Removing events when component unmounts to prevent memory leaks

## JSX

- [JSX](https://react.dev/learn/writing-markup-with-jsx) is a metaphor for HTML
- It looks like HTML. [Jump back into plain JS/TS with `{curlyBraces}`](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Map arrays to components](https://react.dev/learn/rendering-lists) (particularly useful and common case)
- Neutron classes can just plug in via `className`

## Adding Styles

- Import or link CSS file directly, [naming classes with `className`](https://react.dev/learn#adding-styles)
- CSS naming conventions ([BEM](https://getbem.com/introduction/), etc)
- [PostCSS](https://postcss.org/)
- classnames package ([NPM](https://www.npmjs.com/package/classnames#usage-with-reactjs))
- [CSS Modules](https://github.com/css-modules/css-modules)
- [MUI](https://mui.com/material-ui/getting-started/overview/)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [DaisyUI](https://daisyui.com/) for Tailwind

## Functional components and hooks

- [Lifecycle methods](https://legacy.reactjs.org/docs/react-component.html) previously only available in classes
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef) to persist non-state data between renders
- [useMemo](https://react.dev/reference/react/useMemo) and [useCallback](https://react.dev/reference/react/useCallback) for optimization
- [Custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) and [third-party hooks](https://usehooks.com/)

## Routing

- [React Router](https://reactrouter.com/en/main)
- Import [`<Link>` components](https://reactrouter.com/en/main/components/link) instead of `<a>` tags
- Static vs dynamic [routes](https://reactrouter.com/en/main/route/route) and data
- [Code splitting with `lazy()`](https://react.dev/reference/react/lazy) (router is a good place to do it)

## Data Fetching

- [Axios](https://axios-http.com/docs/intro) and native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Graphql](https://graphql.org/)

# Tools

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Atomic Design

- [What is it?](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)
- [Why use it?](https://blog.logrocket.com/atomic-design-react-native/)

## NextJS & Remix

- Isomorphic React exists without [Next](https://nextjs.org/), but Next makes it better
- So so fast
- Where rendering happens: [SSR, SSG, Client-side](https://www.makeuseof.com/nextjs-rendering-methods-csr-ssr-ssg-isr/#:~:text=CSR%20is%20useful%20for%20pages,want%20to%20update%20in%20intervals.)
- I don't know much about [Remix](https://remix.run/), but it's the other big server-side React player

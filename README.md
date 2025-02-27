# React.js Basics

## Introduction
React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive experience. It allows developers to create reusable UI components and manage the state of an application efficiently.

## Key Features of React
- **Component-Based Architecture**: Build encapsulated components that manage their own state.
- **Virtual DOM**: Optimizes updates and improves performance.
- **Declarative UI**: Design views declaratively, making the code more predictable.
- **One-Way Data Binding**: Ensures better control over the application's state.
- **JSX (JavaScript XML)**: A syntax extension for JavaScript that looks similar to HTML.

## Installing React.js
To start using React, you need to set up a React environment. You can use Create React App (CRA) or install React manually.

### Using Create React App
```sh
npx create-react-app my-app
cd my-app
npm start
```

### Manual Installation
```sh
mkdir my-react-app && cd my-react-app
npm init -y
npm install react react-dom vite
```

## JSX - JavaScript XML
JSX allows you to write HTML-like syntax in JavaScript, making UI creation easier.

```jsx
const element = <h1>Hello, React!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## Components in React
React applications are built using components. Components can be **functional** or **class-based**.

### Functional Component
```jsx
import React from 'react';

const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

export default Welcome;
```

### Class Component
```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default Welcome;
```

## Props and State

### Props
Props (short for properties) allow data to be passed from parent to child components.
```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```
Usage:
```jsx
<Greeting name="John" />
```

### State
State is used to manage component-specific data.
```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

## Handling Events in React
```jsx
const Button = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
```

## React Lifecycle Methods
Used in class components to manage the component lifecycle.
- **componentDidMount()** - Runs after the component is mounted.
- **componentDidUpdate()** - Runs when the component updates.
- **componentWillUnmount()** - Runs before the component is destroyed.

Example:
```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return <h1>Hello!</h1>;
  }
}
```

## React Hooks
React Hooks allow functional components to use state and lifecycle methods.

### useState Hook
```jsx
const [count, setCount] = useState(0);
```

### useEffect Hook
```jsx
useEffect(() => {
  console.log("Component Updated");
}, [count]);
```

## Conclusion
React.js is a powerful UI library that enables efficient and scalable application development. By understanding components, props, state, hooks, and event handling, you can build dynamic and interactive web applications with ease!

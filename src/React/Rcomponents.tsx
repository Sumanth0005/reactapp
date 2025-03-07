export default function ReactComponent() {
    return (
      <div className="react-components p-4">
        <h1 className="text-center text-lg font-bold">React Components</h1>
  
        <p>
          In **React**, components are the building blocks of the UI. They define the structure,
          behavior, and appearance of a React application.
        </p>
  
        <h2>🛠 Key Features of React Components</h2>
        <ul>
          <li>🔹 **Encapsulation**: Each component manages its own state and logic.</li>
          <li>🔹 **Reusable**: Components can be reused across the application.</li>
          <li>🔹 **Declarative UI**: React follows a declarative approach to UI rendering.</li>
          <li>🔹 **Component-based Architecture**: The entire app is built using components.</li>
          <li>🔹 **Lifecycle Methods**: Components have lifecycle methods for better control.</li>
        </ul>
  
        <h2>📌 Structure of a React Component</h2>
        <p>A React component consists of:</p>
        <ul>
          <li>✔ **Component Function/Class** - Contains the logic written in JavaScript.</li>
          <li>✔ **JSX (JavaScript XML)** - Defines the UI structure.</li>
          <li>✔ **CSS (Optional)** - Defines the component's styles.</li>
          <li>✔ **Props & State** - Used to manage dynamic data.</li>
        </ul>
  
        <h2>📝 Example of a React Component</h2>
        <pre className="bg-black text-gray-300 p-2">
          <code>
            {`
    import React from 'react';
  
    function ExampleComponent() {
      return (
        <div>
          <h2>Hello, React!</h2>
        </div>
      );
    }
  
    export default ExampleComponent;
            `}
          </code>
        </pre>
  
        <h2>🎯 Understanding React Components</h2>
        <ul>
          <li>**Function Component** - A simple function that returns JSX.</li>
          <li>**Class Component (Legacy)** - Uses `this.state` and lifecycle methods.</li>
          <li>**JSX** - JavaScript XML used to define UI inside JavaScript.</li>
          <li>**Props** - External data passed to components.</li>
          <li>**State** - Internal component data that can change.</li>
        </ul>
  
        <h2>⚡ Types of Data Binding in React</h2>
        <ul>
          <li>🔹 **State Management (`useState`)** - Handles local component data.</li>
          <li>🔹 **Props (`{`props.value`}`)** - Passes data from parent to child.</li>
          <li>🔹 **Event Handling (`onClick`, `onChange`)** - Handles user interactions.</li>
        </ul>
  
        <h2>🔄 Component Lifecycle Methods</h2>
        <p>React components have **hooks** for lifecycle control:</p>
        <ul>
          <li>🔹 **useEffect()** - Runs side effects (like API calls, event listeners).</li>
          <li>🔹 **componentDidMount()** - Runs once after the component renders (Class Components).</li>
          <li>🔹 **componentDidUpdate()** - Runs when props/state change (Class Components).</li>
          <li>🔹 **componentWillUnmount()** - Runs before the component is removed (Class Components).</li>
        </ul>
  
        <h2>📌 Conclusion</h2>
        <p>
          React components are the **core building blocks** of any React application. They enable
          **modular, reusable, and efficient development**, making React a powerful framework
          for building scalable user interfaces.
        </p>
      </div>
    );
  }
  
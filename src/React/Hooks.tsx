export default function ReactHooks() {
    return (
      <div className="react-hooks p-4">
        <h1 className="text-center text-lg font-bold">React Hooks</h1>
  
        <p>
          **React Hooks** allow functional components to use state and lifecycle methods.
          They provide a more concise and readable way to manage component logic.
        </p>
  
        <h2>🛠 Commonly Used React Hooks</h2>
        <ul>
          <li>🔹 **useState**: Manages local state.</li>
          <li>🔹 **useEffect**: Handles side effects like API calls.</li>
          <li>🔹 **useContext**: Provides access to context values.</li>
          <li>🔹 **useReducer**: Alternative to useState for complex state logic.</li>
          <li>🔹 **useRef**: Creates a reference to DOM elements.</li>
          <li>🔹 **useMemo**: Optimizes performance by memoizing values.</li>
          <li>🔹 **useCallback**: Memoizes functions to avoid unnecessary re-renders.</li>
        </ul>
  
        <h2>📌 Example of useState</h2>
        <pre className="bg-black text-gray-300 p-2">
          <code>
            {`
    import React, { useState } from 'react';
  
    function Counter() {
      const [count, setCount] = useState(0);
  
      return (
        <div>
          <h2>Count: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
  
    export default Counter;
            `}
          </code>
        </pre>
  
        <h2>🔄 Example of useEffect</h2>
        <pre className="bg-black text-gray-300 p-2">
          <code>
            {`
    import React, { useState, useEffect } from 'react';
  
    function Timer() {
      const [time, setTime] = useState(0);
  
      useEffect(() => {
        const interval = setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000);
  
        return () => clearInterval(interval);
      }, []);
  
      return <h2>Time: {time}s</h2>;
    }
  
    export default Timer;
            `}
          </code>
        </pre>
  
        <h2>🎯 Other Advanced Hooks</h2>
        <ul>
          <li>**useLayoutEffect** - Similar to `useEffect`, but runs synchronously.</li>
          <li>**useImperativeHandle** - Customizes the instance value exposed by `useRef`.</li>
        </ul>
  
        <h2>📌 Conclusion</h2>
        <p>
          Hooks make **functional components more powerful**, allowing them to manage state
          and lifecycle behavior without needing class components.
        </p>
      </div>
    );
}

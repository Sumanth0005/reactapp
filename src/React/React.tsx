export default function ReactIntroduction() {
    return (
      <div className="react-introduction p-4">
        <h1 className="text-center text-lg font-bold">🚀 Introduction to React</h1>
  
        <p>
          **React** is a powerful, open-source **JavaScript library** used to build fast and dynamic **user interfaces (UIs)**, 
          especially for **single-page applications (SPAs)**. It was developed by **Facebook (Meta)** and is widely used in 
          web development.
        </p>
  
        <h2>🌟 Why Use React?</h2>
        <ul>
          <li>🔹 **Component-Based Architecture** – Build modular and reusable UI components.</li>
          <li>🔹 **Virtual DOM** – Ensures fast and efficient rendering.</li>
          <li>🔹 **Unidirectional Data Flow** – Maintains predictable state management.</li>
          <li>🔹 **Rich Ecosystem** – Supported by tools like **React Router, Redux, and Next.js**.</li>
          <li>🔹 **SEO-Friendly** – Can be rendered on the server using frameworks like **Next.js**.</li>
        </ul>
  
        <h2>📌 Core Features of React</h2>
        <ul>
          <li>✔ **JSX (JavaScript XML)** – A syntax extension for writing UI elements inside JavaScript.</li>
          <li>✔ **Components** – Reusable UI building blocks.</li>
          <li>✔ **Props** – Allow passing data between components.</li>
          <li>✔ **State** – Manages component-level data dynamically.</li>
          <li>✔ **Hooks** – Enable functional components to use state and lifecycle features.</li>
        </ul>
  
        <h2>🛠 Example of a Simple React Component</h2>
        <pre className="bg-black text-gray-300 p-2">
          <code>
            {`
    import React from 'react';
  
    function HelloReact() {
      return <h1>Hello, React! 🚀</h1>;
    }
  
    export default HelloReact;
            `}
          </code>
        </pre>
  
        <h2>🔄 How React Works?</h2>
        <ol>
          <li>📌 React **creates a Virtual DOM**, a lightweight copy of the real DOM.</li>
          <li>📌 When data changes, React **updates only the necessary parts** of the UI.</li>
          <li>📌 This ensures **high performance and a smooth user experience**.</li>
        </ol>
  
        <h2>⚡ React vs Traditional JavaScript</h2>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Feature</th>
              <th className="border border-gray-400 p-2">Traditional JavaScript</th>
              <th className="border border-gray-400 p-2">React</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">UI Updates</td>
              <td className="border border-gray-400 p-2">Manual DOM Manipulation</td>
              <td className="border border-gray-400 p-2">Virtual DOM for efficient updates</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Performance</td>
              <td className="border border-gray-400 p-2">Slower due to frequent re-rendering</td>
              <td className="border border-gray-400 p-2">Faster with optimized rendering</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Code Structure</td>
              <td className="border border-gray-400 p-2">Harder to maintain</td>
              <td className="border border-gray-400 p-2">Component-based, easy to manage</td>
            </tr>
          </tbody>
        </table>
  
        <h2>📌 Getting Started with React</h2>
        <p>
          To start using React, install **Node.js** and run the following command to create a new React app:
        </p>
        <pre className="bg-black text-gray-300 p-2">
          <code>
            {`
    npx create-react-app my-app
    cd my-app
    npm start
            `}
          </code>
        </pre>
  
        <h2>🎯 Where is React Used?</h2>
        <ul>
          <li>✅ **Single Page Applications (SPAs)**</li>
          <li>✅ **Social Media Platforms (Facebook, Instagram, Twitter)**</li>
          <li>✅ **E-Commerce Websites (Amazon, Flipkart)**</li>
          <li>✅ **Dashboards & Admin Panels**</li>
          <li>✅ **Mobile Apps (React Native)**</li>
        </ul>
  
        <h2>📌 Conclusion</h2>
        <p>
          React is a **powerful, flexible, and efficient** tool for modern web development. Its **component-based** approach and **virtual DOM** make it a favorite choice among developers worldwide.
        </p>
      </div>
    );
  }
  
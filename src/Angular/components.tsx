export default function Components() {
    return (
      <div className="A-components">
      <h1 className="text-center text-lg font-bold">Angular Components</h1>

        <p>
          In **Angular**, components are the building blocks of the UI. They define the structure,
          behavior, and appearance of the application.
        </p>
  
        <h2>🛠 Key Features of Angular Components</h2>
        
        <ul>
          <li>🔹 **Encapsulated UI**: Each component has its own HTML, CSS, and logic.</li>
          <li>🔹 **Reusable**: Components can be reused across the application.</li>
          <li>🔹 **Follows MVC**: Components act as the View and Controller in Angular's MVC pattern.</li>
          <li>🔹 **Supports Data Binding**: Components interact with templates via data binding.</li>
          <li>🔹 **Lifecycle Hooks**: Components have lifecycle methods for better control.</li>
        </ul>
  
        <h2>📌 Structure of an Angular Component</h2>
        <p>
          An Angular component consists of:
          <ul>
            <li>✔ **Component Class** - Contains logic written in TypeScript.</li>
            <li>✔ **Template (HTML)** - Defines the UI structure.</li>
            <li>✔ **Styles (CSS/SCSS)** - Defines the component's look and feel.</li>
            <li>✔ **Metadata (Decorator)** - Provides information about the component.</li>
          </ul>
        </p>
  
        <h2>📝 Example of an Angular Component</h2>
        <pre className="bg-black text-gray-300"
        >
          <code >
            {`
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })
  export class ExampleComponent {
    title = 'Hello, Angular!';
  }
            `}
          </code>
        </pre>
  
        <h2>🎯 Understanding the Component Decorator</h2>
        <ul>
          <li>**@Component()** - Defines the metadata for the component.</li>
          <li>**selector** - Used as a custom HTML tag to use this component.</li>
          <li>**templateUrl** - Specifies the location of the component's HTML file.</li>
          <li>**styleUrls** - Specifies the location of the component's CSS file.</li>
        </ul>
  
        <h2>⚡ Types of Data Binding in Angular Components</h2>
        <ul>
          <li>🔹 **Interpolation (`&#123;&#123; &#125;`)** - Displays values from the component class.</li>
          <li>🔹 **Property Binding (`[property]`)** - Binds component variables to DOM properties.</li>
          <li>🔹 **Event Binding (`(event)`)** - Handles events like clicks and inputs.</li>
          <li>🔹 **Two-way Binding (`[(ngModel)]`)** - Syncs data between component and UI.</li>
        </ul>
  
        <h2>🔄 Component Lifecycle Hooks</h2>
        <p>
          Angular provides **lifecycle hooks** to manage component behavior at different stages.
        </p>
        <ul>
          <li>🔹 **ngOnInit()** - Runs when the component initializes.</li>
          <li>🔹 **ngOnChanges()** - Detects input changes.</li>
          <li>🔹 **ngDoCheck()** - Runs custom change detection.</li>
          <li>🔹 **ngAfterViewInit()** - Runs after the view is initialized.</li>
          <li>🔹 **ngOnDestroy()** - Runs before the component is destroyed.</li>
        </ul>
  
        <h2>📌 Conclusion</h2>
        <p>
          Angular components are the **core of any Angular application**. They enable **modular, reusable,
          and structured** development, making Angular a powerful framework for building scalable applications.
        </p>
      </div>
    );
  }
  
export default function Directives() {
    return (
      <div className="A-directives">
        <h1 className="text-center text-lg font-bold">Angular Directives</h1>
  
        <p>
          In **Angular**, directives are special instructions that enhance the functionality of HTML elements. 
          Directives can **modify the structure, behavior, and appearance** of elements.
        </p>
  
        <h2>🛠 Key Features of Angular Directives</h2>
  
        <ul>
          <li>🔹 **Extend HTML capabilities**: Add custom behavior to elements.</li>
          <li>🔹 **Reusable**: Can be applied to multiple elements across the app.</li>
          <li>🔹 **Three types**: Structural, Attribute, and Custom directives.</li>
        </ul>
  
        <h2>📌 Types of Angular Directives</h2>
  
        <h3>1️⃣ Structural Directives</h3>
        <p>Structural directives **change the DOM layout** by adding or removing elements.</p>
        <ul>
          <li>✔ **`*ngIf`** – Conditionally adds or removes elements.</li>
          <li>✔ **`*ngFor`** – Loops through an array and renders elements dynamically.</li>
          <li>✔ **`*ngSwitch`** – Similar to a switch case for templates.</li>
        </ul>
  
        <h3>📌 Example: *ngIf Directive</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <div *ngIf="isVisible">This text is only visible when isVisible is true.</div>
            `}
          </code>
        </pre>
  
        <h3>📌 Example: *ngFor Directive</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
            `}
          </code>
        </pre>
  
        <h3>2️⃣ Attribute Directives</h3>
        <p>Attribute directives **change the appearance or behavior** of an element.</p>
        <ul>
          <li>✔ **`ngClass`** – Dynamically assigns CSS classes.</li>
          <li>✔ **`ngStyle`** – Dynamically applies inline styles.</li>
        </ul>
  
        <h3>📌 Example: ngClass & ngStyle</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <div [ngClass]="{ 'active': isActive }">This element's class changes dynamically</div>
  
  <div [ngStyle]="{ 'color': isActive ? 'green' : 'red' }">
    This element's text color changes dynamically
  </div>
            `}
          </code>
        </pre>
  
        <h3>3️⃣ Custom Directives</h3>
        <p>Custom directives allow you to **create reusable functionalities**.</p>
  
        <h3>📌 Example: Custom Directive</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Directive, ElementRef, Renderer2 } from '@angular/core';
  
  @Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
      renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
  }
            `}
          </code>
        </pre>
  
        <h2>🎯 Using a Custom Directive</h2>
        <p>To use the `appHighlight` directive, simply add it to an element:</p>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <p appHighlight>This text has a yellow background</p>
            `}
          </code>
        </pre>
  
        <h2>📌 Conclusion</h2>
        <p>
          Angular Directives **enhance the HTML structure**, making it **more dynamic and reusable**. 
          They allow for **DOM manipulation, styling, and custom behaviors**.
        </p>
      </div>
    );
  }
  
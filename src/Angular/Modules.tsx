export default function Modules() {
    return (
      <div className="A-modules">
        <h1 className="text-center text-lg font-bold">Angular Modules</h1>
  
        <p>
          In **Angular**, a module is a mechanism to group components, directives, services, and pipes 
          into a **single unit** for better code organization. Every Angular application has at least one module: 
          the **root module (AppModule)**.
        </p>
  
        <h2>🛠 Key Features of Angular Modules</h2>
  
        <ul>
          <li>🔹 **Encapsulation**: Keeps related features together.</li>
          <li>🔹 **Scalability**: Makes the application modular and maintainable.</li>
          <li>🔹 **Lazy Loading Support**: Loads modules on demand for performance optimization.</li>
          <li>🔹 **Dependency Injection**: Provides services to specific parts of the application.</li>
        </ul>
  
        <h2>📌 Creating an Angular Module</h2>
        <p>
          In Angular, you can create a module using the Angular CLI command:
        </p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`ng generate module example`}
          </code>
        </pre>
  
        <h2>📝 Example of an Angular Module</h2>
        <p>Here’s an example of a simple Angular module:</p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ExampleComponent } from './example/example.component';
  
  @NgModule({
    declarations: [ExampleComponent], // Declares components, directives, and pipes
    imports: [CommonModule], // Imports other modules
    exports: [ExampleComponent] // Makes components available for other modules
  })
  export class ExampleModule {}
            `}
          </code>
        </pre>
  
        <h2>🎯 Root Module (`AppModule`)</h2>
        <p>
          The root module (`AppModule`) bootstraps the Angular application.
        </p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { ExampleModule } from './example/example.module';
  
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ExampleModule], // Importing other modules
    bootstrap: [AppComponent] // Bootstrapping the root component
  })
  export class AppModule {}
            `}
          </code>
        </pre>
  
        <h2>⚡ Feature Modules</h2>
        <p>
          Feature modules help **organize large applications** by grouping related components.
        </p>
  
        <h3>📌 Example: Creating a Feature Module</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { UserComponent } from './user.component';
  
  @NgModule({
    declarations: [UserComponent],
    imports: [CommonModule],
    exports: [UserComponent]
  })
  export class UserModule {}
            `}
          </code>
        </pre>
  
        <h2>🔄 Lazy Loading Modules</h2>
        <p>
          Lazy loading improves performance by **loading modules only when needed**.
        </p>
  
        <h3>📌 Example: Lazy Loading in Routing</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  const routes: Routes = [
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
  ];
            `}
          </code>
        </pre>
  
        <h2>📌 Conclusion</h2>
        <p>
          Angular Modules **structure the application**, making it **scalable and maintainable**. 
          They help in organizing components, enabling **lazy loading**, and managing dependencies efficiently.
        </p>
      </div>
    );
  }
  
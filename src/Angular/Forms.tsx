export default function Forms() {
    return (
      <div className="A-forms">
        <h1 className="text-center text-lg font-bold">Angular Forms</h1>
  
        <p>
          In **Angular**, forms are used to **capture user input** and **validate** data. 
          Angular provides two types of forms:
        </p>
  
        <ul>
          <li>🔹 **Template-Driven Forms** – Uses directives in the template (easy to use).</li>
          <li>🔹 **Reactive Forms** – Uses a model-driven approach for dynamic forms.</li>
        </ul>
  
        <h2>📌 Setting Up Forms in Angular</h2>
        <p>
          Before using forms, import `FormsModule` and `ReactiveFormsModule` in your module:
        </p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { NgModule } from '@angular/core';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
  @NgModule({
    imports: [FormsModule, ReactiveFormsModule]
  })
  export class AppModule {}
            `}
          </code>
        </pre>
  
        <h2>📝 Template-Driven Forms</h2>
        <p>
          Template-driven forms are simpler and rely on **directives in the HTML** to handle form data.
        </p>
  
        <h3>📌 Example: Template-Driven Form</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
    <label>Name:</label>
    <input type="text" name="name" ngModel required />
  
    <label>Email:</label>
    <input type="email" name="email" ngModel required />
  
    <button type="submit">Submit</button>
  </form>
            `}
          </code>
        </pre>
  
        <h3>📌 Handling Form Submission in Component</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html'
  })
  export class UserFormComponent {
    onSubmit(form: any) {
      console.log('Form Submitted:', form.value);
    }
  }
            `}
          </code>
        </pre>
  
        <h2>⚡ Reactive Forms</h2>
        <p>
          Reactive forms are more **powerful** and rely on **FormControl and FormGroup** to manage form state dynamically.
        </p>
  
        <h3>📌 Example: Reactive Form</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Component } from '@angular/core';
  import { FormGroup, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html'
  })
  export class ReactiveFormComponent {
    userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
  
    onSubmit() {
      console.log('Form Submitted:', this.userForm.value);
    }
  }
            `}
          </code>
        </pre>
  
        <h3>📌 Template for Reactive Form</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
    <label>Name:</label>
    <input type="text" formControlName="name" />
  
    <label>Email:</label>
    <input type="email" formControlName="email" />
  
    <button type="submit">Submit</button>
  </form>
            `}
          </code>
        </pre>
  
        <h2>✅ Form Validation</h2>
        <p>
          Both **Template-Driven** and **Reactive Forms** support **form validation**.
        </p>
  
        <h3>📌 Example: Adding Validation</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <input type="text" name="name" ngModel required minlength="3" #name="ngModel" />
  <div *ngIf="name.invalid && name.touched">Name is required and must be at least 3 characters.</div>
            `}
          </code>
        </pre>
  
        <h2>📌 Conclusion</h2>
        <p>
          Angular Forms help in capturing and validating user input. **Template-driven forms** are easier, 
          while **Reactive forms** provide **better control and scalability**.
        </p>
      </div>
    );
  }
  
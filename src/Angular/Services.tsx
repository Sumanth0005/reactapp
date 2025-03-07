export default function Services() {
    return (
      <div className="A-services">
        <h1 className="text-center text-lg font-bold">Angular Services</h1>
  
        <p>
          In **Angular**, a **Service** is a class that provides reusable functionality and can be injected
          into components or other services using **Dependency Injection (DI)**.
        </p>
  
        <h2>🛠 Key Features of Angular Services</h2>
  
        <ul>
          <li>🔹 **Reusable Logic**: Services can be used across multiple components.</li>
          <li>🔹 **Encapsulation**: Keeps business logic separate from UI components.</li>
          <li>🔹 **Dependency Injection**: Services are injected where needed.</li>
          <li>🔹 **Efficient Data Sharing**: Allows sharing of data between components.</li>
          <li>🔹 **API Handling**: Commonly used for HTTP requests to backend services.</li>
        </ul>
  
        <h2>📌 Creating an Angular Service</h2>
        <p>
          In Angular, you can create a service using the Angular CLI command:
        </p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`ng generate service example`}
          </code>
        </pre>
  
        <h2>📝 Example of an Angular Service</h2>
        <p>Here’s an example of a simple Angular service that provides user data:</p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root' // Makes this service available application-wide
  })
  export class UserService {
    private users = ['Alice', 'Bob', 'Charlie'];
  
    getUsers() {
      return this.users;
    }
  }
            `}
          </code>
        </pre>
  
        <h2>🎯 Injecting a Service into a Component</h2>
        <p>To use the **UserService** in a component, inject it in the constructor:</p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Component, OnInit } from '@angular/core';
  import { UserService } from './user.service';
  
  @Component({
    selector: 'app-user-list',
    template: '<ul><li *ngFor="let user of users">{{ user }}</li></ul>',
  })
  export class UserListComponent implements OnInit {
    users: string[] = [];
  
    constructor(private userService: UserService) {}
  
    ngOnInit() {
      this.users = this.userService.getUsers();
    }
  }
            `}
          </code>
        </pre>
  
        <h2>⚡ Understanding the @Injectable() Decorator</h2>
        <ul>
          <li>**@Injectable()** - Marks a class as a service that can be injected.</li>
          <li>**providedIn: 'root'** - Registers the service at the root level.</li>
        </ul>
  
        <h2>🔄 Using HTTP Requests in Services</h2>
        <p>Services are commonly used for making HTTP requests. Example:</p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    constructor(private http: HttpClient) {}
  
    getUsers(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
  }
            `}
          </code>
        </pre>
  
        <h2>📌 Conclusion</h2>
        <p>
          Angular Services are a **powerful tool** for maintaining modular, reusable, and well-structured applications. 
          They help in **data management, state management, and business logic handling** across different components.
        </p>
      </div>
    );
  }
  
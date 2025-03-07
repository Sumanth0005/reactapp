export default function Routing() {
    return (
      <div className="A-routing">
        <h1 className="text-center text-lg font-bold">Angular Routing</h1>
  
        <p>
          In **Angular**, routing enables navigation between different components without reloading 
          the page. It allows developers to create **single-page applications (SPA)** with 
          a seamless user experience.
        </p>
  
        <h2>📌 Setting Up Angular Routing</h2>
        <p>
          To enable routing, ensure that the `AppRoutingModule` is included in your Angular project.
        </p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './home/home.component';
  import { AboutComponent } from './about/about.component';
  
  const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'about', component: AboutComponent } // About page route
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
            `}
          </code>
        </pre>
  
        <h2>📝 Adding Router Outlet in Template</h2>
        <p>
          The `router-outlet` directive acts as a **placeholder** where routed components will be loaded.
        </p>
  
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
  </nav>
  
  <router-outlet></router-outlet>
            `}
          </code>
        </pre>
  
        <h2>⚡ Navigating Between Routes</h2>
        <p>
          To navigate between pages, you can use **routerLink** in templates or **Router.navigate()** in TypeScript.
        </p>
  
        <h3>📌 Using `routerLink` in Template</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  <a routerLink="/contact">Go to Contact Page</a>
            `}
          </code>
        </pre>
  
        <h3>📌 Using `Router.navigate()` in Component</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
  })
  export class HomeComponent {
    constructor(private router: Router) {}
  
    goToAbout() {
      this.router.navigate(['/about']);
    }
  }
            `}
          </code>
        </pre>
  
        <h2>📌 Route Parameters</h2>
        <p>
          Route parameters allow passing **dynamic values** in the URL.
        </p>
  
        <h3>📌 Defining a Route with Parameters</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  const routes: Routes = [
    { path: 'user/:id', component: UserComponent }
  ];
            `}
          </code>
        </pre>
  
        <h3>📌 Accessing Route Parameters in Component</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
  })
  export class UserComponent implements OnInit {
    userId: string | null = '';
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.userId = this.route.snapshot.paramMap.get('id');
    }
  }
            `}
          </code>
        </pre>
  
        <h2>✅ Lazy Loading in Angular Routing</h2>
        <p>
          Lazy loading improves performance by **loading modules only when needed**.
        </p>
  
        <h3>📌 Setting Up Lazy Loaded Modules</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
  ];
            `}
          </code>
        </pre>
  
        <h2>🔒 Route Guards (Protecting Routes)</h2>
        <p>
          Route guards prevent unauthorized users from accessing certain routes.
        </p>
  
        <h3>📌 Creating an Auth Guard</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  import { Injectable } from '@angular/core';
  import { CanActivate, Router } from '@angular/router';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(): boolean {
      const isAuthenticated = !!localStorage.getItem('userToken'); 
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
      return isAuthenticated;
    }
  }
            `}
          </code>
        </pre>
  
        <h3>📌 Applying Route Guard to a Route</h3>
        <pre className="bg-black text-gray-300">
          <code>
            {`
  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
  ];
            `}
          </code>
        </pre>
  
        <h2>📌 Conclusion</h2>
        <p>
          Angular Routing provides a **powerful way to manage navigation** in **single-page applications**. 
          Features like **route parameters, lazy loading, and route guards** enhance application performance 
          and security.
        </p>
      </div>
    );
  }
  
# React Router Example App
***

### Table of Contents
1. [General Info](#general-info)
2. [Official Link](#official-link)
3. [Tag Used](#tags-used)
4. [Setup](#setup)
***
### General Info:
This application provides a working example to implement React Router in react app.
***
## Official Link:
Official site for react router dom is <a href="https://reactrouter.com/en/main" target="_blank">React-Router</a>
***
### Tag Used:
Tags used in React router dom:
* Link - It's used in place of <a> tag.
<a> reloads complete page so instead of using <a> tag, it is considered to use <Link> tag.

* NavLink - It provides direct access to isActive property to identify active tab in application.

* Outlet - It uses layout as base structure, and keeps Header & Footer fix. In place of Outlet, can pass any page.
***
### Setup:
Steps to Implement Router in React app:
* 1 - Import & Use RouterProvider tag in main.jsx in place of App tag.
* 2 - RouterProvider tag requires only 1 prop, which is router={router}
```
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>,
```
* 3 - need to create router variable, which requires createBrowserRouter. It accepts array of object, which is used to create router paths. To create router paths, need to provide 2 params such as path & element.
```
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
]);
```
* 4 - Nesting routes can be achieve by using children in router. children accepts array of objects for multile child routes.
```
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />
  }
]);
```
***

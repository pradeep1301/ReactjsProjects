# React Router Example App

This application provides a working example to implement React Router in react app.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Official site for react router dom is <a href="https://reactrouter.com/en/main" target="_blank">React-Router</a>

Steps to Implement Router in React app: \n \n /n
1 - Import & Use <RouterProvider /> in main.jsx in place of <App />
2 - <RouterProvider /> requires only 1 prop, which is router={router}
3 - need to create router variable, which requires createBrowserRouter.


Tags used in React router dom:
Link - It's used in place of <a> tag.
<a> reloads complete page so instead of using <a> tag, it is considered to use <Link> tag.

NavLink - It provides direct access to isActive property to identify active tab in application.
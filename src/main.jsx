import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Team from './pages/Team.jsx';
import NotFound404 from './components/generic/NotFound404.jsx';


// Url Routing of the Webpage
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/team", element: <Team /> },
    ],
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './index.css'

import Root from './routes/root';
import ErrorPage from './routes/error-page';
import ApiFetcher from './ApiFetcher';
import Clock from './Clock';
import Equalizer from './Equalizer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "app",
        element: <App />
      },
      {
        path: "clock",
        element: <Clock />
      },
      {
        path: "equalizer",
        element: <Equalizer />
      },
      {
        path: "fetcher",
        element: <ApiFetcher />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

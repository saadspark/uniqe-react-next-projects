import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./components/ErrorPage.jsx";
import CaseConverter from './components/CaseConverter/CaseConverter.jsx';
import TextToHandWritingConverter from './components/TextToHandWritingConverter/TextToHandWritingConverter.jsx';
import ImageToText from './components/ImageToTextConverter/ImageToText.jsx';

const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/case-converter",
        element: <CaseConverter />,
      },
      {
        path: "/text-to-handwriting-converter",
        element: <TextToHandWritingConverter />,
      },
      {
        path: "/text-to-image",
        element: <ImageToText />,
      },
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={app} />
  </React.StrictMode>,
)

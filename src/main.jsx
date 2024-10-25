import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import AppContextProvider from './providers';
import './index.css';
import JobDetails from './pages/job-details';
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/details/:jobId', element: <JobDetails /> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);

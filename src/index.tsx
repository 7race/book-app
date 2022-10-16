import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from '@pages/Main';
import { NotFound404 } from '@pages/NotFound404';
import { AuthPage } from '@pages/AuthPage';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { PrivateRoute } from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    errorElement: <NotFound404 />,
    children: [
      {
        path: 'search',
        element: <h1>Search</h1>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

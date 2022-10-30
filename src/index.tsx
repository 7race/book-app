import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Search } from '@pages/Search';
import { NotFound404 } from '@pages/NotFound404';
import { AuthPage } from '@pages/Auth';
import { Root } from '@pages/Root';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { PrivateRoute } from './routes/PrivateRoute';
import { App } from './view/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <NotFound404 />,
    children: [
      {
        path: '/',
        element: <Root />
      },
      {
        path: 'search',
        element: <Search />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);

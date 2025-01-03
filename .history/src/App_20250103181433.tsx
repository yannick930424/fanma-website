import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import AnalyticsProvider from './components/analytics/AnalyticsProvider';
import { routes } from './routes';
import LoadingSpinner from './components/common/LoadingSpinner';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <AnalyticsProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </AnalyticsProvider>
  );
}

export default App;
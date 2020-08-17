import React from 'react';
import DashboardLayout from 'src/layouts/DashboardLayout';
import DashboardView from 'src/views/reports/DashboardView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [{ path: 'dashboard', element: <DashboardView /> }]
  }
];

export default routes;

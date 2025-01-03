import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const History = lazy(() => import('../pages/History'));
const Services = lazy(() => import('../pages/Services'));
const CodesService = lazy(() => import('../pages/services/CodesService'));
const ManagementService = lazy(() => import('../pages/services/ManagementService'));
const MechanicalService = lazy(() => import('../pages/services/MechanicalService'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'history', element: <History /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'services',
        children: [
          { index: true, element: <Services /> },
          { path: 'codes', element: <CodesService /> },
          { path: 'management', element: <ManagementService /> },
          { path: 'mechanical', element: <MechanicalService /> }
        ]
      }
    ]
  }
];
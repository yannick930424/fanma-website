import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import CFD1Analysis from '../pages/services/CFD1Analysis';
import CFD2Analysis from '../pages/services/CFD2Analysis';

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
          { path: 'mechanical', element: <MechanicalService /> },
          { path: 'mechanical/cfd1', element: <CFD1Analysis /> },
          { path: 'mechanical/cfd2', element: <CFD2Analysis /> }
        ]
      },
      {
        path: 'legal',
        element: <Legal />,
        children: [
          { path: 'privacy', element: <PrivacyPolicy /> },
          { path: 'terms', element: <TermsOfUse /> }
        ]
      }      
    ]
  }
];
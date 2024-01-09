import { lazy } from 'react';
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const RootLayout = lazy(() => import('layout/RootLayout'));
const NotFound = lazy(() => import('pages/NotFound'));

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export default router;

import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Root from './__root';  // Import the component, not the route
import User from '../pages/User';
import Assets from '../pages/Assets';
import Backend from '../pages/Backend';

const rootRoute = createRootRoute({
    component: Root,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <div>Home Page</div>,
});

const userRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/user',
    component: User,
});

const assetsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/assets',
    component: Assets,
});

const backendRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/backend',
    component: Backend,
});

const routeTree = rootRoute.addChildren([indexRoute, userRoute, assetsRoute, backendRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
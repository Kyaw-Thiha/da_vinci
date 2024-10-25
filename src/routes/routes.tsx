import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import User from '../pages/User';
import Assets from '../pages/Assets';
import Backend from '../pages/Backend';

// Define root route
const rootRoute = createRootRoute();

// Define child routes
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
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

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, assetsRoute, backendRoute]);

// Create and export the router
export const router = createRouter({ routeTree });

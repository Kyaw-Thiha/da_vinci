/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RoutesImport } from './routes/routes'

// Create/Update Routes

const RoutesRoute = RoutesImport.update({
  id: '/routes',
  path: '/routes',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/routes': {
      id: '/routes'
      path: '/routes'
      fullPath: '/routes'
      preLoaderRoute: typeof RoutesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/routes': typeof RoutesRoute
}

export interface FileRoutesByTo {
  '/routes': typeof RoutesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/routes': typeof RoutesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/routes'
  fileRoutesByTo: FileRoutesByTo
  to: '/routes'
  id: '__root__' | '/routes'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  RoutesRoute: typeof RoutesRoute
}

const rootRouteChildren: RootRouteChildren = {
  RoutesRoute: RoutesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/routes"
      ]
    },
    "/routes": {
      "filePath": "routes.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

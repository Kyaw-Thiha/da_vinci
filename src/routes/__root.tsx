import React, { Suspense } from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
      ? () => null // Render nothing in production
      : React.lazy(() =>
          // Lazy load in development
          import("@tanstack/router-devtools").then((res) => ({
            default: res.TanStackRouterDevtools,
            // For Embedded Mode
            // default: res.TanStackRouterDevtoolsPanel
          })),
        );

  return (
    <>
      <div className="ml-4 flex gap-4 h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/admin-sign-in" className="[&.active]:font-bold">
          Sign In
        </Link>{" "}
      </div>
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}

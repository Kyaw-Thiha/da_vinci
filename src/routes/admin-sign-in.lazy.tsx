import { getPath } from "@/lib/getPath";
import { testData } from "@/lib/unorganisedTestData";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin-sign-in" as never)({
  component: AdminSignIn,
});

function AdminSignIn() {
  const paths = getPath(testData, 3);
  console.log(paths);

  return <div className="p-2">Hello from About!</div>;
}

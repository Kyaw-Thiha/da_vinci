import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/admin-sign-in' as never)({
  component: AdminSignIn,
})

function AdminSignIn() {
  return <div className="p-2">Hello from About!</div>
}


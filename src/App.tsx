import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/routes';  // Import the router from routes.tsx

const App: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default App;


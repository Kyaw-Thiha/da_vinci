import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/routes';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

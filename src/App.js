import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import LoginBootstrap from './components/Login/LoginBootstrap';
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import Main from './Layout/Main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
    ]
  }
])
function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;

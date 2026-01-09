import './App.css'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Works from './pages/Works/Works'



import { RouterProvider , createBrowserRouter } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children : [
        {
          index : true,
          element: <Home/>
        },
        {
          path: "about",  
          element: <AboutMe/>
        },
        {
          path: "works",
          element: <Works/>
        }
      ]
    }
  ])
  return (

    <div className="font-sans">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
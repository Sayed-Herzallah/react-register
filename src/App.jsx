import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "./Pages/AuthPages/AuthLayout"
import Login from "./Pages/AuthPages/Login/Login"
import Register from "./Pages/AuthPages/Register/Register"
import MainLayout from "./Pages/MainPages/MainLayout"
import Home from "./Pages/MainPages/Home/Home"

function App() {



  const route= createBrowserRouter([
    {path:"",element:<AuthLayout/>,children:[
      {path:"login",element:<Login/>},
      {path:"register",element:<Register/>},
    ]},
    {path:"",element:<MainLayout/>,children:[
      {index:true,element:<Home/>}
    ]}
  ])


  return (
    <>
    <RouterProvider router={route}></RouterProvider>
     
    </>
  )
}

export default App

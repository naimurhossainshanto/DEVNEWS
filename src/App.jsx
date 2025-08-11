import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ApplyLayout from './components/ApplyLayout'
import Home from './pages/Home'
import Article from './pages/Article'
import Category from './pages/Category'
import BookmarkContext from './context/BookmarkContext'


const App = () => {
  const router = createBrowserRouter([
    {path:'/', element:<ApplyLayout/>, children:[
      {path:'/' , element:<Home/>},
      {path:'/article' , element:<Article/>},
      {path:'/category' , element:<Category/>},
      {path:'/bookmarkcontext' , element:<BookmarkContext/>},
    ]}
     
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

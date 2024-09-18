import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout.jsx';
import UserPage from "./pages/UserPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import { Container } from "@chakra-ui/react";

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children:[
      {path: '/:userName' , element:<UserPage />},
      {path: '/:userName/post/:postId', element: <PostPage /> }
    ]
  }])
  
return <>
  <Container maxW={"620px"}>
      <RouterProvider router={router} />
  </Container>
</>
}

export default App

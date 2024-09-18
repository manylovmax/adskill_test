import React from "react";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 import LogListPage from "./LogListPage";
 import LogDetailPage , { loader as logLoader }from "./LogDetailPage";


 const router = createBrowserRouter([
   {
     path: "/",
     element: <LogListPage />,
   },
   {
     path: "/logs/:logId",
     element: <LogDetailPage />,
     loader: logLoader
   },
 ]);


export default function App() { 
   return (<RouterProvider router={router} />);
}

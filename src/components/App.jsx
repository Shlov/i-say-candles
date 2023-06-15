import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Main = lazy(() => import('../pages/Main'));
const Builder = lazy(() => import('../pages/Builder'));

export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="/builder" element={<Builder/>}/>
      </Route>
    </Routes>

  );
};

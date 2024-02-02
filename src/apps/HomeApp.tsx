import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";

const HomeApp = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route key={"urlLogin"} element={<HomeContainer />} path={"/"} />
      </Routes>
    </Suspense>
  );
};

export default HomeApp;

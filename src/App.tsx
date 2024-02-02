import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import GenericSpinner from "./components/GenericSwipper/GenericSpinner";
import SwiperCore, { Autoplay } from "swiper";
const AsyncHomeRouterApp = lazy(() => import("./apps/HomeApp"));

const loader = <GenericSpinner />;

const homeApp = (
  <div>
    <AsyncHomeRouterApp />
  </div>
);

function App() {
  SwiperCore.use([Autoplay]);

  let router = null;

  router = homeApp;

  return (
    <BrowserRouter>
      <Suspense fallback={loader}>{router}</Suspense>
    </BrowserRouter>
  );
}

export default App;

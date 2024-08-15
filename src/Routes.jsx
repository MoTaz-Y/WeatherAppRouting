import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./assets/layout/RootLayout";
import WeatherLayout from "./assets/layout/WeatherLayout";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<div>Home</div>} />
      <Route path="weather" element={<WeatherLayout />}>
        <Route path=":city" element={<div>Weather of city</div>} />
      </Route>
    </Route>
  </>
);
const router = createBrowserRouter(routes);
export default router;

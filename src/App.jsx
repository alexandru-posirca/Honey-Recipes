import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/recipes/Recipes";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

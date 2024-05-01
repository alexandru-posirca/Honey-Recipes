import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Recipes, { recipesLoader } from "./pages/recipes/Recipes";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import RecipesLayout from "./layouts/RecipesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="recipes" element={<RecipesLayout />}>
        <Route index element={<Recipes />} loader={recipesLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

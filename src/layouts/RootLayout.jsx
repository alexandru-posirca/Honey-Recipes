import { Link, Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Footer } from "../components/Footer";

function RootLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
}, [location.pathname]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="w-full text-lg uppercase justify-center bg-yellow-400 font-semibold flex text-white">
        <ul className="flex gap-5 justify-center container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      <main className="w-full mb-12">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;

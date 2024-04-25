import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col items-center bg-yellow-100 min-h-screen">
      <header className="w-full text-lg uppercase justify-center bg-yellow-400 font-semibold flex">
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
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="w-full flex justify-center bg-yellow-400 font-semibold mt-auto">
        <div className="container flex justify-center">
        <p>Develop by A</p>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;

import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col items-center bg-yellow-100 min-h-screen">
      <header className="w-full text-lg uppercase justify-center bg-yellow-400 font-semibold">
        <ul className="flex gap-5 justify-center">
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
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
      <footer className="w-full flex justify-center bg-yellow-400 font-semibold">
        <p>Develop by A</p>
      </footer>
    </div>
  );
}

export default RootLayout;

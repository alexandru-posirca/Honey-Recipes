import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col items-center">
      <header>
        <nav>
          <ul className="flex gap-5">
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
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Develop by A</p>
      </footer>
    </div>
  );
}

export default RootLayout;

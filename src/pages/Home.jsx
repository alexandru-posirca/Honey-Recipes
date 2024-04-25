import { BttnRecipes } from "../components/BttnRecipes";

function Home() {
  return (
    <div className="homepage container mx-auto mt-12">
      <header className="flex items-center justify-center">
            <div className="flex items-center flex-col font-semibold">
              <h1 className="mb-2 text-[64px]">Welcome!</h1>
              <h2 className="mb-1 text-xl">This is my website with honey recipes</h2>
              <BttnRecipes />
            </div>
      </header>
    </div>
  );
}

export default Home;

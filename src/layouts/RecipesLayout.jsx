import { Outlet } from "react-router-dom";

export default function RecipesLayout() {
  return (
    <div className="recipes-layout">
      <Outlet/>
    </div>
  )
}
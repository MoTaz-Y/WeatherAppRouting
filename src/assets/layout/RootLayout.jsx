import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";

const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <NavBar />
        <SearchBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;

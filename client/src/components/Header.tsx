import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="bg-cultured container mx-auto flex justify-between items-center">
      <Link to="/">
        <h1 className="py-10 text-3xl text-light-blue tracking-tight font-bold">
          Deniz İnsanları
        </h1>
      </Link>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
    </div>
  );
};

export default Header;

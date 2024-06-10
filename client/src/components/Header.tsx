import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="bg-cultured container mx-auto flex justify-between items-center">
      <Link to="/" className="inline-flex-row justify-center items-center">
        <p className="py-2 text-3xl text-light-blue tracking-tight font-bold text-center">
          Deniz İnsanları
        </p>
        <p className="mb-3 text-center font-dancing text-2xl">
          "Denizlere sürgünlerin platformu"
        </p>
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

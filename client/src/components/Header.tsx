import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

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
    </div>
  );
};

export default Header;

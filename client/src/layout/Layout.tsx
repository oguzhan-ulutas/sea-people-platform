import { GlobalContext } from "@/GlobalContext";
import Header from "@/components/Header";
import React, { useContext } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { count } = useContext(GlobalContext);
  return (
    <div>
      <Header />
      <div className="container">{count}</div>
    </div>
  );
};

export default Layout;

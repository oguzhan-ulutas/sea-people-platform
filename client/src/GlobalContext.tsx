import { createContext } from "react";

type globalContextType = {
  count?: number;
  setCount?: (count: number) => void;
};

export const GlobalContext = createContext<globalContextType | null>(null);

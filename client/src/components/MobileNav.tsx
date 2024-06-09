import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-light-blue" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <p className="text-center">
            Merhaba, Denizlere sürgünlerin platformu Deniz İnsanları'na
            hoşgeldiniz!
          </p>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-light-blue">Log in</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

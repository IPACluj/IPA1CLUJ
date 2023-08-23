import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 SheetClose">
        <Menu className=" w-8 h-8" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 bg-secondary pt-10 w-32"
      >
        <SheetClose asChild>
          <button>
            {" "}
            <Sidebar />
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

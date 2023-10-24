import { File } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

import pdf from "@/assets/documents/test_technique_reactjs.pdf";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <img
            src="../../public/json-logo.png"
            alt="logo"
            width={24}
            height={24}
            className="object-cover"
          />
          <span className="text-gray-600 font-bold logo-text">JSON.</span>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            <a
              href={pdf}
              target="_blank"
              className="flex items-center gap-2 font-normal"
            >
              <File />
              <span className="hidden md:block">SUBJECT</span>
            </a>
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

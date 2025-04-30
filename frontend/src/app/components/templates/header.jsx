import { Button } from "@/components/ui/button";
import About from "../buttons/headerButtons/About";
import Home from "../buttons/headerButtons/Home";
import MyAccount from "../buttons/headerButtons/MyAccount";
import Auth from "../buttons/headerButtons/Signin";

;

export default function Header() {


    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">LOGO</div>
          <div className="flex items-center gap-4">
            <Home />
            <About />
            <MyAccount />
            <Auth />
          </div>
          </div>
        </header>
    )
}
import { useState, useEffect } from "react";
import { Menu, X, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import { Role } from "@/Conastance";
import { ModeToggle } from "./Toggle";
import { authApi, useGetMeQuery, useLogOutMutation } from "@/redux/features/auth/authapi";

import { useAppDispatch } from "@/redux/hooks";



const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  // { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: Role.admin },
  { href: "/user", label: "Dashboard", role: Role.user },
  { href: "/agent", label: "Dashboard", role: Role.agent },
];
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

const {data}=useGetMeQuery(undefined)

const [logout] =useLogOutMutation()
const dispatch=useAppDispatch()

const handelSubmit = async()=>{
console.log("clicked");
await logout(undefined)
dispatch(authApi.util.resetApiState())
}

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        isScrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">PayFlow</span>
          </Link>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                if (link.role === "PUBLIC" || link.role === Role.user) {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                            isActive(link.href)
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent"
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
                return null;
              })}
            </NavigationMenuList>
          </NavigationMenu>

          
          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <ModeToggle></ModeToggle>
            {!data?.email ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <Button variant="outline" onClick={handelSubmit}>
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {navigationLinks.map((link, index) => {
              if (link.role === "PUBLIC" || link.role === Role.user) {
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className="block px-4 py-3 rounded-lg hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
              return null;
            })}

            <div className="pt-4 border-t space-y-2">
              {!data?.email ? (
                <>
                  <Link to="/login">
                    <Button className="w-full" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={handelSubmit}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

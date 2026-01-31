import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team" },
  { name: "HSE", href: "/hse" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <nav className="container flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-lg text-accent-foreground">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-primary-foreground">
                Ceetrice
              </span>
              <span className="text-xs text-primary-foreground/70 block -mt-0.5">
                Corporate Limited
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="accent" size="sm">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <div className="h-10 w-10 rounded bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-lg text-accent-foreground">C</span>
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Ceetrice
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-primary-foreground/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-accent bg-accent/10"
                        : "text-primary-foreground hover:bg-primary-foreground/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button asChild variant="accent" className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

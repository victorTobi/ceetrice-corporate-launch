import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
            <img 
              src="/logo.png" 
              alt="Ceetrice Corporate Limited" 
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback to text logo if image doesn't exist
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="h-10 w-10 rounded bg-accent flex items-center justify-center hidden">
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
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 z-[101] w-full max-w-sm overflow-y-auto bg-primary px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/logo.png" 
                  alt="Ceetrice" 
                  className="h-10 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="h-10 w-10 rounded bg-accent flex items-center justify-center hidden">
                  <span className="font-display font-bold text-lg text-accent-foreground">C</span>
                </div>
                <span className="font-display text-xl font-bold text-primary-foreground">
                  Ceetrice
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-accent bg-accent/10"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <Button asChild variant="accent" className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
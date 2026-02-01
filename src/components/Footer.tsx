import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const navigation = {
  services: [
    { name: "Oil & Gas Support", href: "/services#oil-gas" },
    { name: "Marine Logistics", href: "/services#marine" },
    { name: "Construction Support", href: "/services#construction" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "HSE Policy", href: "/hse" },
    { name: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-lg text-accent-foreground">C</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold">Ceetrice</span>
                <span className="text-xs text-primary-foreground/70 block -mt-0.5">Corporate Limited</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Integrated Oil & Gas, Marine & Construction Support Services. Reliable, compliant, and operationally grounded solutions for demanding environments.
            </p>
            <p className="text-xs text-primary-foreground/50">RC: 7061543</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Plot 1, Close 5, Elekahia Housing Estate, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">+234 705 295 5431</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">info@ceetrice.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Ceetrice Corporate Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/hse" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              HSE Policy
            </Link>
            <span className="text-xs text-primary-foreground/30">|</span>
            <Link to="/contact" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

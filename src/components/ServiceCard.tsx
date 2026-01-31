import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  features?: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, href, features }: ServiceCardProps) => {
  const content = (
    <div className="card-industrial p-6 lg:p-8 h-full flex flex-col group">
      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className="mt-6 pt-4 border-t border-border">
          <span className="text-sm font-medium text-primary flex items-center gap-2 group-hover:text-accent transition-colors">
            Learn More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link to={href} className="block">{content}</Link>;
  }

  return content;
};

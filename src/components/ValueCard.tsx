import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

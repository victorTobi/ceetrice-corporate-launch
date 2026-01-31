import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}

export const SectionHeader = ({ label, title, description, centered = false, children }: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

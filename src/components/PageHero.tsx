interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {backgroundImage && (
        <>
          <img 
            src={backgroundImage} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 hero-overlay" />
        </>
      )}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up delay-100">
              {subtitle}
            </p>
          )}
          <div className="divider-accent mt-6 animate-slide-up delay-200" />
        </div>
      </div>
    </section>
  );
};

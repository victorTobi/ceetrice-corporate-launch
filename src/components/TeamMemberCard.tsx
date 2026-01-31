interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export const TeamMemberCard = ({ name, title, bio, image }: TeamMemberCardProps) => {
  return (
    <div className="card-industrial overflow-hidden group">
      <div className="aspect-[4/5] bg-muted relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="text-6xl font-display font-bold text-primary/20">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
        <p className="text-sm text-accent font-medium mb-3">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

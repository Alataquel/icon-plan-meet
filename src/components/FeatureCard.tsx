import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
  onClick?: () => void;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  comingSoon = false,
  onClick,
}: FeatureCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-border/50 group hover:border-primary/30 window-dots"
    >
      {comingSoon && (
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 text-xs bg-accent/20 text-accent border-0"
        >
          Coming Soon
        </Badge>
      )}
      <div className="flex items-start gap-4 pt-6">
        <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
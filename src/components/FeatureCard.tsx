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
      className="relative bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-border group"
    >
      {comingSoon && (
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 text-xs bg-secondary text-muted-foreground"
        >
          Coming Soon
        </Badge>
      )}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
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

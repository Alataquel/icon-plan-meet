import { Globe, ChevronDown, LayoutDashboard, ClipboardList, FileText, GraduationCap, Briefcase, User, Calendar, Video, LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  hasDropdown?: boolean;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { label: "Dashboard", href: "#", icon: LayoutDashboard, active: true },
    { label: "Applications", href: "#", icon: ClipboardList },
    { label: "Resume & Cover Letter", href: "#", icon: FileText, hasDropdown: true },
    { label: "Career Coach", href: "#", icon: GraduationCap },
    { label: "Job Board", href: "#", icon: Briefcase },
    { label: "Events", href: "#", icon: Calendar },
    { label: "Book a Meeting", href: "#", icon: Video },
    { label: "Profile", href: "#", icon: User },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl">apply</span>
          <span className="text-foreground font-bold text-xl">lab</span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className={`p-2.5 rounded-lg transition-all duration-200 flex items-center gap-1 hover:scale-110 ${
                        item.active
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">English</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          <Button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 rounded-full px-5">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
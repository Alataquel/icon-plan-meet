import { Globe, ChevronDown, LayoutDashboard, ClipboardList, FileText, GraduationCap, Briefcase, User, Calendar, Video, LucideIcon } from "lucide-react";
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
    <nav className="bg-card border-b border-border px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">a</span>
          </div>
          <span className="text-foreground font-semibold text-lg">Student Portal</span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center gap-4">
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

        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Globe className="h-4 w-4" />
              English
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Français</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

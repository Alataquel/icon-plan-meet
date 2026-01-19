import { Video, Calendar, Clock, ArrowRight, Building2, TrendingUp, Users, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const BookMeetingSection = () => {
  const stats = [
    { icon: Users, value: "2,847", label: "Active Users" },
    { icon: FileText, value: "1,234", label: "Resumes Built" },
    { icon: Briefcase, value: "8,456", label: "Jobs Applied" },
  ];

  const insights = [
    { label: "CS majors need more interview prep", type: "Action" },
    { label: "Finance internship demand up 40%", type: "Trend" },
  ];

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-card border border-border/50 overflow-hidden relative window-dots">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between pt-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/20">
            <Building2 className="h-4 w-4 text-accent" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">For Universities</h2>
        </div>
      </div>
      
      <div className="p-6">
        {/* Student Engagement */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Student Engagement</span>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium">Live</span>
          </div>
          
          {/* Activity Chart Placeholder */}
          <div className="flex items-end gap-1 h-12 mb-2">
            {[60, 75, 45, 80, 55, 90, 70].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/30 rounded-sm"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-xl bg-secondary/30 border border-border/30">
              <stat.icon className="h-4 w-4 text-muted-foreground mx-auto mb-2" />
              <div className="text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Actionable Insights */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Actionable Insights</span>
          </div>
          <div className="space-y-2">
            {insights.map((insight, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/30">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-sm text-foreground">{insight.label}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  insight.type === "Action" 
                    ? "bg-destructive/20 text-destructive" 
                    : "bg-accent/20 text-accent"
                }`}>
                  {insight.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Rate */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/30 mb-6">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Placement Rate</div>
            <div className="text-2xl font-bold text-accent">78.5%</div>
          </div>
          <div className="relative w-14 h-14">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="4"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="4"
                strokeDasharray={`${78.5 * 1.5} 150`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        
        <Button className="w-full bg-secondary/50 hover:bg-secondary border border-border/50 text-foreground gap-2 rounded-xl">
          <Building2 className="h-4 w-4" />
          Request Demo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BookMeetingSection;
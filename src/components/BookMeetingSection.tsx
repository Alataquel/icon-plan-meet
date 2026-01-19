import { Video, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Advisor {
  id: string;
  name: string;
  role: string;
  initials: string;
  availability: string;
  specialties: string[];
}

const mockAdvisors: Advisor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Career Advisor",
    initials: "SJ",
    availability: "Mon, Wed, Fri",
    specialties: ["Tech Industry", "Resume Review"],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Industry Expert",
    initials: "MC",
    availability: "Tue, Thu",
    specialties: ["Finance", "Interview Prep"],
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Career Coach",
    initials: "ER",
    availability: "Mon - Fri",
    specialties: ["All Industries", "Career Planning"],
  },
];

const BookMeetingSection = () => {
  return (
    <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Video className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Book a Meeting</h2>
        </div>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          All Advisors <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-6">
          Schedule a one-on-one session with our career advisors to get personalized guidance.
        </p>
        <div className="grid gap-4">
          {mockAdvisors.map((advisor) => (
            <div
              key={advisor.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                  <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                    {advisor.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-foreground">{advisor.name}</h4>
                  <p className="text-sm text-muted-foreground">{advisor.role}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3" />
                    {advisor.availability}
                  </div>
                </div>
              </div>
              <Button size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMeetingSection;

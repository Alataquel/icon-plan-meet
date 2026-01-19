import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "Workshop" | "Career Fair" | "Webinar" | "Networking";
}

const typeColors = {
  "Workshop": "bg-primary/20 text-primary",
  "Career Fair": "bg-accent/20 text-accent",
  "Webinar": "bg-info/20 text-info",
  "Networking": "bg-warning/20 text-warning",
};

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Resume Building Workshop",
    date: "Jan 25, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual",
    type: "Workshop",
  },
  {
    id: "2",
    title: "Tech Industry Career Fair",
    date: "Feb 3, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Main Campus Hall",
    type: "Career Fair",
  },
  {
    id: "3",
    title: "Interview Skills Webinar",
    date: "Feb 10, 2026",
    time: "3:00 PM - 4:30 PM",
    location: "Virtual",
    type: "Webinar",
  },
];

const EventsSection = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-card border border-border/50 overflow-hidden relative window-dots">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between pt-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">For Students</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium text-foreground">Upcoming Events</h3>
        </div>
        
        <div className="space-y-3">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer border border-border/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button className="w-full mt-6 bg-secondary/50 hover:bg-secondary border border-border/50 text-foreground gap-2 rounded-xl">
          <Sparkles className="h-4 w-4" />
          Explore the Platform
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default EventsSection;
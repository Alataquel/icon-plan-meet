import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
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
  "Workshop": "bg-primary/10 text-primary",
  "Career Fair": "bg-success/10 text-success",
  "Webinar": "bg-info/10 text-info",
  "Networking": "bg-warning/10 text-warning",
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
    <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>
        </div>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="divide-y divide-border">
        {mockEvents.map((event) => (
          <div
            key={event.id}
            className="px-6 py-4 hover:bg-secondary/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${typeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-2">{event.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Register
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;

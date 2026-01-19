import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ClipboardList, ArrowRight } from "lucide-react";

interface Application {
  id: string;
  company: string;
  logo?: string;
  position: string;
  dateApplied: string;
  status: "Applied" | "Interview Invited" | "Second Round" | "Offer Extended";
  matchScore?: string;
}

const statusStyles = {
  "Applied": "bg-accent/20 text-accent border-0",
  "Interview Invited": "bg-primary/20 text-primary border-0",
  "Second Round": "bg-warning/20 text-warning border-0",
  "Offer Extended": "bg-accent/20 text-accent border-0",
};

const mockApplications: Application[] = [
  {
    id: "1",
    company: "Stripe",
    logo: "S",
    position: "Product Intern",
    dateApplied: "12/19/2025",
    status: "Applied",
    matchScore: "94%",
  },
  {
    id: "2",
    company: "Figma",
    logo: "F",
    position: "Design Engineer",
    dateApplied: "12/12/2025",
    status: "Interview Invited",
    matchScore: "89%",
  },
  {
    id: "3",
    company: "Linear",
    logo: "L",
    position: "Frontend Developer",
    dateApplied: "12/5/2025",
    status: "Second Round",
    matchScore: "91%",
  },
  {
    id: "4",
    company: "Notion",
    logo: "N",
    position: "Product Designer",
    dateApplied: "12/5/2025",
    status: "Offer Extended",
    matchScore: "87%",
  },
];

const ApplicationsTable = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-card border border-border/50 overflow-hidden relative window-dots">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between pt-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <ClipboardList className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Application Tracker</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border/50">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-sm text-muted-foreground">Applied</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-warning">4</div>
          <div className="text-sm text-muted-foreground">Interview</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">1</div>
          <div className="text-sm text-muted-foreground">Offer</div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-secondary/30 border-border/50">
            <TableHead className="text-muted-foreground font-medium text-xs uppercase">Company</TableHead>
            <TableHead className="text-muted-foreground font-medium text-xs uppercase">Position</TableHead>
            <TableHead className="text-muted-foreground font-medium text-xs uppercase">Match</TableHead>
            <TableHead className="text-muted-foreground font-medium text-xs uppercase">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockApplications.map((app) => (
            <TableRow key={app.id} className="hover:bg-secondary/20 transition-colors border-border/30">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{app.logo}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{app.company}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {app.position}
              </TableCell>
              <TableCell>
                <span className="text-accent font-medium">{app.matchScore}</span>
              </TableCell>
              <TableCell>
                <Badge className={statusStyles[app.status]}>
                  {app.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicationsTable;
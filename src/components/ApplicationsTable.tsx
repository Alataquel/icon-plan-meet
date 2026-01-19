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
import { Briefcase, ClipboardList } from "lucide-react";

interface Application {
  id: string;
  company: string;
  logo?: string;
  position: string;
  dateApplied: string;
  status: "Applied" | "Interview Invited" | "Second Round" | "Offer Extended";
}

const statusStyles = {
  "Applied": "bg-success/10 text-success border-success/20",
  "Interview Invited": "bg-primary/10 text-primary border-primary/20",
  "Second Round": "bg-warning/10 text-warning border-warning/20",
  "Offer Extended": "bg-success/10 text-success border-success/20",
};

const mockApplications: Application[] = [
  {
    id: "1",
    company: "Decathlon France",
    logo: "🔵",
    position: "STAGE Créateur de Contenu & Automatisation Vidéo Focus Réparabilité (H/F)",
    dateApplied: "12/19/2025",
    status: "Applied",
  },
  {
    id: "2",
    company: "PerspectivIA",
    logo: "🟣",
    position: "Alternance Employé(e) Polyvalent(e) en Restauration (H/F)",
    dateApplied: "12/12/2025",
    status: "Interview Invited",
  },
  {
    id: "3",
    company: "New test",
    position: "tudo",
    dateApplied: "12/5/2025",
    status: "Second Round",
  },
  {
    id: "4",
    company: "Test",
    position: "test",
    dateApplied: "12/5/2025",
    status: "Offer Extended",
  },
];

const ApplicationsTable = () => {
  return (
    <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Recent Applications</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Add Manually
          </Button>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary/50">
            <TableHead className="text-muted-foreground font-medium">COMPANY</TableHead>
            <TableHead className="text-muted-foreground font-medium">POSITION</TableHead>
            <TableHead className="text-muted-foreground font-medium">DATE APPLIED</TableHead>
            <TableHead className="text-muted-foreground font-medium">STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockApplications.map((app) => (
            <TableRow key={app.id} className="hover:bg-secondary/30 transition-colors">
              <TableCell>
                <div className="flex items-center gap-3">
                  {app.logo ? (
                    <span className="text-2xl">{app.logo}</span>
                  ) : (
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                  <span className="font-medium text-foreground">{app.company}</span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground max-w-md truncate">
                {app.position}
              </TableCell>
              <TableCell className="text-muted-foreground">{app.dateApplied}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusStyles[app.status]}>
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

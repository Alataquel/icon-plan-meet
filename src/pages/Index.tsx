import { User, Building2, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection";
import FeatureCard from "@/components/FeatureCard";
import ApplicationsTable from "@/components/ApplicationsTable";
import EventsSection from "@/components/EventsSection";
import BookMeetingSection from "@/components/BookMeetingSection";

const Index = () => {
  const features = [
    {
      icon: User,
      title: "Complete Your Profile",
      description: "Update your information to improve your opportunities",
    },
    {
      icon: Building2,
      title: "Start Looking for Jobs",
      description: "Find opportunities that match your profile",
    },
    {
      icon: Mail,
      title: "Email Status Tracking",
      description: "Connect your email for automatic application tracking",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-secondary/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <Navbar />
      
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              comingSoon={feature.comingSoon}
            />
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <EventsSection />
          <BookMeetingSection />
        </div>

        {/* Applications Table */}
        <ApplicationsTable />
      </main>
    </div>
  );
};

export default Index;

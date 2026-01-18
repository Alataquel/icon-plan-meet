import { User, Building2, Mail, Calendar, Video } from "lucide-react";
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
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "Discover workshops, career fairs, and networking events",
    },
    {
      icon: Video,
      title: "Book a Meeting",
      description: "Schedule one-on-one sessions with career advisors",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeSection />
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.slice(0, 3).map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              comingSoon={feature.comingSoon}
            />
          ))}
        </div>
        
        {/* Additional Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.slice(3).map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
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

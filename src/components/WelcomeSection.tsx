interface WelcomeSectionProps {
  userName?: string;
}

const WelcomeSection = ({ userName = "Antonio" }: WelcomeSectionProps) => {
  return (
    <div className="text-center py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <span className="text-foreground">Welcome back, </span>
        <span className="gradient-text">{userName}.</span>
      </h1>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">
        Your career journey starts here.
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Track your applications, discover opportunities, and get the support you need — 
        all in one place with <span className="text-foreground font-medium">real visibility</span>.
      </p>
    </div>
  );
};

export default WelcomeSection;
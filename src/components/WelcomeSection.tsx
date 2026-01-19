interface WelcomeSectionProps {
  userName?: string;
}

const WelcomeSection = ({ userName = "Antonio" }: WelcomeSectionProps) => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Welcome {userName}!
      </h1>
      <p className="text-muted-foreground text-lg mb-2">
        The world is changing, the way you apply should too!
      </p>
      <p className="text-muted-foreground">
        Check out the tutorial video{" "}
        <a href="#" className="text-primary hover:underline font-medium">
          here
        </a>{" "}
        !
      </p>
    </div>
  );
};

export default WelcomeSection;

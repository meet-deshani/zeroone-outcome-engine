import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-50">
      <div className="text-center space-y-6 px-4">
        <div className="font-mono text-lg tracking-[6px]">
          <span className="font-bold text-dots-data">4</span>
          <span className="text-sand-200 mx-1.5">·</span>
          <span className="font-bold text-dots-tech">0</span>
          <span className="text-sand-200 mx-1.5">·</span>
          <span className="font-bold text-dots-strategy">4</span>
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-normal text-ink">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Looks like this page took a wrong turn. Let's get you back on track.
        </p>
        <Link to="/">
          <Button variant="brand" size="lg" className="font-medium">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

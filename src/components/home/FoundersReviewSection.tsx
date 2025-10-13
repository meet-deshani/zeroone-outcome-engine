import { Star } from "lucide-react";

const FoundersReviewSection = () => {
  const reviews = [
    {
      founder: "Priya Sharma",
      company: "TechScale Solutions",
      review: "Cut our manual data work by 85%. The agents are incredible.",
      rating: 5,
    },
    {
      founder: "Rajesh Kumar",
      company: "OptiFlow India",
      review: "2x productivity boost in just 6 weeks. Game-changer for ops.",
      rating: 5,
    },
    {
      founder: "Ananya Desai",
      company: "DataDrive Analytics",
      review: "Zero billing model meant zero risk. Results spoke for themselves.",
      rating: 5,
    },
    {
      founder: "Vikram Singh",
      company: "CloudEdge Systems",
      review: "Their Data Pipeline Agent saved us 3 months of engineering time.",
      rating: 5,
    },
    {
      founder: "Meera Patel",
      company: "GrowthStack",
      review: "Best decision we made. Custom AI agents that actually deliver.",
      rating: 5,
    },
    {
      founder: "Arjun Mehta",
      company: "FinOps Pro",
      review: "Transparent, outcome-focused, and incredibly effective.",
      rating: 5,
    },
    {
      founder: "Sneha Rao",
      company: "AutoScale Ventures",
      review: "From problem to solution in record time. Highly recommend.",
      rating: 5,
    },
    {
      founder: "Karthik Iyer",
      company: "DataOps Hub",
      review: "The security-first approach gave us complete confidence.",
      rating: 5,
    },
    {
      founder: "Divya Nair",
      company: "StrategyAI",
      review: "Their Strategy Agents transformed our unit economics modeling.",
      rating: 5,
    },
    {
      founder: "Amit Verma",
      company: "TechOps India",
      review: "Real AI automation that delivers measurable business value.",
      rating: 5,
    },
  ];

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold gradient-text text-center">What Founders Say</h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] mx-3"
            >
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.founder}</p>
                  <p className="text-sm text-muted-foreground">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersReviewSection;

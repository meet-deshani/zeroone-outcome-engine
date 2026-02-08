import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FoundersReviewSection = () => (
  <section className="bg-cream-50 py-20 md:py-32 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 space-y-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading text-ink text-center">
          What Business Owners Say
        </h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          We're still new. We're building with a small group of business owners
          who care about real results, not fancy promises.
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          As they share their stories, we'll post them on LinkedIn — no fake
          reviews, ever.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-center mt-10 space-y-3"
      >
        <Button variant="brand" size="lg" className="px-8 py-3" asChild>
          <a
            href="https://www.linkedin.com/in/zeroone-dots-ai-consulting-697357392/"
            target="_blank"
            rel="noreferrer"
          >
            Follow Us on LinkedIn
          </a>
        </Button>
        <p className="text-xs text-muted-foreground">
          Real stories from real clients — coming soon.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FoundersReviewSection;

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSubject?: string;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = ({ open, onOpenChange, defaultSubject = "Launch My Agent" }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    subject: defaultSubject,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Create FormData for Google Forms submission
      const googleFormData = new FormData();
      googleFormData.append("entry.1400476538", validatedData.name);
      googleFormData.append("entry.1670634388", validatedData.email);
      googleFormData.append("entry.1880035332", validatedData.company || "");
      googleFormData.append("entry.1372522944", validatedData.subject);
      googleFormData.append("entry.277616799", validatedData.message);

      // Submit to Google Form
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScIw02tLym0pvsog9a-Kyk4usNa4kvO3Za5hg9aRGT00aGlcw/formResponse",
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors", // Google Forms doesn't support CORS
        }
      );

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: defaultSubject,
        message: "",
      });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check your inputs and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] animate-scale-in max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Get Started</DialogTitle>
          <DialogDescription>
            Tell us about your challenge and we'll reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@company.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
              className={errors.company ? "border-destructive" : ""}
            />
            {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
          </div>
          <div>
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="What do you need help with?"
              className={errors.subject ? "border-destructive" : ""}
            />
            {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
          </div>
          <div>
            <Label htmlFor="message">Tell us about your challenge *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your challenge..."
              rows={4}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" className="w-full gradient-primary text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;

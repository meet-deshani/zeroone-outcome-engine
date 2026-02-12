import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sendTelegramMessage } from "@/lib/telegram";
import { logEvent } from "@/lib/analytics";

const bountySchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Problem title is required")
    .max(200, "Title must be 200 characters or less"),
  docLink: z.string().trim().url("Please enter a valid Google Doc URL"),
  budget: z
    .string()
    .trim()
    .min(1, "Budget is required")
    .max(100, "Budget must be 100 characters or less"),
  email: z.string().trim().email("Invalid email address"),
});

type BountyFormData = z.infer<typeof bountySchema>;

const BountyForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BountyFormData>({
    title: "",
    docLink: "",
    budget: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BountyFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof BountyFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const result = bountySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof BountyFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof BountyFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Forms submission
      const formBody = new URLSearchParams({
        "entry.1400476538": formData.title,
        "entry.1670634388": formData.email,
        "entry.1372522944": `Bounty: ${formData.title}`,
        "entry.277616799": `Budget: ${formData.budget}\nDoc: ${formData.docLink}`,
      });

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdFm5xP0qR8KhvO0v2zYH5O9qHdLKmCqW8KxQqD0b5BZmCw7A/formResponse",
        {
          method: "POST",
          body: formBody,
          mode: "no-cors",
        }
      );

      // Telegram notification
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const telegramMessage = `🎯 NEW BOUNTY POSTED!

📋 Problem: ${formData.title}
💰 Budget: ${formData.budget}
📧 Email: ${formData.email}
🔗 Doc: ${formData.docLink}
⏰ Time: ${timestamp}`;

      await sendTelegramMessage(telegramMessage);

      // Analytics
      logEvent("bounty_posted", {
        title: formData.title,
        budget: formData.budget,
      });

      // Success state
      setIsSuccess(true);
      toast({
        title: "Bounty Posted!",
        description: "We'll notify the community right away.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          title: "",
          docLink: "",
          budget: "",
          email: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Bounty submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-sand-200 text-center">
        <CheckCircle2 className="w-16 h-16 text-dots-ops mx-auto mb-4" />
        <h3 className="font-heading text-display-sm text-ink mb-2">
          Bounty Posted!
        </h3>
        <p className="font-body text-body-md text-slate-700">
          We'll notify the community.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-sand-200"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Problem Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="font-body text-body-md text-ink">
            What's the problem? <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="e.g., Need offline AI for inventory tracking"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className={errors.title ? "border-red-500" : ""}
            maxLength={200}
          />
          {errors.title && (
            <p className="font-body text-body-sm text-red-500">
              {errors.title}
            </p>
          )}
        </div>

        {/* Google Doc Link */}
        <div className="space-y-2">
          <Label htmlFor="docLink" className="font-body text-body-md text-ink">
            Link to your detailed problem statement{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="docLink"
            type="url"
            placeholder="https://docs.google.com/..."
            value={formData.docLink}
            onChange={(e) => handleChange("docLink", e.target.value)}
            className={errors.docLink ? "border-red-500" : ""}
          />
          {errors.docLink && (
            <p className="font-body text-body-sm text-red-500">
              {errors.docLink}
            </p>
          )}
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <Label htmlFor="budget" className="font-body text-body-md text-ink">
            What's your budget? <span className="text-red-500">*</span>
          </Label>
          <Input
            id="budget"
            type="text"
            placeholder="e.g., ₹10,000 or $500"
            value={formData.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            className={errors.budget ? "border-red-500" : ""}
            maxLength={100}
          />
          {errors.budget && (
            <p className="font-body text-body-sm text-red-500">
              {errors.budget}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-body text-body-md text-ink">
            Where should we send updates?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="font-body text-body-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="brand"
        size="lg"
        className="w-full rounded-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Posting...
          </>
        ) : (
          "Post Your Bounty"
        )}
      </Button>
    </form>
  );
};

export default BountyForm;

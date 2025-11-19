import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSubject?: string;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] p-0 animate-scale-in">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-heading text-2xl">Get Started</DialogTitle>
          <DialogDescription>
            Tell us about your challenge and we'll reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[600px] overflow-hidden">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScIw02tLym0pvsog9a-Kyk4usNa4kvO3Za5hg9aRGT00aGlcw/viewform?embedded=true"
            className="w-full h-full border-0"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;

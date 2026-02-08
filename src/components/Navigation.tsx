import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { logEvent } from "@/lib/analytics";

const MegaMenuContent = ({ columns }: { columns: any[] }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="grid grid-cols-12 h-[450px]">
      {/* Sidebar - Categories */}
      <div className="col-span-4 bg-cream-100/60 border-r border-sand-200 p-2 space-y-1">
        {columns.map((col, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveCategory(idx)}
            className={`cursor-pointer px-4 py-4 rounded-lg transition-all duration-200 group ${activeCategory === idx
              ? "bg-cream-100 shadow-sm border border-sand-200"
              : "hover:bg-cream-100/50 border border-transparent"
              }`}
          >
            <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 transition-colors ${activeCategory === idx ? "text-ink" : "text-muted-foreground group-hover:text-ink/70"
              }`}>
              {col.subtitle}
            </p>
            <h4 className={`font-heading font-bold text-base transition-colors ${activeCategory === idx ? "text-ink" : "text-ink/70"
              }`}>
              {col.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Content Area - Details */}
      <div className="col-span-8 p-8 bg-white relative">
        {columns.map((col, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 p-8 transition-opacity duration-300 ease-in-out ${activeCategory === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-ink mb-3">{col.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {col.description}
                </p>
              </div>

              <ul className="space-y-4 mb-auto">
                {col.items.map((item: any) => (
                  <li key={item.name}>
                    <Link to={item.path} className="group block">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-ink group-hover:text-plum transition-colors text-lg">
                          {item.name}
                        </span>
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-ink" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-sand-200 mt-6">
                <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-plum transition-colors bg-cream-100 px-4 py-2 rounded-full border border-sand-200">
                  Get Strategic Blueprint <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Solutions",
      path: "/solutions",
      megaMenu: true,
      columns: [
        {
          title: "Revenue & Margin Protectors",
          subtitle: "AI Automation",
          description: "Autonomous systems that capture missed leads and detect margin leakage.",
          items: [
            { name: "AI Agents", path: "/solutions", desc: "Digital workers for ops." }
          ]
        },
        {
          title: "Operational Infrastructure",
          subtitle: "Customized SaaS",
          description: "Institutional-grade operating systems to scale without bloating headcount.",
          items: [
            { name: "Infinity CRM", path: "/infinity-crm", desc: "AI powered CRM for Enterprise Team (Customised)." },
            { name: "OvertradeOP", path: "/overtrade-op", desc: "Tool to Trade Crypto market with AI." },
            { name: "Inhouse SLM", path: "/inhouse-slm", desc: "Private Small Language Models." }
          ]
        },
        {
          title: "In-House Empowerment",
          subtitle: "Skills & Teaching",
          description: "Bridging the internal technical gap through execution-focused training.",
          items: [
            { name: "AI Workshop", path: "/ai-workshop", desc: "Hands-on team training." },
            { name: "Personal AI Agent", path: "/personal-ai-agent", desc: "Executive productivity booster." }
          ]
        },
        {
          title: "Bespoke Tech Design",
          subtitle: "Expert Services",
          description: "On-demand expert design for complex, mission-critical infrastructure.",
          items: [
            { name: "HE Design", path: "/he-design", desc: "Thermal engineering design." }
          ]
        },
        {
          title: "SEO & GEO",
          subtitle: "AI Visibility",
          description: "Get found on Google and recommended by AI.",
          items: [
            { name: "SEO & GEO Services", path: "/seo-geo", desc: "Be the brand AI recommends." }
          ]
        }
      ]
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Security", path: "/security" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Community", path: "/community" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-cream-50/90 backdrop-blur-xl shadow-sm border-b border-sand-200" : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className="bg-ink text-cream-50 py-2 text-center font-mono tracking-wider uppercase text-[11px]">
        Problem Solving First <span className="text-dots-data">&#x2022;</span> Outcome First — Zero Billing <span className="text-dots-ops">&#x2022;</span> Data Safeguard First
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo imgClassName="h-10 w-auto sm:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.megaMenu) {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors outline-none ${location.pathname.startsWith(link.path)
                        ? "text-ink font-semibold"
                        : "text-muted-foreground hover:text-ink"
                        }`}
                    >
                      {link.name} <ChevronDown size={14} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-[800px] bg-white/95 backdrop-blur-xl border-sand-200 p-0 shadow-2xl overflow-hidden rounded-xl">
                      <MegaMenuContent columns={link.columns} />
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${isActive(link.path)
                    ? "text-ink font-semibold"
                    : "text-muted-foreground hover:text-ink"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>


          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="brand"
              size="lg"
              className="font-medium"
              onClick={() => {
                logEvent("Navigation", "Click CTA", "Start Your Project (Desktop)");
                setIsContactFormOpen(true);
              }}
            >
              Start Your Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cream-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className="lg:hidden bg-cream-50/95 backdrop-blur-xl border-t border-sand-200 animate-fade-in max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.megaMenu ? (
                    <div className="space-y-4 py-2">
                      <div className="px-4 font-bold text-lg text-ink">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-6">
                        {link.columns.map((col, idx) => (
                          <div key={idx} className="space-y-2">
                            <p className="text-xs uppercase font-bold text-muted-foreground px-4">{col.subtitle}</p>
                            <div className="space-y-2 border-l-2 border-sand-200 ml-4 pl-3">
                              {col.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-1 text-sm font-medium text-ink/80"
                                >
                                  {item.name}
                                </Link>
                              ))}
                              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-xs font-bold text-ink">
                                + Get Strategic Blueprint
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.path)
                        ? "text-ink font-semibold"
                        : "text-muted-foreground hover:text-ink"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                variant="brand"
                size="lg"
                className="w-full font-medium mt-4"
                onClick={() => {
                  logEvent("Navigation", "Click CTA", "Start Your Project (Mobile)");
                  setIsMobileMenuOpen(false);
                  setIsContactFormOpen(true);
                }}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        )
      }

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
        defaultSubject="Start Your Project"
      />
    </nav>
  );
};

export default Navigation;

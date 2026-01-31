import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ValueCard } from "@/components/ValueCard";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Ship, 
  HardHat, 
  CheckCircle, 
  Shield, 
  Clock, 
  Target,
  Award,
  Users,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-oil-platform.jpg";
import oilfieldImage from "@/assets/oilfield-support.jpg";
import marineImage from "@/assets/marine-logistics.jpg";
import constructionImage from "@/assets/construction-equipment.jpg";

const stats = [
  { value: "15+", label: "Years Combined Experience" },
  { value: "100%", label: "Commitment to Safety" },
  { value: "24/7", label: "Operational Support" },
  { value: "100+", label: "Projects Delivered" },
];

const valueProps = [
  {
    icon: Clock,
    title: "Reduced Downtime",
    description: "Integrated services eliminate coordination delays between multiple vendors.",
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description: "All operations meet Nigerian and international industry standards.",
  },
  {
    icon: Target,
    title: "Single-Point Accountability",
    description: "One partner, one point of contact, complete responsibility.",
  },
  {
    icon: Award,
    title: "Operational Discipline",
    description: "Execution-focused mindset delivering consistent, reliable results.",
  },
];

const whyCeetrice = [
  {
    icon: CheckCircle,
    title: "Execution Over Excuses",
    description: "We deliver on commitments. Every time.",
  },
  {
    icon: Shield,
    title: "Safety-First Operations",
    description: "Zero compromise on health, safety, and environmental standards.",
  },
  {
    icon: Users,
    title: "Indigenous Expertise",
    description: "Local knowledge combined with professional international standards.",
  },
  {
    icon: Award,
    title: "High-Pressure Reliability",
    description: "Proven performance in demanding operational environments.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <img 
          src={heroImage} 
          alt="Offshore oil platform at sunset" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              Ceetrice Corporate Limited
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
              Integrated Oil & Gas, Marine & Construction Support Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-slide-up delay-100">
              Reliable, compliant, and operationally grounded solutions for demanding environments across Nigeria and West Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
              <Button asChild variant="accent" size="xl">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary border-t border-primary-foreground/10">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="stat-number text-accent">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-background">
        <div className="container">
          <SectionHeader
            label="Why Choose Us"
            title="Operational Excellence, Delivered"
            description="Our integrated approach eliminates the inefficiencies and coordination challenges that come with managing multiple vendors. One partner, complete accountability."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index} 
                className="card-industrial p-6 text-center"
              >
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{prop.title}</h3>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Integrated Solutions for Complex Operations"
            description="From oilfield support to marine logistics and construction services, we provide comprehensive solutions tailored to the demands of Nigeria's oil & gas and infrastructure sectors."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-industrial overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={oilfieldImage} 
                  alt="Oilfield operations" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Droplets className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Oil & Gas Support Services
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive oilfield support, onshore and offshore operations assistance, project logistics coordination, and compliance-driven execution.
                </p>
                <Link 
                  to="/services#oil-gas" 
                  className="text-sm font-medium text-primary flex items-center gap-2 group-hover:text-accent transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card-industrial overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={marineImage} 
                  alt="Marine logistics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Ship className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Marine Logistics
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Marine transportation support, vessel coordination, offshore logistics, and port operations support for seamless maritime operations.
                </p>
                <Link 
                  to="/services#marine" 
                  className="text-sm font-medium text-primary flex items-center gap-2 group-hover:text-accent transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card-industrial overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={constructionImage} 
                  alt="Construction equipment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <HardHat className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Construction Support & Equipment
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Construction logistics, equipment supply and coordination, site support services, and industrial project assistance.
                </p>
                <Link 
                  to="/services#construction" 
                  className="text-sm font-medium text-primary flex items-center gap-2 group-hover:text-accent transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Ceetrice */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Why Ceetrice
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Built for High-Pressure Environments
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                In Nigeria's demanding oil & gas and construction sectors, excuses don't deliver projects. We bring operational discipline, local expertise, and an unwavering commitment to execution that our clients can depend on—every time.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyCeetrice.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="h-8 w-8 rounded bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-primary-foreground/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={oilfieldImage} 
                  alt="Professional operations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg max-w-xs hidden md:block">
                <p className="font-display font-bold text-accent-foreground text-lg mb-1">
                  "Execution Over Excuses"
                </p>
                <p className="text-sm text-accent-foreground/80">
                  Our operational philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="card-industrial p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Discuss Your Operational Requirements?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need oilfield support, marine logistics, or construction services, our team is ready to understand your needs and deliver solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

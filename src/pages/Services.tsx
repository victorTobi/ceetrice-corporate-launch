import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Droplets, 
  Ship, 
  HardHat, 
  CheckCircle,
  Wrench,
  Truck,
  Anchor,
  Building2,
  Cog,
  FileCheck
} from "lucide-react";
import heroImage from "@/assets/hero-oil-platform.jpg";
import oilfieldImage from "@/assets/oilfield-support.jpg";
import marineImage from "@/assets/marine-logistics.jpg";
import constructionImage from "@/assets/construction-equipment.jpg";

const oilGasServices = [
  "Oilfield support operations",
  "Onshore and offshore operations support",
  "Project logistics coordination",
  "Equipment procurement and supply",
  "Wellsite services support",
  "Compliance-driven execution",
];

const marineServices = [
  "Marine transportation support",
  "Vessel coordination and management",
  "Offshore logistics operations",
  "Port and nearshore operations support",
  "Cargo handling coordination",
  "Maritime safety compliance",
];

const constructionServices = [
  "Construction logistics support",
  "Equipment supply and coordination",
  "Site support services",
  "Industrial project assistance",
  "Material procurement",
  "Project management support",
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Integrated solutions across Oil & Gas, Marine Logistics, and Construction Support. One partner, complete accountability."
        backgroundImage={heroImage}
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Integrated Service Delivery
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Accountable, Not Fragmented
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The traditional model of engaging multiple specialized vendors creates coordination overhead, diffuses accountability, and introduces risk at every handoff point. We take a different approach.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ceetrice provides integrated services across the oil & gas, marine, and construction sectors. This means single-point accountability, streamlined coordination, and the operational discipline that comes from unified management.
            </p>
          </div>
        </div>
      </section>

      {/* Oil & Gas Services */}
      <section id="oil-gas" className="section-padding bg-muted scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-accent" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Service Area
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Oil & Gas Support Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nigeria's oil & gas sector demands partners who understand the operational realities of the field. Our support services are designed for the rigors of upstream, midstream, and downstream operations—delivered with compliance and safety at the forefront.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {oilGasServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="accent">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={oilfieldImage} 
                  alt="Oil and gas support operations" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Logistics */}
      <section id="marine" className="section-padding bg-background scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={marineImage} 
                  alt="Marine logistics operations" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Ship className="h-5 w-5 text-accent" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Service Area
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Marine Logistics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Marine operations in Nigerian waters require local expertise, reliable coordination, and strict adherence to safety protocols. Our marine logistics services support offshore operations with the precision and dependability that maritime environments demand.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {marineServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="accent">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Support */}
      <section id="construction" className="section-padding bg-muted scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <HardHat className="h-5 w-5 text-accent" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Service Area
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Construction Support & Equipment Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Infrastructure and industrial construction projects require dependable logistics, equipment availability, and site support. We provide the operational backbone that keeps construction projects moving forward on schedule.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {constructionServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="accent">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={constructionImage} 
                  alt="Construction support operations" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Let's Discuss Your Operational Requirements
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Every project has unique demands. Contact us to discuss how our integrated services can support your specific operational needs.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

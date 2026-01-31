import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { 
  Shield, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  FileCheck, 
  Users,
  Heart,
  Leaf
} from "lucide-react";
import heroImage from "@/assets/hero-oil-platform.jpg";

const hsePrinciples = [
  {
    icon: Heart,
    title: "Zero Harm",
    description: "Every person should return home safely every day. We plan, train, and execute with this as our non-negotiable standard.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Proactive identification, assessment, and mitigation of hazards before they become incidents.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Full compliance with Nigerian regulations, DPR requirements, and international industry standards.",
  },
  {
    icon: Users,
    title: "Safety Culture",
    description: "Every team member is empowered and expected to stop unsafe work. Safety is everyone's responsibility.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Minimizing environmental impact through responsible operations and waste management practices.",
  },
  {
    icon: Target,
    title: "Continuous Improvement",
    description: "Regular audits, incident reviews, and training updates to continuously strengthen our HSE performance.",
  },
];

const commitments = [
  "Conduct all operations in compliance with applicable HSE laws and regulations",
  "Provide adequate resources for HSE training, equipment, and management systems",
  "Maintain emergency response preparedness across all operational sites",
  "Conduct regular HSE audits and inspections",
  "Investigate all incidents and near-misses to prevent recurrence",
  "Promote a culture where safety concerns can be raised without fear",
  "Continuously improve HSE performance through measurable objectives",
  "Ensure all contractors and partners meet our HSE standards",
];

const HSE = () => {
  return (
    <Layout>
      <PageHero
        title="Health, Safety & Environment"
        subtitle="Safety isn't a priority—priorities change. Safety is a value that guides every decision and operation."
        backgroundImage={heroImage}
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Commitment
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Safety-First Culture, Zero Compromise
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Ceetrice Corporate Limited, we believe that no project objective is worth compromising the health and safety of our people, our clients' personnel, or the communities where we operate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our HSE management system is built on the principle that all injuries, occupational illnesses, and environmental incidents are preventable. This isn't an aspiration—it's the operational standard we hold ourselves to every day.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every team member, from management to field operations, is trained, equipped, and empowered to maintain the highest safety standards. We believe that operational discipline and safety performance are inseparable.
            </p>
          </div>
        </div>
      </section>

      {/* HSE Principles */}
      <section className="section-padding bg-muted">
        <div className="container">
          <SectionHeader
            label="HSE Principles"
            title="Our Approach to Safety Excellence"
            description="These principles guide how we plan, execute, and continuously improve our health, safety, and environmental performance."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hsePrinciples.map((principle, index) => (
              <div key={index} className="card-industrial p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <principle.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                HSE Commitments
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Obligations to Safety
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These commitments represent binding obligations that guide our operations. They are reviewed annually by management and communicated to all personnel and partners.
              </p>
              <div className="card-industrial p-6 bg-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                  <h3 className="font-display font-bold text-primary-foreground">HSE Policy Statement</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Ceetrice Corporate Limited is committed to protecting the health and safety of all personnel involved in our operations and to minimizing our environmental impact. We will achieve this through systematic risk management, regulatory compliance, continuous training, and a culture of accountability.
                </p>
              </div>
            </div>
            <div>
              <div className="card-industrial p-6 lg:p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Management Commitments</h3>
                <ul className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Standards & Compliance
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Certified to Industry Standards
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our operations are aligned with Nigerian regulatory requirements and international best practices. We maintain relevant certifications and continuously update our systems to reflect evolving industry standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground font-medium text-sm">DPR</p>
                <p className="text-primary-foreground/60 text-xs">Compliant</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground font-medium text-sm">NIMASA</p>
                <p className="text-primary-foreground/60 text-xs">Registered</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground font-medium text-sm">NEBOSH</p>
                <p className="text-primary-foreground/60 text-xs">Trained Staff</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground font-medium text-sm">ISO</p>
                <p className="text-primary-foreground/60 text-xs">Aligned</p>
              </div>
            </div>
            <div className="divider-accent mx-auto mt-8" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HSE;

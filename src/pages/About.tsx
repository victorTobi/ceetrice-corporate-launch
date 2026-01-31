import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Target, Eye, CheckCircle, Shield, Award, Users, Zap, Heart } from "lucide-react";
import heroImage from "@/assets/hero-oil-platform.jpg";
import oilfieldImage from "@/assets/oilfield-support.jpg";

const coreValues = [
  {
    icon: Zap,
    title: "Execution Over Excuses",
    description: "We don't make promises we can't keep. When we commit, we deliver—on time, within scope, and to standard.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero compromise on health, safety, and environmental standards. Every operation, every day.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest dealings, transparent communication, and ethical practices form the foundation of our relationships.",
  },
  {
    icon: Target,
    title: "Operational Discipline",
    description: "Systematic approach to planning, execution, and quality control ensures consistent results.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We treat client success as our own. Your challenges become our challenges to solve.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Ceetrice"
        subtitle="An indigenous Nigerian company built on execution, discipline, and an unwavering commitment to operational excellence."
        backgroundImage={heroImage}
      />

      {/* Origin Story */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Filling a Gap in Dependable Service Delivery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ceetrice Corporate Limited was founded to address a persistent challenge in Nigeria's oil & gas and construction sectors: the need for reliable, operationally grounded service delivery from indigenous providers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Too often, clients faced vendors who overpromised and underdelivered, fragmented services that created coordination nightmares, and a general lack of accountability that led to delays, cost overruns, and operational disruptions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built Ceetrice on a different foundation: treating every promise as an obligation, building our reputation through execution rather than marketing, and providing integrated services that eliminate the coordination burden from our clients.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={oilfieldImage} 
                  alt="Oilfield operations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-accent/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-industrial p-8 lg:p-10">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, efficient, and compliant integrated services that enable our clients to execute projects safely, on time, and within budget. We exist to remove operational burdens and deliver peace of mind.
              </p>
            </div>
            <div className="card-industrial p-8 lg:p-10">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the trusted indigenous partner of choice for integrated oil & gas, marine, and construction support services across Nigeria and West Africa—recognized for operational excellence and unwavering reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container">
          <SectionHeader
            label="Core Values"
            title="The Principles That Guide Us"
            description="Our values aren't marketing statements. They're the operational principles that govern every decision, every project, and every client interaction."
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="card-industrial p-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Commitment
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              "We treat promises as obligations."
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              When Ceetrice commits to a project, timeline, or standard—we deliver. Our reputation is built not on what we say, but on what we do. In an industry where reliability is rare, we make it our defining characteristic.
            </p>
            <div className="divider-accent mx-auto mt-8" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Users, Award, Shield, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-oil-platform.jpg";

const teamMembers = [
  {
    name: "Chukwuemeka Adeyemi",
    title: "Managing Director",
    bio: "Over 20 years of experience in oil & gas operations across Nigeria. Former operations manager at a leading international IOC. Committed to building indigenous capacity with professional standards.",
  },
  {
    name: "Ngozi Okonkwo",
    title: "Director of Operations",
    bio: "15+ years in project management and logistics coordination. Expert in upstream operations support and supply chain optimization. Certified PMP with a track record of on-time delivery.",
  },
  {
    name: "Oluwaseun Abiodun",
    title: "HSE Manager",
    bio: "NEBOSH certified with extensive experience in offshore safety management. Former HSE lead at a major EPC contractor. Zero incident philosophy drives all operational planning.",
  },
  {
    name: "Ibrahim Musa",
    title: "Marine Operations Lead",
    bio: "12 years in marine logistics and vessel coordination. Deep knowledge of Nigerian waterways and port operations. Ensures seamless offshore logistics execution.",
  },
  {
    name: "Funke Adeleke",
    title: "Construction Services Manager",
    bio: "Civil engineering background with 10+ years in construction project support. Expertise in equipment coordination and site logistics for large-scale infrastructure projects.",
  },
  {
    name: "Emeka Nnamdi",
    title: "Procurement & Compliance Lead",
    bio: "Specialist in vendor management and regulatory compliance. Ensures all operations meet Nigerian and international industry standards. Strong relationships with key suppliers.",
  },
];

const Team = () => {
  return (
    <Layout>
      <PageHero
        title="Our Team"
        subtitle="Experienced professionals with deep expertise in oil & gas, marine logistics, and construction support operations."
        backgroundImage={heroImage}
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container">
          <SectionHeader
            label="Our People"
            title="Strength Through Experience and Discipline"
            description="Ceetrice's capability lies in our people. Our team brings together decades of combined experience in Nigeria's oil & gas, marine, and construction sectors—grounded in operational discipline and a commitment to excellence."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card-industrial p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <p className="stat-number text-accent text-3xl">75+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Combined Experience</p>
            </div>
            <div className="card-industrial p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <p className="stat-number text-accent text-3xl">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Nigerian Expertise</p>
            </div>
            <div className="card-industrial p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <p className="stat-number text-accent text-3xl">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Industry Certifications</p>
            </div>
            <div className="card-industrial p-6 text-center">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <p className="stat-number text-accent text-3xl">0</p>
              <p className="text-sm text-muted-foreground mt-1">Safety Incidents Target</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding-sm bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                title={member.title}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Statement */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Culture
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Execution Culture, Professional Standards
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              At Ceetrice, we believe that indigenous capability and professional execution are not mutually exclusive. Our team demonstrates daily that Nigerian companies can deliver to the highest international standards.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              We invest in our people through continuous training, safety certifications, and professional development. This commitment ensures that every team member represents the operational excellence that defines our brand.
            </p>
            <div className="divider-accent mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="card-industrial p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for experienced professionals who share our commitment to operational excellence. If you have a background in oil & gas, marine logistics, or construction services, we'd like to hear from you.
            </p>
            <p className="text-sm text-muted-foreground">
              Send your CV to <span className="text-accent font-medium">careers@ceetrice.com</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

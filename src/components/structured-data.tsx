import { resumeData } from "@/data/resume";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.name,
    jobTitle: "Full Stack Engineer",
    url: "https://portfolio-kevin-darrell.vercel.app",
    sameAs: [
      "https://github.com/KevinDarrell",
      "https://www.linkedin.com/in/kevin-darrell/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sriwijaya University",
    },
    worksFor: {
      "@type": "Organization",
      name: "datAIsolv",
    },
    knowsAbout: resumeData.skills,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
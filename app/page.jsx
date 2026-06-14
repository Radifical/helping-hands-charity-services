import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import HowItWorks from "@/components/home/HowItWorks";
import ImpactStrip from "@/components/home/ImpactStrip";
import Testimonials from "@/components/home/Testimonials";
import DonateForm from "@/components/home/DonateForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Donate Your Car to a Cause You Love",
  description: site.description,
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much of my car donation reaches the charity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helping Hands Charity Services returns the largest possible share of proceeds to your chosen organization. Our vehicle network competes on price before pickup, so the strongest offer goes to work for your cause.",
      },
    },
    {
      "@type": "Question",
      name: "Is vehicle pickup really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We schedule a no-cost pickup at a time that works for you, whether the vehicle runs or not.",
      },
    },
    {
      "@type": "Question",
      name: "Is my car donation tax-deductible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations to qualified 501(c)(3) organizations are generally tax-deductible. We provide the documentation you need at filing time.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Partners />
      <HowItWorks />
      <ImpactStrip />
      <Testimonials />
      <DonateForm />
    </>
  );
}

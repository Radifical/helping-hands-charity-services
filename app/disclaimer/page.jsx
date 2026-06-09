import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${site.name} vehicle donation services.`,
  alternates: { canonical: "/disclaimer" },
};

const sections = [
  {
    heading: "General information",
    paragraphs: [
      `The information provided by ${site.name} ("we," "us," or "our") on this website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.`,
    ],
  },
  {
    heading: "Vehicle valuation",
    paragraphs: [
      "Any vehicle offers, estimates, or valuations communicated before pickup are based on information provided by the donor and current market conditions. Final proceeds may vary depending on the actual sale of the vehicle.",
    ],
  },
  {
    heading: "Tax advice",
    paragraphs: [
      "We are not tax professionals, and nothing on this website constitutes tax, legal, or financial advice. Tax deductibility depends on your individual circumstances and applicable law. Please consult a qualified tax professional regarding any deduction related to a vehicle donation.",
    ],
  },
  {
    heading: "External links",
    paragraphs: [
      "This site may contain links to third-party websites or content. We do not warrant, endorse, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about this disclaimer can be directed to ${site.email} or ${site.phone}.`,
    ],
  },
];

export default function Page() {
  return (
    <LegalPage title="Disclaimer" updated="June 2026" sections={sections} />
  );
}

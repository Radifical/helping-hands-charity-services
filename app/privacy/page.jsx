import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "Information we collect",
    paragraphs: [
      "When you submit a vehicle donation request or contact us, we collect the information you provide (such as your name, email, phone number, vehicle details, and chosen cause) so we can process your donation and follow up with you.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use your information solely to coordinate your vehicle donation, arrange pickup, provide documentation, and communicate with you about your donation. We do not sell your personal information.",
    ],
  },
  {
    heading: "Sharing",
    paragraphs: [
      "We may share necessary details with our vehicle pickup and sale partners and, where relevant, with the organization you have chosen to support. We share only what is needed to complete your donation.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      `You may request access to, correction of, or deletion of your personal information at any time by contacting us at ${site.email}.`,
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `For privacy questions, reach us at ${site.email} or ${site.phone}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}.`,
    ],
  },
];

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026" sections={sections} />
  );
}

import ShareStoryForm from "@/components/ShareStoryForm";
import { site } from "@/lib/site";
import shell from "../page-shell.module.css";
import styles from "./share.module.css";

export const metadata = {
  title: "Share Your Story with HHCS",
  description:
    "Donated a vehicle or partnered with Helping Hands Charity Services? Share your story and help the next donor and nonprofit give with confidence.",
  alternates: { canonical: "/share-your-story" },
  openGraph: {
    title: `Share Your Story with HHCS · ${site.name}`,
    description: "Tell us about your experience with Helping Hands Charity Services.",
    url: `${site.url}/share-your-story`,
  },
};

export default function ShareYourStoryPage() {
  return (
    <>
      <section className={shell.intro}>
        <div className={shell.glow} aria-hidden="true" />
        <div className={`container ${shell.introInner}`}>
          <p className={shell.kicker}>Share your story with HHCS</p>
          <h1 className={shell.h1}>Tell us how it went.</h1>
          <p className={`lead ${shell.lead}`}>
            Whether you donated a vehicle or partnered your nonprofit with us, your
            words help the next person give with confidence. Reviews are posted
            after a quick check by our team.
          </p>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.card}>
          <ShareStoryForm />
        </div>
      </section>
    </>
  );
}

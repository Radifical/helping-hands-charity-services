import NonprofitDirectory from "@/components/NonprofitDirectory";
import { site } from "@/lib/site";
import shell from "../page-shell.module.css";

export const metadata = {
  title: "Choose a Non-Profit",
  description:
    "Browse the nonprofits you can support with a vehicle donation through Helping Hands Charity Services, then donate a car to the cause that means the most to you.",
  alternates: { canonical: "/nonprofits" },
  openGraph: {
    title: `Choose a Non-Profit · ${site.name}`,
    description: "Find your cause and donate a car to support it.",
    url: `${site.url}/nonprofits`,
  },
};

export default function NonprofitsPage() {
  return (
    <>
      <section className={shell.intro}>
        <div className={shell.glow} aria-hidden="true" />
        <div className={`container ${shell.introInner}`}>
          <p className={shell.kicker}>Choose a non-profit</p>
          <h1 className={shell.h1}>Find your cause.</h1>
          <p className={`lead ${shell.lead}`}>
            Every nonprofit below receives an industry-leading share of your
            vehicle&apos;s value. Pick one to open its donation page, or call us
            to give to any nonprofit, even one not listed yet.
          </p>
        </div>
      </section>

      <section className={`container ${shell.body}`}>
        <NonprofitDirectory />
      </section>
    </>
  );
}

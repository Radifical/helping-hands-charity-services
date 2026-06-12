import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./ImpactStrip.module.css";

// Real donor photos to warm up the page.
const photos = [
  { src: "/people/donor-wave.jpg", alt: "A smiling donor waving from her car" },
  { src: "/people/adopt-dog.jpg", alt: "A rescue dog being adopted at a shelter" },
  { src: "/people/heart-keys.jpg", alt: "A donor making a heart with her car keys" },
  { src: "/people/couple-keys.jpg", alt: "A couple handing over their car keys" },
];

export default function ImpactStrip() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <Reveal className={styles.head}>
          <h2 className={`h2 ${styles.title}`}>Real cars. Real causes.</h2>
          <p className={`lead ${styles.sub}`}>
            Everyday vehicles, turned into funding for the nonprofits our donors
            love.
          </p>
        </Reveal>

        <Reveal className={styles.gallery}>
          {photos.map((p, i) => (
            <div key={p.src} className={`${styles.photo} ${styles["photo" + i]}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                quality={90}
                sizes="(max-width: 720px) 80vw, 360px"
                className={styles.img}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

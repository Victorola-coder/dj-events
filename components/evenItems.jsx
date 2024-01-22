import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/eventItems.module.css";

export default function EventItems({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
          loading="lazy"
          draggable={false}
        />
      </div>

      <div className={styles.info}>
        <span>{evt.date}</span> at {evt.time}
        <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <span className="btn">Details</span>
        </Link>
      </div>
    </div>
  );
}

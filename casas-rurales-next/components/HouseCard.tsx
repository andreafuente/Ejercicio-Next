import type { House } from "../app/types/house";
import Link from "next/link";
import Image from "next/image";
import styles from "./HouseCard.module.css";
interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>
        <Link href={`/houses/${house.id}`}>{house.name}</Link>
      </h2>
      <Image
        className={styles.image}
        src={`http://localhost:3001${house.image}`}
        alt={`Vista de ${house.name}`}
        width={400}
        height={250}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </article>
  );
}

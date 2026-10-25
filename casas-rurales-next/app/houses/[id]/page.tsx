import Link from "next/link";
import { ReviewCard } from "@/components/ReviewCard";
import type { House } from "../../types/house";
import Image from "next/image";
import styles from "./page.module.css";
import { ReserveButton } from "@/components/ReserveButton";

interface HouseDetailProps {
  params: Promise<{ id: string }>;
}

export default async function HouseDetailPage({ params }: HouseDetailProps) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3001/api/houses/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener la casa rural");
  }

  const house: House = await response.json();

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backLink}>
        Volver al listado
      </Link>

      <header className={styles.detailsHeader}>
        <h2 className={styles.title}>{house.name}</h2>

        <p className={styles.price}>{house.price} € / noche</p>
      </header>

      <div className={styles.details}>
        <div className={styles.imageContainer}>
          <Image
            src={`http://localhost:3001${house.image}`}
            alt={house.name}
            className={styles.image}
            width={800}
            height={350}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className={styles.information}>
          <section>
            <h3 className={styles.sectionTitle}>Descripción</h3>
            <p>{house.description}</p>
          </section>

          <section>
            <h3 className={styles.sectionTitle}>Dirección</h3>
            <p>{house.address}</p>
          </section>

          <section aria-label="Características">
            <ul className={styles.features}>
              <li>
                Habitaciones: <span className={styles.featureValue}>{house.bedrooms}</span>
              </li>
              <li>
                Camas: <span className={styles.featureValue}>{house.beds}</span>
              </li>
              <li>
                Baños:
                <span className={styles.featureValue}>{house.bathrooms}</span>
              </li>
            </ul>
          </section>
          <ReserveButton houseName={house.name} />
        </div>
      </div>

      <section className={styles.reviews}>
        <h3 className={styles.sectionTitle}>Reviews</h3>
        {house.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
    </main>
  );
}

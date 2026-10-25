import type { Review } from "@/app/types/house";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  review: Review;
}
function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

interface RatingProps {
  value: number;
  max?: number;
}

function Rating({ value, max = 5 }: RatingProps) {
  return (
    <span>
      <span aria-hidden="true">
        {"★".repeat(value)}
        {"☆".repeat(max - value)}
      </span>
      <span className={styles.srOnly}>
        {`Valoración: ${value} de ${max}`}
      </span>
    </span>
  );
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.author}>{review.author}</h3>

      <p className={styles.date}>
        <time dateTime={review.date}>
          {formatDate(review.date)}
        </time>
      </p>

      <p className={styles.rating}>
        <Rating value={review.rating} />
      </p>

      <p className={styles.comment}>{review.comment}</p>
    </article>
  );
}
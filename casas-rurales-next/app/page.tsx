import type { House } from "./types/house";
import { HouseSearch } from "../components/HouseSearch";
import styles from "./page.module.css";

export default async function HomePage() {
  const response = await fetch("http://localhost:3001/api/houses", {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    throw new Error("Error al obtener las casas rurales");
  }

  const houses: House[] = await response.json();

  return (
    <main className={styles.container}>
    <HouseSearch houses={houses} />
    </main>
  );
}

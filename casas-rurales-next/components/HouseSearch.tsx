"use client";

import { useState } from "react";
import { HouseCard } from "./HouseCard";
import type { House } from "@/app/types/house";
import styles from "./HouseSearch.module.css";

interface HouseSearchProps {
  houses: House[];
}

export function HouseSearch({ houses }: HouseSearchProps) {
  const [search, setSearch] = useState("");

  const filteredHouses = houses.filter((house) => {
    const query = search.trim().toLocaleLowerCase();

    return (
      house.name.toLocaleLowerCase().includes(query) ||
      house.address.toLocaleLowerCase().includes(query)
    );
  });

  return (
    <>
      <form className={styles.form} role="search" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="house-search">Buscar casas rurales:</label>

        <input className={styles.input}
          id="house-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Nombre o ubicación"
        />
        <button type="submit">Buscar</button>
      </form>

      {filteredHouses.length > 0 ? (
        <ul className={styles.grid}>
          {filteredHouses.map((house) => (
            <li key={house.id}>
              <HouseCard house={house} />
            </li>
          ))}
        </ul>
      ) : (
        <p role="status">
          No se han encontrado casas rurales que coincidan con la búsqueda.
        </p>
      )}
    </>
  );
}
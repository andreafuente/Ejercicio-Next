"use client";

import { useState } from "react";
import styles from "./ReserveButton.module.css";

interface ReserveButtonProps {
  houseName: string;
}

export function ReserveButton({ houseName }: ReserveButtonProps) {
  const [requested, setRequested] = useState(false);

  return (
    <div>
      <button className={styles.reserveButton}
        type="button"
        onClick={() => setRequested(true)}
        disabled={requested}
      >
        {requested ? "Solicitud iniciada" : "Reservar"}
      </button>

      {requested && (
        <p role="status">
          Has reservado {houseName}.
        </p>
      )}
    </div>
  );
}
import React, { useState } from "react";

export default function HomePage() {
  const [lang, setLang] = useState("it");
  const t = (it, en) => (lang === "it" ? it : en);

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ textAlign: "right" }}>
        <button onClick={() => setLang("it")}>🇮🇹</button>
        <button onClick={() => setLang("en")}>🇬🇧</button>
      </div>
      <h1>{t("Gestione Gara Roller Cross", "Roller Cross Race Manager")}</h1>
      <h2>{t("Iscrizione Atleti", "Athlete Registration")}</h2>
      <p>{t("Inserisci nome, società, anno di nascita e categoria.", "Enter name, team, year of birth and category.")}</p>
      <h2>{t("Qualifiche", "Qualification Runs")}</h2>
      <p>{t("Inserisci i tempi delle due run.", "Enter the two run times.")}</p>
    </div>
  );
}
import { Logo } from "../components/invernizzi/Logo";

export const PageInvernizzi = () => {
  return (
    <div>
      <Logo />
      <div>Giacomo Invernizzi</div>
      <p>
        Esercizio 3: avendo le modifiche già committate su master ho creato una
        nuova branch con git checkout -b e, dopo essermi riposizionato su
        master, ho eseguito il comando git reset --hard HEAD~1 per tornare
        indietro di una commit
      </p>
      <p>
        Esercizio 4: poichè questo commento l'ho aggiunto dopo il comando ho
        fatto semplicemente un git merge master --ff-only, altrimenti immagino
        che con un cherry-pick si riesca a ottenere lo stesso risultato avendo
        più controllo, però non avevo voglia di smattare con i vari conflitti di
        merge
      </p>
    </div>
  );
};

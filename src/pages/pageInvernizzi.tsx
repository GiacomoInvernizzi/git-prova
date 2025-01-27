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
      <p>Mozzarella sticks</p>
      <p>Carbonara</p>
      <p>Wellington steak</p>
      <p>Dorayaki</p>
      <p>
        Esercizio 5: uso git rebase -i HEAD~4 modificando il primo commento e
        squashando gli altri
      </p>
      <p>Fabrizio De Andre</p>
      <p>Harrison Ford</p>
      <p>Maradona</p>
      <p>
        Esercizo 6: è possibile farlo in git con git merge --squash nome_branch,
        altrimenti github permette di farlo al momento della merge di una pull
        request attraverso l'apposita opzione
      </p>
      <p>
        Esercizio 7: è possibile farlo attraverso il comando git commit --amend
      </p>
    </div>
  );
};

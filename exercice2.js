const valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    const element = valeurs[i];
    const affichage = element === "" ? "(chaine vide)" : String(element);
    const truthiness = element ? "truthy" : "falsy";
    console.log(`${affichage} -> ${truthiness}`);
}
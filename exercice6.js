let nom   = null;
let age   = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = [
    { label: "nom",   valeur: nom   },
    { label: "age",   valeur: age   },
    { label: "ville", valeur: ville },
    { label: "score", valeur: score },
    { label: "actif", valeur: actif }
];

const defaut = "valeur par défaut";

// Partie A — ??
console.log("=== Partie A — ?? ===");
for (let i = 0; i < variables.length; i++) {
    const { label, valeur } = variables[i];
    console.log(`${label} ?? "${defaut}" -> ${valeur ?? defaut}`);
}

// Partie B — ||
console.log("\n=== Partie B — || ===");
for (let i = 0; i < variables.length; i++) {
    const { label, valeur } = variables[i];
    console.log(`${label} || "${defaut}" -> ${valeur || defaut}`);
}

// Partie C — Comparaison
console.log("\n=== Partie C — Comparaison ===");
for (let i = 0; i < variables.length; i++) {
    const { label, valeur } = variables[i];
    const resultatNullish = valeur ?? defaut;
    const resultatOr      = valeur || defaut;
    const conclusion = resultatNullish === resultatOr ? "même résultat" : "résultat différent";
    console.log(`${label.padEnd(6)}: ?? et || -> ${conclusion}`);
}
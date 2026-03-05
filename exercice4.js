const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    const a = paires[i][0];
    const b = paires[i][1];

    const loose = a == b;
    const strict = a === b;

    if (loose !== strict) compteur++;

    const labelA = String(a) === "" ? '""' : JSON.stringify(a);
    const labelB = String(b) === "" ? '""' : JSON.stringify(b);

    const ligne = `${labelA} == ${labelB}`;
    console.log(`${ligne.padEnd(20)} -> ${String(loose).padEnd(6)} |   ${labelA} === ${labelB.padEnd(20)} -> ${strict}`);
}

console.log("---");
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);
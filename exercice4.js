const paires = [
    [0,         ""        ],
    [0,         "0"       ],
    [0,         false     ],
    ["",        false     ],
    [null,      undefined ],
    [null,      false     ],
    [NaN,       NaN       ],
    [1,         "1"       ],
    [" \t\n ",  0         ]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    const a = paires[i][0];
    const b = paires[i][1];

    const loose  = a == b;
    const strict = a === b;

    if (loose !== strict) compteur++;

    // Labels lisibles
    const labelA = a === undefined ? "undefined" : a === null ? "null" : JSON.stringify(a);
    const labelB = b === undefined ? "undefined" : b === null ? "null" : JSON.stringify(b);

    const gauche = `${labelA} == ${labelB}`;
    const droite = `${labelA} === ${labelB}`;

    console.log(`${gauche.padEnd(22)} -> ${String(loose).padEnd(6)} |   ${droite.padEnd(22)} -> ${strict}`);
}

console.log("---");
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);
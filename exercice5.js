const nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    const n = nombres[i];
    let categorie;

    if (Number.isNaN(n))                        categorie = "INVALIDE";
    else if (n === Infinity || n === -Infinity)  categorie = "INFINI";
    else if (1 / n === -Infinity)               categorie = "ZERO NEGATIF";
    else if (Number.isInteger(n) && !Number.isSafeInteger(n)) categorie = "ENTIER HORS LIMITES";
    else if (Number.isSafeInteger(n))           categorie = "ENTIER SUR";
    else                                        categorie = "DECIMAL";

    console.log(`${n} -> ${categorie}`);
}
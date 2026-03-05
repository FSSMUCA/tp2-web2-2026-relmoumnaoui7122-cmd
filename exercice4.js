const pairs = [
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

let count = 0;

pairs.forEach(([a, b]) => {
  const eq = (a == b);
  const seq = (a === b);

  if (eq === true && seq === false) {
    count++;
  }

  console.log(`${JSON.stringify(a)} == ${JSON.stringify(b)} -> ${eq} | ${JSON.stringify(a)} === ${JSON.stringify(b)} -> ${seq}`);
});

console.log("---");
console.log(`${count} paire(s) où == et === donnent des résultats différents`);


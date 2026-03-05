let nomProduit          = "Clavier mécanique";
let prix                = 89.99;
let quantite            = 3;
let codePromo           = null;
let reductionPourcentage = 10;
let estMembre           = true;
let soldeCompte         = 250;

// 1. Sous-total
let sousTotal = prix * quantite;
console.log(`1. Sous-total : ${sousTotal} MAD`);

// 2. Réduction (seulement si codePromo !== null ET estMembre === true)
let reduction = (codePromo !== null && estMembre) ? (sousTotal * reductionPourcentage / 100) : 0;
console.log(`2. Réduction  : ${reduction} MAD`);

// 3. Total final
let total = sousTotal - reduction;
console.log(`3. Total final: ${total} MAD`);

// 4. Vérification du solde
let paiementAccepte = soldeCompte >= total;
console.log(`4. ${paiementAccepte ? "Paiement accepté" : "Solde insuffisant"}`);

// 5. Nouveau solde si paiement accepté
let nouveauSolde = paiementAccepte ? soldeCompte - total : null;
console.log(`5. Nouveau solde : ${nouveauSolde ?? "N/A (paiement refusé)"} MAD`);

// 6. Récapitulatif
console.log(`
===== RÉCAPITULATIF =====
Produit   : ${nomProduit}
Quantité  : ${quantite}
Prix unit.: ${prix} MAD
Sous-total: ${sousTotal} MAD
Réduction : ${reduction} MAD
Total     : ${total} MAD
Statut    : ${paiementAccepte ? "Paiement accepté" : "Solde insuffisant"}
Solde     : ${nouveauSolde ?? soldeCompte} MAD
=========================`);
let nom               = "   Fatima   ";
let age               = "23";
let email             = "fatima@example";
let scoreJeu          = "150pts";
let estAdmin          = "false";
let derniereConnexion = null;
let nombreConnexions  = "0";

// Traitement
let nomCorrige       = nom.trim() || "Inconnu";
let ageCorrige       = parseInt(age);
let ageValide        = !Number.isNaN(ageCorrige) && ageCorrige > 0;
let atIndex          = email.indexOf("@");
let emailValide      = atIndex !== -1 && email.indexOf(".", atIndex) !== -1;
let scoreCorrige     = parseInt(scoreJeu) || 0;
let estAdminCorrige  = estAdmin === "true";
let connexionCorrige = derniereConnexion ?? "Jamais connecté";
let nbConnexions     = parseInt(nombreConnexions);
let connexionAffiche = nbConnexions === 0 ? "Aucune connexion" : nbConnexions;

// Rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageValide ? ageCorrige : "invalide"} (${ageValide ? "valide" : "invalide : NaN ou <= 0"})`);
console.log(`email            : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`);
console.log(`scoreJeu         : ${scoreCorrige} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${estAdminCorrige} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexionCorrige}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${connexionAffiche}" (${nbConnexions} après conversion)`);
console.log("================================");
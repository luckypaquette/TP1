/* Fonction */
function Calcul() {
    /* Déclaration des Variables */
    var NumeroAbonnement = (document.form.F_NumeroAbonnement.value)
    var NombreJours = parseInt(document.form.F_NombreJours.value)
    var NombreKw = parseInt(document.form.F_NombreKw.value)
    var MontantRedevance;
    var NombreKwBase;
    var MontantKwBase;
    var NombreKwExcedent;
    var MontantKwExcedent;
    var MontantKwBase;
    var SousTotal;
    var Taxe;
    var TotalGlobal;

    // Numéro d'abonné
    if (NumeroAbonnement == ``) {
        alert(`Veuillez Entrer votre Numéro d'abonné, selon le format XXXX 1234 5678.`)
        document.form.F_NumeroAbonnement.focus();
        return false;
    }
    // Nombre de jours
    // fonction Integer démonstration
    if (isNaN(NombreJours) || NombreJours == '') {
        Nombre = parsefloat(Nombre)
        if (!Number.isInteger(NombreJours))
            alert('Veuillez insérer un nombre de jours entier.');
        document.form.F_NombreJours.value = ''
        document.form.F_NombreJours.focus()
        return false;
    }
    // Nombre de jours
    // Alternative à la fonction integer en haut : retirer les barres obliques bas et en ajouter  en haut pour effectuer tests
    // if (isNaN(NombreJours) || NombreJours == '') {
    // alert(`Veuillez Entrer votre nombre de jours facturé, il doit contenir  des chiffres uniquemment.`)
    // document.form.F_NombreJours.focus()
    // return false;
    // }
    // Nombre de Kilowatts 
    // Kilowatts: Message d'erreur si le champ est laissé vide
    if (NombreKw == ``) {
        alert(`Veuillez Entrer le nombre de Kw facturé, Le champ est présentement vide`)
        document.form.F_NombreKw.focus()
        return false;
    }
    // Kilowatts: Message d'erreur si le champ contient des caractères n'étanty pas des nombres
    if (isNaN(NombreKw)) {
        alert(`Veuillez Entrer le nombre de Kw facturé, il doit contenir des chiffres uniquement`)
        document.form.F_NombreKw.focus()
        return false;
    }
    // Kilowatts: Message d'erreur si le champ contient un nombre inférieur à 100
    if (NombreKw < 100) {
        alert(`Veuillez Entrer le nombre de Kw facturé, Ce dernier doit être supérieur à 100 Kw`)
        document.form.F_NombreKw.focus()
        return false;
    }
    /* Prix de l'abonnement */
    MontantRedevance = NombreJours * 0.25;
    document.form.F_MontantRedevance.value = MontantRedevance;

    /* Nb Kw10 */
    NombreKwBase = 100;

    /* Nb Kw20 */
    NombreKwExcedent = NombreKw - NombreKwBase;

    /* Prix Kw10 */
    MontantKwBase = NombreKwBase * 0.10;
    document.form.F_MontantKwBase.value = MontantKwBase;

    /* Prix Kw20 */
    MontantKwExcedent = NombreKwExcedent * 0.20;
    document.form.F_MontantKwExcedent.value = MontantKwExcedent;

    /* Prix du Kilowattage total */
    MontantKwTotal = MontantKwBase + MontantKwExcedent;
    document.form.F_MontantKwTotal.value = MontantKwTotal;

    /* Sous-Total du Kw et Abon */
    SousTotal = MontantKwTotal + MontantRedevance;
    document.form.F_SousTotal.value = SousTotal;

    /* Taxe */
    Taxe = SousTotal * 0.10;
    document.form.F_MontantTaxe.value = Taxe;

    /* Total Global */
    TotalGlobal = SousTotal + Taxe;
    document.form.F_TotalGlobal.value = TotalGlobal;
}
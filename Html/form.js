function verification() {
    var f = document.formulaire;
    var nom = f.Nom.value;
    var prenom = f.Prenom.value;
    var age = f.Age.value;
    var commentaire = f.Commentaire.value;
    var mail = f.Email.value;
  
    var Ermail = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/
    var Erage = /[0-9]{3}/;// 3 chiffres, pas moins ?! wow c'est un site pour centenaires ;-)
    var erreurs = [];
  
    if (!nom) erreurs.push("Le nom n'est pas renseigné.");
    if (!prenom) erreurs.push("Le prénom n'est pas renseigné.");
    if (!age) erreurs.push("L'âge n'est pas renseigné.");
    if (!mail) erreurs.push("L'email n'est pas renseigné.");
    if (!commentaire) erreurs.push("Le commentaire n'est pas renseigné.");
    if (mail && Ermail.test(mail)) erreurs.push("Le format de l'email n'est pas valide.");
    if (age && Erage.test(age)) erreurs.push("L'âge doit être composé de chiffres exactement.");
    if (erreurs.length > 0) {
       alert("Le formulaire n'a pas pu être validé car :\n\n" + erreurs.join("\n"));
    }
    return (erreurs.length == 0);
 }
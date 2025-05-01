
const equipes = [
    "REAL MADRID","BARCELONE","LIVERPOOL","MAN UNITED","CHELSEA",
    "ARSENAL","BAYERN MUNICH","PSG","JUVENTUS","AC MILAN",
    "INTER","MAN CITY","ATM","NAPOLI","DORTMUND","TOTTENHAM",
    "AJAX","ROMA","SEVILLE","LAZIO","PORTO","BENFICA","GALA",
    "CELTIC","VALENCE"
];

let equipesRestantes = [...equipes];

function tirerEquipes() {
    const nombre = parseInt(document.getElementById("nombre").value);
    const resultatDiv = document.getElementById("resultat");
    const controleDiv = document.getElementById("controle");

    if (nombre > equipesRestantes.length || nombre <= 0) {
        resultatDiv.innerHTML = `<p>Choisis un nombre entre 1 et ${equipesRestantes.length}</p>`;
        return;
    }

    //Melanger les equipes restantes 
    const melange =equipesRestantes.sort(() => 0.5  - Math.random());

    //Selectionner les equipes 
    const selection = melange.slice(0, nombre);

    //Mettre à jour les esuipes restantes 
    equipesRestantes = equipesRestantes.filter(eq => !selection.includes(eq));

    //Afficher 
    console.log(selection);
    resultatDiv.innerHTML = "<h3>Equipes tirées :</h3><ul>" +
      selection.map(equipe => `<li>${equipe}</li>`).join('') + "</ul>";
    
    //Montrer les boutons oui/non
    controleDiv.style.display = "block";  

}

function recommencer(aGagne) {
    const controleDiv = document.getElementById("controle");
    if (aGagne) {
        const continuer = confirm("Voulez-vous continuez le jeu ?");
    if (continuer){
        equipesRestantes = [...equipes];
        document.getElementById("resultat").innerHTML = "";
    } else {
        alert("Merci d'avoir joué !");
        document.getElementById("resultat").innerHTML = "<p>Fin du jeu.</p>";
    }
}

  controleDiv.style.display = "none";
}

function reinitialiser() {
    equipesRestantes = [...equipes];
    document.getElementById("resultat").innerHTML ="";
    document.getElementById("controle").style.display = "none";

const equipes = [
    "REAL MADRID","BARCELONE","LIVERPOOL","MAN UNITED","CHELSEA",
    "ARSENAL","BAYERN MUNICH","PSG","JUVENTUS","AC MILAN",
    "INTER","MAN CITY","ATM","NAPOLI","DORTMUND","TOTTENHAM",
    "AJAX","ROMA","SEVILLE","LAZIO","PORTO","BENFICA","GALA",
    "CELTIC","VALENCE"
];

let equipesRestantes = [...equipes];

function tirerEquipes() {
    const nombre = parseInt(document.getElementById("nombre").value);
    const resultatDiv = document.getElementById("resultat");
    const controleDiv = document.getElementById("controle");

    if (nombre > equipesRestantes.length || nombre <= 0) {
        resultatDiv.innerHTML = `<p>Choisis un nombre entre 1 et ${equipesRestantes.length}</p>`;
        return;
    }

    //Melanger les equipes restantes 
    const melange =equipesRestantes.sort(() => 0.5  - Math.random());

    //Selectionner les equipes 
    const selection = melange.slice(0, nombre);

    //Mettre à jour les esuipes restantes 
    equipesRestantes = equipesRestantes.filter(eq => !selection.includes(eq));

    //Afficher 
    console.log(selection);
    resultatDiv.innerHTML = "<h3>Equipes tirées :</h3><ul>" +
      selection.map(equipe => `<li>${equipe}</li>`).join('') + "</ul>";
    
    //Montrer les boutons oui/non
    controleDiv.style.display = "block";  
    

}

function recommencer(aGagne) {
    const controleDiv = document.getElementById("controle");
    if (aGagne) {
        const continuer = confirm("Voulez-vous continuez le jeu ?");
    if (continuer){
        equipesRestantes = [...equipes];
        document.getElementById("resultat").innerHTML = "";
    } else {
        alert("Merci d'avoir joué !");
        document.getElementById("resultat").innerHTML = "<p>Fin du jeu.</p>";
    }
}

  controleDiv.style.display = "none";
}

function reinitialiser() {
    equipesRestantes = [...equipes];
    document.getElementById("resultat").innerHTML ="";
    document.getElementById("controle").style.display = "none";
}
}
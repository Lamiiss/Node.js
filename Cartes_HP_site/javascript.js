//*************************API***************************/
let data;

function fetchHP(id) {

  return fetch('https://hp-api.lainocs.fr/characters/' + id)
    .then((response) => response.json())
}

function fetchHPAll() {
  return fetch('https://hp-api.lainocs.fr/characters/')
    .then((response) => response.json())
}

/*affichage nom des personnages sur page d'Accueil*/
async function displayHPAllA() {
  data = await fetchHPAll()

  document.getElementById('harry-name').innerHTML = `
      <h1>${data[0].name}</h1>
      `;

  document.getElementById('hermione-name').innerHTML = `
      <h1>${data[3].name}</h1>
      `;

  document.getElementById('ron-name').innerHTML = `
      <h1>${data[1].name}</h1>
      `;

  document.getElementById('luna-name').innerHTML = `
      <h1>${data[15].name}</h1>
      `;

  document.getElementById('cho-name').innerHTML = `
      <h1>${data[16].name}</h1>
      `;

  document.getElementById('gilderoy-name').innerHTML = `
      <h1>${data[14].name}</h1>
      `;

  document.getElementById('cedric-name').innerHTML = `
      <h1>${data[11].name}</h1>
      `;

  document.getElementById('nymphadora-name').innerHTML = `
      <h1>${data[20].name}</h1>
      `;

  document.getElementById('severus-name').innerHTML = `
      <h1>${data[5].name}</h1>
      `;

  document.getElementById('draco-name').innerHTML = `
      <h1>${data[2].name}</h1>
      `;

  document.getElementById('lord-name').innerHTML = `
      <h1>${data[7].name}</h1>
      `;


}

displayHPAllA()

/*affichage nom des personnages sur page de Détails*/
async function displayHPAllD() {
  data = await fetchHPAll()

  document.getElementById('harry-name-details').innerHTML = `
      <h1>${data[0].name}</h1>
      `;

  document.getElementById('hermione-name-details').innerHTML = `
      <h1>${data[3].name}</h1>
      `;

  document.getElementById('ron-name-details').innerHTML = `
      <h1>${data[1].name}</h1>
      `;

  document.getElementById('luna-name-details').innerHTML = `
      <h1>${data[15].name}</h1>
      `;

  document.getElementById('cho-name-details').innerHTML = `
      <h1>${data[16].name}</h1>
      `;

  document.getElementById('gilderoy-name-details').innerHTML = `
      <h1>${data[14].name}</h1>
      `;

  document.getElementById('cedric-name-details').innerHTML = `
      <h1>${data[11].name}</h1>
      `;

  document.getElementById('nymphadora-name-details').innerHTML = `
      <h1>${data[20].name}</h1>
      `;

  document.getElementById('severus-name-details').innerHTML = `
      <h1>${data[5].name}</h1>
      `;

  document.getElementById('draco-name-details').innerHTML = `
      <h1>${data[2].name}</h1>
      `;

  document.getElementById('lord-name-details').innerHTML = `
      <h1>${data[7].name}</h1>
      `;


}

displayHPAllD()


/*affichage les informations des personnages sur page de Détails*/
async function displayHPAllD2() {
  data = await fetchHPAll()
  let birthday = data[0].birthday.slice(0, -14)


  document.getElementById('harry-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[0].blood}</h1>
      <h1>${data[0].role}</h1>
      <h1>${data[0].actor}</h1>
      `;

  document.getElementById('hermione-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[3].blood}</h1>
      <h1>${data[3].role}</h1>
      <h1>${data[3].actor}</h1>
      `;

  document.getElementById('ron-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[1].blood}</h1>
      <h1>${data[1].role}</h1>
      <h1>${data[1].actor}</h1>
      `;

  document.getElementById('luna-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[15].blood}</h1>
      <h1>${data[15].role}</h1>
      <h1>${data[15].actor}</h1>
      `;

  document.getElementById('cho-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[16].blood}</h1>
      <h1>${data[16].role}</h1>
      <h1>${data[16].actor}</h1>
      `;

  document.getElementById('gilderoy-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[14].blood}</h1>
      <h1>${data[14].role}</h1>
      <h1>${data[14].actor}</h1>
      `;

  document.getElementById('cedric-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[11].blood}</h1>
      <h1>${data[11].role}</h1>
      <h1>${data[11].actor}</h1>
      `;

  document.getElementById('nymphadora-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[20].blood}</h1>
      <h1>${data[20].role}</h1>
      <h1>${data[20].actor}</h1>
      `;

  document.getElementById('severus-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[5].blood}</h1>
      <h1>${data[5].role}</h1>
      <h1>${data[5].actor}</h1>
      `;

  document.getElementById('draco-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[2].blood}</h1>
      <h1>${data[2].role}</h1>
      <h1>${data[2].actor}</h1>
      `;

  document.getElementById('lord-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[7].blood}</h1>
      <h1>${data[7].role}</h1>
      <h1>${data[7].actor}</h1>
      `;


}

displayHPAllD2()





//***********************menu burger******************//
function toggleNav() {
  var nav = document.querySelector('nav');
  nav.style.left = (nav.style.left === '0px') ? '-250px' : '0px';
}


// Fonction de recherche 
function effectuerRecherche() {
  var searchTerm = document.getElementById('champsRecherche').value;
  var resultsDiv = document.getElementById('resultatsRecherche');

  // Afficher la phrase "Résultat de recherche"
  resultsDiv.innerHTML = 'Résultats de la recherche pour : ' + searchTerm;
}

//tout ce qui en lien avec la recherche de carte

// test code recherche de carte
//document.getElementById('searchInput').addEventListener('keyup', effectuerRecherche);



/***************************icones******************************** */

function scrollToElementSmooth(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


/***************************** formulaire d'inscription (pas encore fonctionnel) **********************************/


const formInscription = document.querySelector('.form_inscription')

formInscription.addEventListener("submit", (event) => {
    event.preventDefault()
    let pseudo = document.querySelector('#inscription_pseudo').value
    let email = document.querySelector('#inscription_email').value
    let password = document.querySelector('#inscription_password').value

    const data =  {
        pseudo: pseudo,
        email: email,
        password: password
    }

    console.log(JSON.stringify(data))

    fetch("http://192.168.1.66:3000/auth/signUp", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)


    })
    .catch(e=> console.log(e))

});



// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let errorContainer = document.querySelector(".message-error");
//   let errorList = document.querySelector(".message-error ul");

//   errorList.innerHTML = "";
//   errorContainer.classList.remove("visible");

//   let email = document.querySelector("#email");
//   if (email.value === "") {
//     errorContainer.classList.add("visible");
//     email.classList.remove("success");

//     let err = document.createElement("li");
//     err.innerText = "Le champ email ne doit pas être vide";

//     errorList.appendChild(err);
//   } else {
//     email.classList.add("success");
//   }

//   let pseudo = document.querySelector("#pseudo");
//   if (pseudo.value.length < 6) {
//     errorContainer.classList.add("visible");
//     pseudo.classList.remove("success");

//     let err = document.createElement("li");
//     err.innerText = "Le pseudo doit avoir au moins 6 caractères";

//     errorList.appendChild(err);
//   } else {
//     pseudo.classList.add("success");
//   }

//   let passCheck = new RegExp(
//     "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
//   );

//   let password = document.querySelector("#password");
//   if (password.value.length < 10 || passCheck.test(password.value) === false) {
//     errorContainer.classList.add("visible");
//     password.classList.remove("success");

//     let err = document.createElement("li");
//     err.innerText =
//       "Le mot de passe doit avoir au moins 10 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial";

//     errorList.appendChild(err);
//   } else {
//     password.classList.add("success");
//   }



//   let successContainer = document.querySelector('.message-success')
//   successContainer.classList.remove('visible')

//   if (
//     email.classList.contains('success') &&
//     pseudo.classList.contains('success') &&
//     password.classList.contains('success') 
    
//   ) {
//     successContainer.classList.add('visible')
//   }
// });


/*****************************************************************************************/

/***************************** formulaire de connexion (pas encore fonctionnel) **********************************/


const form = document.querySelector('.form_connexion');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pseudo = document.querySelector('#connexion_pseudo').value;
    const email = document.querySelector('#connexion_email').value;
    const password = document.querySelector('#connexion_password').value;

    const data = {
        pseudo: pseudo,
        email: email,
        password: password
    };

    console.log(JSON.stringify(data));

    fetch("http://192.168.1.66/auth/login", {

    method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        
        if (!res.ok) {
            throw new Error("Erreur lors de la connexion");
        }
        
        return res.json();
    })
    .then(data => {
        
        console.log(data);
        const pseudoDiv = document.getElementById("pseudoDiv");

        // Redirection vers la Page Profil
        window.location.href = "index2.html";
    })
    .catch(error => {
        // Erreurs
        console.error("Erreur:", error.message);
    });
});





/************************************* formulaire d'échanges (pas encore fonctionnel) ****************************************************/

function afficherFormulaire() {
  // Afficher l'overlay
  document.getElementById('overlay').style.display = 'flex';
}

function fermerFormulaire() {
  // Cacher l'overlay
  document.getElementById('overlay').style.display = 'none';
}



/*************************** cartes variables ***********************************/ 

// var cartes = [
//   { name: "Harry Potter", house: "Gryffondor", number: 1 },
//   { name: "Hermione Granger", house: "Gryffondor", number: 2 },
//   { name: "Ron Weasley", house: "Gryffondor", number: 3 },
//   { name: "Luna Lovegood", house: "Ravenclaw", number: 4 },
//   { name: "Cho Chang", house: "Ravenclaw", number: 5 },
//   { name: "Gilderoy Lockhart", house: "Ravenclaw", number: 6 },
//   { name: "Cedric Diggory", house: "Hufflepuff", number: 7 },
//   { name: "Nymphadora Tonks", house: "Hufflepuff", number: 8 },
//   { name: "Newt Scamander", house: "Hufflepuff", number: 9 },
//   { name: "Severus Snape", house: "Slytherin", number: 10 },
//   { name: "Draco Malfoy", house: "Slytherin", number: 11 },
//   { name: "Lord Voldemort", house: "Slytherin", number: 12 }
// ];


// // Tableau contenant les chemins vers les images de chaque carte
// var chemins = [
//   "images/Carte_HP_1.png",
//   "images/Carte_HP_2.png",
//   "images/Carte_HP_3.png",
//   "images/Carte_HP_4.png",
//   "images/Carte_HP_5.png",
//   "images/Carte_HP_6.png",
//   "images/Carte_HP_7.png",
//   "images/Carte_HP_8.png",
//   "images/Carte_HP_9.png",
//   "images/Carte_HP_10.png",
//   "images/Carte_HP_11.png",
//   "images/Carte_HP_12.png"
// ];

// // Supposons que vous avez un conteneur avec l'id "cartes-container" dans votre HTML
// var containerGryffindor = document.getElementById("gryffindor-cards");
// var containerRavenclaw = document.getElementById("ravenclaw-cards");
// var containerHufflepuff = document.getElementById("hufflepuff-cards");
// var containerSlytherin = document.getElementById("slytherin-cards");

// // Boucle à travers les cartes et crée des éléments d'image pour chaque carte
// cartes.forEach(function(carte) {
//     var img = document.createElement("img");
//     img.src = "images/Carte_HP_" + carte.number + ".png"; // Assurez-vous que vos images sont nommées de manière appropriée
//     img.alt = carte.name;
//     img.title = carte.name + " - " + carte.house;

//     // Ajoutez l'image à la div correspondante en fonction de la maison de la carte
//     if (carte.house === "Gryffindor") {
//         containerGryffindor.appendChild(img);
//     } else if (carte.house === "Ravenclaw") {
//         containerRavenclaw.appendChild(img);
//     } else if (carte.house === "Hufflepuff") {
//         containerHufflepuff.appendChild(img);
//     } else if (carte.house === "Slytherin") {
//         containerSlytherin.appendChild(img);
//     }
// });

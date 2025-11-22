
//ajouter un employe
let ajouterEmploye = document.getElementById('ajouterEmploye');
let formulaire = document.getElementById('formulaire');

ajouterEmploye.addEventListener('click', () => {
    formulaire.classList.remove('hidden');
    EmployeAffiche.classList.add('hidden');

});

//validation des input des formulaire
let btn_envoyer = document.getElementById('btn_envoyer');
let dateDu = document.getElementById("dateDu");
let dateLi = document.getElementById("dateLi");

let utilisateur = JSON.parse(localStorage.getItem("utilisateur")) || [];

function validationForm() {

    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();

        const objetInfo = {
            nom: document.getElementById("nome").value.trim(),
            email: document.getElementById("email").value.trim(),
            telephone: document.getElementById("telephone").value.trim(),
            experiences: document.getElementById("Experiences").value.trim(),
            role: document.getElementById("role").value.trim(),
            url: document.getElementById("url").value.trim(),
            inputEXP: document.querySelectorAll(".experience-input").value.trim()

        };

        // validation des champs vides
        if (!objetInfo.nom || !objetInfo.email || !objetInfo.telephone || !objetInfo.experiences || !objetInfo.role || !objetInfo.url || !objetInfo.inputEXP) {
            alert("Remplir tous les champs !!");
            return;
        }

        // validation date
        if (dateDu.value >= dateLi.value) {
            alert("La date de début doit être avant la date de fin.");
            return;  // très important !
        }

        // validation nom
        const nomRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
        if (!nomRegex.test(objetInfo.nom)) {
            alert("Nom incorrect !");
            return;
        }

        // validation email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailRegex.test(objetInfo.email)) {
            alert("Email incorrect !");
            return;
        }

        // validation telephone
        const telephoneRegex = /^\+212[0-9]{9}$/;
        if (!telephoneRegex.test(objetInfo.telephone)) {
            alert("Téléphone incorrect !");
            return;
        }

        // validation experience
        if (objetInfo.experiences.length < 10) {
            alert("Remplissez une vraie expérience (au moins 10 caractères) !");
            return;
        }
        //validation de la formulaire dynamique 

        //validation de url
        const validImageUrl = /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i;
        if (!validImageUrl.test(objetInfo.url)) {
            alert("url incorrect !");
            return;
        }
        // stokes dans local storeg
        utilisateur.push(objetInfo);
        localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
        alert("Utilisateur ajouté !");
        formulaire.reset();

    })
};

validationForm();
afficherUtilisateurs();



let btnPlus = document.getElementById("btn_plus");
btnPlus.addEventListener('click', function () {

    // EXPERIENCE
    const experienceInput = document.createElement("input");
    experienceInput.type = "text";
    experienceInput.className = "experience-input border border-solid border-black rounded px-5 py-2 my-1";
    experienceInput.placeholder = "Ajouter autre expérience";
    ExperiencesContainer.appendChild(experienceInput);

    // DATE DEBUT
    const labeldebut = document.createElement("p");
    labeldebut.textContent = 'Date de début :';
    labeldebut.className = 'font-semibold';
    ExperiencesContainer.appendChild(labeldebut);

    const dateDuInput = document.createElement("input");
    dateDuInput.type = "date";
    dateDuInput.className = "date-du rounded px-5 py-2 my-1 border";
    ExperiencesContainer.appendChild(dateDuInput);

    // DATE FIN
    const labellimite = document.createElement("p");
    labellimite.textContent = 'Date de fin :';
    labellimite.className = 'font-semibold';
    ExperiencesContainer.appendChild(labellimite);

    const dateLiInput = document.createElement("input");
    dateLiInput.type = "date";
    dateLiInput.className = "date-li rounded px-5 py-2 my-1 border";
    ExperiencesContainer.appendChild(dateLiInput);

});


function afficherUtilisateurs() {
    const div = document.getElementById("affichageData");
    const data = localStorage.getItem("utilisateur");
    let utilisateurData = data ? JSON.parse(data) : [];
    div.innerHTML = ""; // vider le div

    if (utilisateurData.length === 0) {
        div.textContent = "Aucun utilisateur trouvé.";
    } else {
        utilisateurData.forEach((user, index) => {
            div.innerHTML += `
                <div class="employe block">
                  <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                  <p>Nom: ${user.nom}</p>
                  <p>Role: ${user.role}</p>
                </div>
            `;
        });
    }
}
function detalDeChaqueUser() {
    let employes = document.querySelectorAll(".employe");
    let toutlesinfo = document.getElementById("toutlesinfo");

    employes.forEach((employe, index) => {
        employe.addEventListener('click', () => {
            const user = utilisateur[index];
            toutlesinfo.style.display = 'block';
            toutlesinfo.innerHTML = `
        <div class="m-10">
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <p>Nom: ${user.nom}</p>
                <p>Role: ${user.role}</p>
                <p>Téléphone: ${user.telephone}</p>
                <p>Expériences: ${user.experiences}</p>
                <p>Autres experience : ${user.inputEXP}</p>
                <button id="fermerInfoTout" class=" p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
        </div>  
        `;
            let fermerInfoTout = document.getElementById("fermerInfoTout");
            fermerInfoTout.addEventListener('click', (e) => {
                toutlesinfo.style.display = 'none';
            })
        });
    });

}
detalDeChaqueUser();

// ==========================
// AJOUTER un employé dans la zone Conférence
// ==========================
function ajoutePremierZone() {
    const limiteconference = 5;
    let countconference = 0;
    const rolesAutorises = ["manager", "reception", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_conference = document.getElementById("btn_conference");

    btn_conference.addEventListener('click', () => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = "";

        utilisateur.forEach((user) => {
            InfoContinaire.innerHTML += `
                <div class="empDiv rounded-2xl p-2 bg-white">
                    <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
        });

        // Bouton fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', () => InfoContinaire.classList.add('hidden'));

        // Ajouter listener pour chaque employé
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i]; // capture le user directement
            div.addEventListener('click', () => {
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countconference >= limiteconference) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user p-3 bg-white rounded-xl relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                    <img src="${user.url}" class="w-16 h-16 rounded-full">
                    <p>${user.nom}</p>
                    <p>${user.role}</p>
                `;
                conference.appendChild(userDiv);
                countconference++;
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    userDiv.remove();
                    countconference--;
                });
            });
        });
    });
}
ajoutePremierZone();


// ==========================
// Zone Sécurité
// ==========================
function ajouteDeusZone() {
    const limiteSecurite = 3;
    let countSecurite = 0;
    const rolesAutorises = ["salle_securite", "manager", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_securite = document.getElementById("btn_securite");

    btn_securite.addEventListener('click', () => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = "";

        utilisateur.forEach((user) => {
            InfoContinaire.innerHTML += `
                <div class="empDiv rounded-2xl p-2 bg-white">
                    <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
        });

        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', () => InfoContinaire.classList.add('hidden'));

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', () => {
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countSecurite >= limiteSecurite) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user p-3 bg-white rounded-xl relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                    <img src="${user.url}" class="w-16 h-16 rounded-full">
                    <p>${user.nom}</p>
                    <p>${user.role}</p>
                `;
                securite.appendChild(userDiv);
                countSecurite++;
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    userDiv.remove();
                    countSecurite--;
                });
            });
        });
    });
}
ajouteDeusZone();


// ==========================
// Zone Serveurs
// ==========================
function ajouteTroiZone() {
    const limiteserveurs = 3;
    let countserveurs = 0;
    const rolesAutorises = ["salle_serveurs", "manager", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_serveurs = document.getElementById("btn_serveurs");

    btn_serveurs.addEventListener('click', () => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = "";

        utilisateur.forEach((user) => {
            InfoContinaire.innerHTML += `
                <div class="empDiv rounded-2xl p-2 bg-white">
                    <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
        });

        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', () => InfoContinaire.classList.add('hidden'));

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', () => {
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countserveurs >= limiteserveurs) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user p-3 bg-white rounded-xl relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                    <img src="${user.url}" class="w-16 h-16 rounded-full">
                    <p>${user.nom}</p>
                    <p>${user.role}</p>
                `;
                serveurs.appendChild(userDiv);
                countserveurs++;
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    userDiv.remove();
                    countserveurs--;
                });
            });
        });
    });
}
ajouteTroiZone();


// ==========================
// Zone Réception
// ==========================
function ajouteQuatreZone() {
    const limiteReception = 3;
    let countReception = 0;
    const rolesAutorises = ["reception", "manager", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_Reception = document.getElementById("btn_Reception");

    btn_Reception.addEventListener('click', () => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = "";

        utilisateur.forEach((user) => {
            InfoContinaire.innerHTML += `
                <div class="empDiv rounded-2xl p-2 bg-white">
                    <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
        });

        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', () => InfoContinaire.classList.add('hidden'));

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', () => {
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countReception >= limiteReception) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user p-3 bg-white rounded-xl relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                    <img src="${user.url}" class="w-16 h-16 rounded-full">
                    <p>${user.nom}</p>
                    <p>${user.role}</p>
                `;
                Reception.appendChild(userDiv);
                countReception++;
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    userDiv.remove();
                    countReception--;
                });
            });
        });
    });
}
ajouteQuatreZone();


// ==========================
// Zone Personnel
// ==========================
function ajouteCinqueZone() {
    const limitepersonnel = 3;
    let countpersonnel = 0;
    const rolesAutorises = ["manager", "reception", "serveur", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_personnel = document.getElementById("btn_personnel");

    btn_personnel.addEventListener('click', () => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = "";

        utilisateur.forEach((user) => {
            InfoContinaire.innerHTML += `
                <div class="empDiv rounded-2xl p-2 bg-white">
                    <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
        });

        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', () => InfoContinaire.classList.add('hidden'));

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', () => {
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countpersonnel >= limitepersonnel) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user p-3 bg-white rounded-xl relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                    <img src="${user.url}" class="w-16 h-16 rounded-full">
                    <p>${user.nom}</p>
                    <p>${user.role}</p>
                `;
                personnel.appendChild(userDiv);
                countpersonnel++;
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    userDiv.remove();
                    countpersonnel--;
                });
            });
        });
    });
}
ajouteCinqueZone();


// ==========================
// Zone Archives
// ==========================
function ajouteSiseZone() {
    const limitearchives = 1;
    let countarchives = 0;
    const rolesAutorises = ["manager", "reception", "serveur"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_archives = document.getElementById("btn_archives");

    btn_archives.addEventListener('click', () => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = "";

        utilisateur.forEach((user) => {
            InfoContinaire.innerHTML += `
                <div class="empDiv rounded-2xl p-2 bg-white">
                    <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
        });

        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', () => InfoContinaire.classList.add('hidden'));

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', () => {
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countarchives >= limitearchives) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user p-3 bg-white rounded-xl relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                    <img src="${user.url}" class="w-16 h-16 rounded-full">
                    <p>${user.nom}</p>
                    <p>${user.role}</p>
                `;
                archives.appendChild(userDiv);
                countarchives++;
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    userDiv.remove();
                    countarchives--;
                });
            });
        });
    });
}
ajouteSiseZone();

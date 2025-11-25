
//ajouter un employe
let ajouterEmploye = document.getElementById('ajouterEmploye');
let formulaire = document.getElementById('formulaire');
let btn_envoyer = document.getElementById('btn_envoyer');
let dateDu = document.getElementById("dateDu");
let dateLi = document.getElementById("dateLi");
let utilisateur = JSON.parse(localStorage.getItem("utilisateur")) || [];
let zone1 = document.getElementById("zone1");
let zone2 = document.getElementById("zone2");
let zone3 = document.getElementById("zone3");
let zone4 = document.getElementById("zone4");
let zone5 = document.getElementById("zone5");
let zone6 = document.getElementById("zone6");


ajouterEmploye.addEventListener('click', (e) => {
    e.preventDefault();
    formulaire.classList.remove('hidden');
});
fermerFormulaire.addEventListener('click', (e) => {
    e.preventDefault();
    formulaire.classList.add('hidden');
});



//validation des input des formulaire
function validationForm() {

    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();

        const objetInfo = {
            nom: document.getElementById("nome").value.trim(),
            email: document.getElementById("email").value.trim(),
            telephone: document.getElementById("telephone").value.trim(),
            experiences: document.getElementById("Experiences").value.trim(),
            role: document.getElementById("role").value.trim(),
            url: document.getElementById("url").value.trim()

        };

        // validation des champs vides
        if (!objetInfo.nom || !objetInfo.email || !objetInfo.telephone || !objetInfo.experiences || !objetInfo.role || !objetInfo.url) {
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

function formulaireDynamique() {
    let btnPlus = document.getElementById("btn_plus");
    btnPlus.addEventListener('click', (e) => {
        e.preventDefault();
        // EXPERIENCE
        const experienceInput = document.createElement("input");
        experienceInput.type = "text";
        experienceInput.className = "experience-input border border-solid border-black rounded px-5 py-2 my-1";
        experienceInput.placeholder = "Ajouter autre expérience";
        ExperiencesContainer.appendChild(experienceInput);
        if (experienceInput === "" || experienceInput.length < 10) {
            alert('Remplir experiences !!');
            return;
        };

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
        if (dateDuInput.value >= dateLiInput.value) {
            alert("La date de début doit être avant la date de fin.");
            return;
        }


    });
}
formulaireDynamique();


//affichage
const div = document.getElementById("affichageData");
const utilisateurs = JSON.parse(localStorage.getItem("utilisateur")) || [];
function afficherUtilisateurs() {

    if (utilisateurs.length === 0) {
        div.innerHTML = `<p class="text-gray-500 italic">Aucun utilisateur trouvé.</p>`;
    } else {
        let html = "";
        for (let i = 0; i < utilisateurs.length; i++) {
            let user = utilisateurs[i];
            if (user.assign != true) {
                html += `
                <div id="emp-${user.id}" class="employe block">
                    <img src="${user.url}" class="md:w-16 md:h-16 sm:w-14 sm:h-14 w-10 h-10 rounded-full md:mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                </div>
            `;
            }
        }
        div.innerHTML = html;
    }
}

afficherUtilisateurs();


function detalDeChaqueUser() {
    let employes = document.querySelectorAll(".employe");
    let toutlesinfo = document.getElementById("toutlesinfo");

    for (let i = 0; i < employes.length; i++) {
        employes[i].addEventListener('click', function (e) {
            e.preventDefault();

            const user = utilisateur[i]; 

            // afficher les informations
            toutlesinfo.style.display = "block";
            toutlesinfo.innerHTML = `
                <div class="m-10">
                    <img src="${user.url}" class="md:w-16 md:h-16 w-20 h-20 rounded-full mb-2">
                    <p>Nom: ${user.nom}</p>
                    <p>Role: ${user.role}</p>
                    <p>Téléphone: ${user.telephone}</p>
                    <p>Expériences: ${user.experiences}</p>
                    <p>Autres experience : ${user.inputEXP}</p>
                    <button id="fermerInfoTout" class="p-2 bg-red-700 w-7 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                </div>
            `;

            // fermer 
            let fermerInfoTout = document.getElementById("fermerInfoTout");
            fermerInfoTout.addEventListener('click', function(e) {
                e.preventDefault();
                toutlesinfo.style.display = "none";
            });
        });
    }
}

detalDeChaqueUser();



// ajouter un employé dans premier zone ------------------------------
function ajoutePremierZone() {
    const limiteconference = 5;
    let countconference = 0;
    const rolesAutorises = ["manager", "reception", "nettoyage", "autres", "salle_serveurs", "salle_securite"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_conference = document.getElementById("btn_conference");

    btn_conference.addEventListener('click', (e) => {
        e.preventDefault();
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
        effacer.addEventListener('click', (e) => {
            e.preventDefault();
            InfoContinaire.classList.add('hidden')
        });

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', (e) => {
                e.preventDefault();
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countconference >= limiteconference) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }

                const userDiv = document.createElement("div");
                userDiv.className = "bg-white rounded-xl w-[5rem] h-[5rem] relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment bg-red-700 w-2 h-6 border-xl rounded text-white absolute ml-18 flex justify-centre items-centre">x</button>
                    <img src="${user.url}" class="w-10 h-10 rounded-full">
                    <p class="text-xs truncate">${user.nom}</p>
                    <p class="text-xs truncate">${user.role}</p>
                `;

                const zone = document.getElementById("conference");
                zone.style.background = "none";
                zone1.appendChild(userDiv);

                utilisateurs[i].assign = true;
                afficherUtilisateurs();

                countconference++;
                div.remove();

                InfoContinaire.classList.add('hidden');
               
                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', (e) => {
                    e.preventDefault();
                    userDiv.remove();
                    utilisateurs[i].assign = false;
                    afficherUtilisateurs();
                    countconference--;

                });
            });
        });
    });
}
ajoutePremierZone();



// ajouter un employé dans deusieme zone----------------------------------------
function ajouteDeusZone() {
    const limiteSecurite = 3;
    let countSecurite = 0;
    const rolesAutorises = ["salle_securite", "manager", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_securite = document.getElementById("btn_securite");

    btn_securite.addEventListener('click', (e) => {
        e.preventDefault();
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
        effacer.addEventListener('click', (e) => {
            e.preventDefault();
            InfoContinaire.classList.add('hidden')
        });

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', (e) => {
                e.preventDefault();
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countSecurite >= limiteSecurite) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");

                userDiv.className = "user bg-white rounded-xl w-[5rem] h-[5rem] relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment bg-red-700 w-2 h-6 border-xl rounded text-white absolute ml-18 flex justify-centre items-centre">x</button>
                    <img src="${user.url}" class="w-10 h-10 rounded-full">
                    <p class="text-xs truncate">${user.nom}</p>
                    <p class="text-xs truncate">${user.role}</p>
                `;
                const zone = document.getElementById("securite");
                zone.style.background = "none";
                zone2.appendChild(userDiv);

                utilisateurs[i].assign = true;
                afficherUtilisateurs();

                countSecurite++;
                div.remove();
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', (e) => {
                    e.preventDefault();
                    userDiv.remove();
                    utilisateurs[i].assign = false;
                    afficherUtilisateurs();
                    countSecurite--;

                });
            });
        });
    });
}
ajouteDeusZone();


// ajouter un employé dans troiseme zone----------------------------------------
function ajouteTroiZone() {
    const limiteserveurs = 3;
    let countserveurs = 0;
    const rolesAutorises = ["salle_serveurs", "manager", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_serveurs = document.getElementById("btn_serveurs");

    btn_serveurs.addEventListener('click', (e) => {
        e.preventDefault();
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
        effacer.addEventListener('click', (e) => {
            e.preventDefault();
            InfoContinaire.classList.add('hidden')

        });

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', (e) => {
                e.preventDefault();
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countserveurs >= limiteserveurs) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user  bg-white rounded-xl w-[5rem] h-[5rem] relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment bg-red-700 w-2 h-6 border-xl rounded text-white absolute ml-18 flex justify-centre items-centre">x</button>
                    <img src="${user.url}" class="w-10 h-10 rounded-full">
                    <p class="text-xs truncate">${user.nom}</p>
                    <p class="text-xs truncate">${user.role}</p>
                `;
                const zone = document.getElementById("serveurs");
                zone.style.background = "none";
                zone3.appendChild(userDiv);

                utilisateurs[i].assign = true;
                afficherUtilisateurs();

                countserveurs++;
                div.remove();
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', (e) => {
                    e.preventDefault();
                    userDiv.remove();
                    utilisateurs[i].assign = false;
                    afficherUtilisateurs();
                    countserveurs--;

                });
            });
        });
    });
}
ajouteTroiZone();


// ajouter un employé dans la quatreme zone----------------------------------------
function ajouteQuatreZone() {
    const limiteReception = 3;
    let countReception = 0;
    const rolesAutorises = ["reception", "manager", "nettoyage", "autres"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_Reception = document.getElementById("btn_Reception");

    btn_Reception.addEventListener('click', (e) => {
        e.preventDefault();
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
        effacer.addEventListener('click', (e) => {
            e.preventDefault();
            InfoContinaire.classList.add('hidden')
        });

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', (e) => {
                e.preventDefault();
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countReception >= limiteReception) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user  bg-white rounded-xl w-[5rem] h-[5rem] relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment bg-red-700 w-2 h-6 border-xl rounded text-white absolute ml-18 flex justify-centre items-centre">x</button>
                    <img src="${user.url}" class="w-10 h-10 rounded-full">
                    <p class="text-xs truncate">${user.nom}</p>
                    <p class="text-xs truncate">${user.role}</p>
                `;
                const zone = document.getElementById("Reception");
                zone.style.background = "none";
                zone4.appendChild(userDiv);

                utilisateurs[i].assign = true;
                afficherUtilisateurs();

                countReception++;
                div.remove();
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', (e) => {
                    e.preventDefault();
                    userDiv.remove();
                    utilisateurs[i].assign = false;
                    afficherUtilisateurs();
                    countReception--;

                });
            });
        });
    });
}
ajouteQuatreZone();




// ajouter un employé dans cinqéme zone----------------------------------------
function ajouteCinqueZone() {
    const limitepersonnel = 3;
    let countpersonnel = 0;
    const rolesAutorises = ["manager", "reception", "salle_serveur", "nettoyage", "autres", "salle_securite"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_personnel = document.getElementById("btn_personnel");

    btn_personnel.addEventListener('click', (e) => {
        e.preventDefault();
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
        effacer.addEventListener('click', (e) => {
            e.preventDefault();
            InfoContinaire.classList.add('hidden')
        });

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', (e) => {
                e.preventDefault();
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countpersonnel >= limitepersonnel) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user  bg-white rounded-xl w-[5rem] h-[5rem] relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment bg-red-700 w-2 h-6 border-xl rounded text-white absolute ml-18 flex justify-centre items-centre">x</button>
                    <img src="${user.url}" class="w-10 h-10 rounded-full">
                    <p class="text-xs truncate">${user.nom}</p>
                    <p class="text-xs truncate">${user.role}</p>
                `;
                const zone = document.getElementById("personnel");
                zone.style.background = "none";
                zone5.appendChild(userDiv);

                utilisateurs[i].assign = true;
                afficherUtilisateurs();

                countpersonnel++;
                div.remove();
                InfoContinaire.classList.add('hidden');

                const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    e.preventDefault();
                    userDiv.remove();
                    utilisateurs[i].assign = false;
                    afficherUtilisateurs();
                    countpersonnel--;

                });
            });
        });
    });
}
ajouteCinqueZone();




// ajouter un employé dans sixéme zone----------------------------------------
function ajouteSiseZone() {
    const limitearchives = 1;
    let countarchives = 0;
    const rolesAutorises = ["manager"];
    const InfoContinaire = document.getElementById('InfoContinaire');
    let btn_archives = document.getElementById("btn_archives");

   btn_archives.addEventListener('click', (e) => {
        e.preventDefault();
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
        effacer.addEventListener('click', (e) => {
            e.preventDefault();
            InfoContinaire.classList.add('hidden')
        });

        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            const user = utilisateur[i];
            div.addEventListener('click', (e) => {
                e.preventDefault();
                if (!rolesAutorises.includes(user.role)) {
                    alert("Cet employé n'a pas le droit d'entrer dans cette zone !");
                    return;
                }
                if (countarchives >= limitearchives) {
                    alert("Limite atteinte pour cette zone !");
                    return;
                }
                const userDiv = document.createElement("div");
                userDiv.className = "user  bg-white rounded-xl w-[5rem] h-[5rem] relative";
                userDiv.innerHTML = `
                    <button class="btn_ferment bg-red-700 w-2 h-6 border-xl rounded text-white absolute ml-18 flex justify-centre items-centre">x</button>
                    <img src="${user.url}" class="w-10 h-10 rounded-full">
                    <p class="text-xs truncate">${user.nom}</p>
                    <p class="text-xs truncate">${user.role}</p>
                `;
                const zone = document.getElementById("archives");
                zone.style.background = "none";
                zone6.appendChild(userDiv);
                 e.preventDefault();
                utilisateurs[i].assign = true;
                afficherUtilisateurs();

                countarchives++;
                div.remove();
                InfoContinaire.classList.add('hidden');

               const btnFerment = userDiv.querySelector(".btn_ferment");
                btnFerment.addEventListener('click', () => {
                    e.preventDefault();
                    userDiv.remove();
                    utilisateurs[i].assign = false;
                    afficherUtilisateurs();
                    countpersonnel--;

                });
            });
        });
    });
}
ajouteSiseZone();

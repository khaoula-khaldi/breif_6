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
            role: document.getElementById("role").value.trim()
        };

        // validation des champs vides
        if (!objetInfo.nom || !objetInfo.email || !objetInfo.telephone || !objetInfo.experiences || !objetInfo.role) {
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

        // stokes dans local storeg
        utilisateur.push(objetInfo);
        localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
        alert("Utilisateur ajouté !");
        formulaire.reset();

    })
};

validationForm();


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


afficherEmployees.addEventListener('click', (e) => {
    formulaire.classList.add('hidden');

    // Kola click → nmas7 lzone
    EmployeAffiche.innerHTML = "";

    // n'affichi leh
    EmployeAffiche.classList.remove('hidden');

    // n3awwed nbni contenu jdid
    utilisateur.forEach((user, index) => {
        EmployeAffiche.innerHTML += `
       <br> <div class="rounded-2xl p-2 bg-white mt-4 ">
        <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
            Nom: ${user.nom}<br>
            role:${user.role}    
        </div>`;
    });
    //btn fermer
    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-end absolute top-1 right-2";
    effacer.type = "button";
    effacer.textContent = "X";
    EmployeAffiche.prepend(effacer);
    effacer.addEventListener('click', (e) => {
        EmployeAffiche.classList.add('hidden');
    });
});

//AJOUTER un employe dans un chambre
const InfoContinaire = document.getElementById('InfoContinaire');
let sectionImage = document.getElementById("sectionImage");
let btn_conference = document.getElementById("btn_conference");

    btn_conference.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
            <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
                Nom: ${user.nom}<br>
                role:${user.role}    
            </div>`;
        });
        //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        });
        // kythat employer fi chambre ta3O 
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            div.addEventListener('click', () => {
                conference.innerHTML = `
                <div class="user p-3 bg-white rounded-xl absolute ">
                    <div class="w-10 h-10 rounded-full object-cover border mb-2"></div>
                    <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-centre items-centre absolute top-1 right-2">X</button>
                    <p class="text-sm"><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                    <p class="text-sm"><strong>Role :</strong> ${utilisateur[i].role}</p>
                </div>
            `;
             InfoContinaire.classList.add('hidden');
            btn_ferment.addEventListener('click',(e)=>{
               user.classList.add('hidden');
            })
            // switch(role){
            //     case 1:role==="Réception";

            //     break;
            //     case 2:role==="Salle des serveurs";

            //     break;
            //     case 3:role==="Salle de sécurité";

            //     break;
            //     case 4:role==="Manager";

            //     break;
            //     case 5:role==="Nettoyage";

            //     break;
            //     default:


            // }

                InfoContinaire.classList.add('hidden');
            });
        });

    });

    let btn_securite = document.getElementById("btn_securite");

    btn_securite.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
            <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
                Nom: ${user.nom}<br>
                role:${user.role}    
            </div>`;
        });
        //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        });
        // kythat employer fi chambre ta3O 
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            div.addEventListener('click', () => {
                securite.innerHTML = `
                <div class="user p-3 bg-white rounded-xl absolute ">
                    <div class="w-10 h-10 rounded-full object-cover border mb-2"></div>
                    <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-end absolute top-1 right-2">X</button>
                    <p class="text-sm"><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                    <p class="text-sm"><strong>Role :</strong> ${utilisateur[i].role}</p>
                </div>
            `;
             InfoContinaire.classList.add('hidden');
            btn_ferment.addEventListener('click',(e)=>{
               user.classList.add('hidden');
            })
            // switch(role){
            //     case 1:role==="Réception";

            //     break;
            //     case 2:role==="Salle des serveurs";

            //     break;
            //     case 3:role==="Salle de sécurité";

            //     break;
            //     case 4:role==="Manager";

            //     break;
            //     case 5:role==="Nettoyage";

            //     break;
            //     default:


            // }

                InfoContinaire.classList.add('hidden');
            });
        });

    });


      let btn_serveurs = document.getElementById("btn_serveurs");

    btn_serveurs.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
            <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
                Nom: ${user.nom}<br>
                role:${user.role}    
            </div>`;
        });
        //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        });
        // kythat employer fi chambre ta3O 
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            div.addEventListener('click', () => {
                serveurs.innerHTML = `
                <div class="user p-3 bg-white rounded-xl absolute ">
                    <div class="w-10 h-10 rounded-full object-cover border mb-2"></div>
                    <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-end absolute top-1 right-2">X</button>
                    <p class="text-sm"><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                    <p class="text-sm"><strong>Role :</strong> ${utilisateur[i].role}</p>
                </div>
            `;
             InfoContinaire.classList.add('hidden');
            btn_ferment.addEventListener('click',(e)=>{
               user.classList.add('hidden');
            })
            // switch(role){
            //     case 1:role==="Réception";

            //     break;
            //     case 2:role==="Salle des serveurs";

            //     break;
            //     case 3:role==="Salle de sécurité";

            //     break;
            //     case 4:role==="Manager";

            //     break;
            //     case 5:role==="Nettoyage";

            //     break;
            //     default:


            // }

                InfoContinaire.classList.add('hidden');
            });
        });

    });



    let btn_Reception = document.getElementById("btn_Reception");

    btn_Reception.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
            <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
                Nom: ${user.nom}<br>
                role:${user.role}    
            </div>`;
        });
        //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        });
        // kythat employer fi chambre ta3O 
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            div.addEventListener('click', () => {
                Reception.innerHTML = `
                <div class="user p-3 bg-white rounded-xl absolute ">
                    <div class="w-10 h-10 rounded-full object-cover border mb-2"></div>
                    <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-end absolute top-1 right-2">X</button>
                    <p class="text-sm"><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                    <p class="text-sm"><strong>Role :</strong> ${utilisateur[i].role}</p>
                </div>
            `;
             InfoContinaire.classList.add('hidden');
            btn_ferment.addEventListener('click',(e)=>{
               user.classList.add('hidden');
            })
            // switch(role){
            //     case 1:role==="Réception";

            //     break;
            //     case 2:role==="Salle des serveurs";

            //     break;
            //     case 3:role==="Salle de sécurité";

            //     break;
            //     case 4:role==="Manager";

            //     break;
            //     case 5:role==="Nettoyage";

            //     break;
            //     default:


            // }

                InfoContinaire.classList.add('hidden');
            });
        });

    });


    let btn_personnel = document.getElementById("btn_personnel");

    btn_personnel.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
            <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
                Nom: ${user.nom}<br>
                role:${user.role}    
            </div>`;
        });
        //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        });
        // kythat employer fi chambre ta3O 
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            div.addEventListener('click', () => {
                personnel.innerHTML = `
                <div class="user p-3 bg-white rounded-xl absolute ">
                    <div class="w-10 h-10 rounded-full object-cover border mb-2"></div>
                    <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-end absolute top-1 right-2">X</button>
                    <p class="text-sm"><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                    <p class="text-sm"><strong>Role :</strong> ${utilisateur[i].role}</p>
                </div>
            `;
             InfoContinaire.classList.add('hidden');
            btn_ferment.addEventListener('click',(e)=>{
               user.classList.add('hidden');
            })
            // switch(role){
            //     case 1:role==="Réception";

            //     break;
            //     case 2:role==="Salle des serveurs";

            //     break;
            //     case 3:role==="Salle de sécurité";

            //     break;
            //     case 4:role==="Manager";

            //     break;
            //     case 5:role==="Nettoyage";

            //     break;
            //     default:


            // }

                InfoContinaire.classList.add('hidden');
            });
        });

    });


let btn_archives = document.getElementById("btn_archives");

    btn_archives.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
            <div class="w-20 h-20 rounded-full object-cover border mb-2"></div>
                Nom: ${user.nom}<br>
                role:${user.role}    
            </div>`;
        });
        //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        });
        // kythat employer fi chambre ta3O 
        const allEmpDiv = InfoContinaire.querySelectorAll(".empDiv");
        allEmpDiv.forEach((div, i) => {
            div.addEventListener('click', () => {
                archives.innerHTML = `
                <div class="user p-3 bg-white rounded-xl absolute ">
                    <div class="w-10 h-10 rounded-full object-cover border mb-2"></div>
                    <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white flex justify-end absolute top-1 right-2">X</button>
                    <p class="text-sm"><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                    <p class="text-sm"><strong>Role :</strong> ${utilisateur[i].role}</p>
                </div>
            `;
             InfoContinaire.classList.add('hidden');
            btn_ferment.addEventListener('click',(e)=>{
               user.classList.add('hidden');
            })
            // switch(role){
            //     case 1:role==="Réception";

            //     break;
            //     case 2:role==="Salle des serveurs";

            //     break;
            //     case 3:role==="Salle de sécurité";

            //     break;
            //     case 4:role==="Manager";

            //     break;
            //     case 5:role==="Nettoyage";

            //     break;
            //     default:


            // }

                InfoContinaire.classList.add('hidden');
            });
        });

    });




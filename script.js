//ajouter un employe
let ajouterEmploye = document.getElementById('ajouterEmploye');
let formulaire = document.getElementById('formulaire');

ajouterEmploye.addEventListener('click', () => {
    formulaire.classList.remove('hidden');
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
        const nomRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;
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

        // stocker
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

    // Kola click → nmas7 lzone
    EmployeAffiche.innerHTML = "";

    // n'affichi leh
    EmployeAffiche.classList.remove('hidden');

    // n3awwed nbni contenu jdid
    utilisateur.forEach((user, index) => {
        EmployeAffiche.innerHTML += `
        <div class="rounded-2xl p-2 bg-white ">
            <strong>Employé ${index + 1}</strong><br>
            photo:${user.URL}<br>
            Nom: ${user.nom}<br>
            role:${user.role}    
        </div>`;
    });
     //btn fermer
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end absolute top-2 right-2";
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
let btn_ajoute = document.querySelectorAll(".btn_ajoute");

btn_ajoute.forEach(btn => {
    btn.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        InfoContinaire.innerHTML = ""; // na9i zone bach matsaybch double
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `
            <div class="empDiv rounded-2xl p-2 bg-white ">
                <strong>Employé ${index + 1}</strong><br>
                photo:${user.URL}<br>
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
                sectionImage.innerHTML = `
                    <div class="p-3 bg-white rounded-xl shadow">
                        <h2 class="font-bold text-lg mb-2">Employé sélectionné</h2>
                        <p><strong>Nom :</strong> ${utilisateur[i].nom}</p>
                        <p><strong>Role :</strong> ${utilisateur[i].role}</p>
                        <p><strong>Photo :</strong> ${utilisateur[i].URL}</p>
                    </div>
                `;
                 InfoContinaire.classList.add('hidden');  
            });
        });

    });
});





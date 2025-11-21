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
//image
document.getElementById('url').addEventListener('input', (e) => {
    const img = document.getElementById('photo_user');
    img.src = e.target.value;
});


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
            url : document.getElementById("url").value.trim()
            
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
        document.getElementById('photo_user').src = "";

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

let afficherEmployees=document.getElementById("afficherEmployees");
afficherEmployees.addEventListener('click', (e) => {
    formulaire.classList.add('hidden');
    EmployeAffiche.innerHTML += "";
    EmployeAffiche.classList.remove('hidden');


    // n3awwed nbni contenu jdid
  utilisateur.forEach((user, index) => {
        const div = document.createElement('div');
        div.className = "rounded-2xl p-2 bg-white mt-10 relative  h-[10rem]";
        div.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            <p>Nom: ${user.nom}</p>
            <p>Role: ${user.role}</p>
        `;
        EmployeAffiche.appendChild(div);
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
const btn_conference = document.getElementById("btn_conference");

btn_conference.addEventListener('click', () => {
    InfoContinaire.classList.remove('hidden');
    InfoContinaire.innerHTML = ""; // vide la zone

    // Créer le bouton fermer
    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
    effacer.textContent = "X";
    InfoContinaire.appendChild(effacer);
    effacer.addEventListener('click', () => {
        InfoContinaire.classList.add('hidden');
    });

    // Afficher tous les utilisateurs
    utilisateur.forEach((user, index) => {
        const empDiv = document.createElement('div');
        empDiv.className = "empDiv rounded-2xl p-2 bg-white cursor-pointer mb-2";

        empDiv.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            Nom: ${user.nom}<br>
            Role: ${user.role}
        `;

        InfoContinaire.appendChild(empDiv);

        // Au clic sur l'utilisateur, l'ajouter dans la chambre
        empDiv.addEventListener('click', () => {
            const userDiv = document.createElement('div');
            userDiv.className = "user_conference p-3 bg-white rounded-xl absolute flex flex-col justify-center items-center";

            userDiv.innerHTML = `
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <button class="btn_ferment_conference p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                <p class="text-sm">${user.nom}</p>
            `;

            conference.appendChild(userDiv);
            InfoContinaire.classList.add('hidden');

            // Sélectionner le bouton X et le faire fonctionner
            const btnFermer = userDiv.querySelector('.btn_ferment_conference');
            btnFermer.addEventListener('click', () => {
                userDiv.remove();
            });
        });
    });
});



let btn_securite = document.getElementById("btn_securite");

btn_securite.addEventListener('click', () => {
    InfoContinaire.classList.remove('hidden');
    InfoContinaire.innerHTML = "";

    // Bouton fermer
    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
    effacer.textContent = "X";
    InfoContinaire.appendChild(effacer);
    effacer.addEventListener('click', () => {
        InfoContinaire.classList.add('hidden');
    });

    // Ajouter les utilisateurs
    utilisateur.forEach((user) => {
        const empDiv = document.createElement('div');
        empDiv.className = "empDiv rounded-2xl p-2 bg-white cursor-pointer mb-2";
        empDiv.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            Nom: ${user.nom}<br>
            Role: ${user.role}
        `;
        InfoContinaire.appendChild(empDiv);

        // Au clic sur l'utilisateur, l'ajouter dans la chambre "conference"
        empDiv.addEventListener('click', () => {
            const userDiv = document.createElement('div');
            userDiv.className = "user_conference p-3 bg-white rounded-xl absolute flex flex-col justify-center items-center";
            userDiv.innerHTML = `
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                <p class="text-sm">${user.nom}</p>
            `;
            securite.appendChild(userDiv);
            InfoContinaire.classList.add('hidden');

            // Fermer le div ajouté
            const btnFermer = userDiv.querySelector('.btn_ferment');
            btnFermer.addEventListener('click', () => {
                userDiv.remove();
            });
        });
    });
});

      let btn_serveurs = document.getElementById("btn_serveurs");

btn_serveurs.addEventListener('click', () => {
    InfoContinaire.classList.remove('hidden');
    InfoContinaire.innerHTML = "";

    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
    effacer.textContent = "X";
    InfoContinaire.appendChild(effacer);
    effacer.addEventListener('click', () => {
        InfoContinaire.classList.add('hidden');
    });

    utilisateur.forEach((user) => {
        const empDiv = document.createElement('div');
        empDiv.className = "empDiv rounded-2xl p-2 bg-white cursor-pointer mb-2";
        empDiv.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            Nom: ${user.nom}<br>
            Role: ${user.role}
        `;
        InfoContinaire.appendChild(empDiv);

        empDiv.addEventListener('click', () => {
            const userDiv = document.createElement('div');
            userDiv.className = "user_conference p-3 bg-white rounded-xl absolute flex flex-col justify-center items-center";
            userDiv.innerHTML = `
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                <p class="text-sm">${user.nom}</p>
            `;
            serveurs.appendChild(userDiv);
            InfoContinaire.classList.add('hidden');

            const btnFermer = userDiv.querySelector('.btn_ferment');
            btnFermer.addEventListener('click', () => {
                userDiv.remove();
            });
        });
    });
});


   let btn_Reception = document.getElementById("btn_Reception");

btn_Reception.addEventListener('click', () => {
    InfoContinaire.classList.remove('hidden');
    InfoContinaire.innerHTML = "";

    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
    effacer.textContent = "X";
    InfoContinaire.appendChild(effacer);
    effacer.addEventListener('click', () => {
        InfoContinaire.classList.add('hidden');
    });

    utilisateur.forEach((user) => {
        const empDiv = document.createElement('div');
        empDiv.className = "empDiv rounded-2xl p-2 bg-white cursor-pointer mb-2";
        empDiv.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            Nom: ${user.nom}<br>
            Role: ${user.role}
        `;
        InfoContinaire.appendChild(empDiv);

        empDiv.addEventListener('click', () => {
            const userDiv = document.createElement('div');
            userDiv.className = "user_conference p-3 bg-white rounded-xl absolute flex flex-col justify-center items-center";
            userDiv.innerHTML = `
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                <p class="text-sm">${user.nom}</p>
            `;
            Reception.appendChild(userDiv);
            InfoContinaire.classList.add('hidden');

            const btnFermer = userDiv.querySelector('.btn_ferment');
            btnFermer.addEventListener('click', () => {
                userDiv.remove();
            });
        });
    });
});

        
   let btn_personnel = document.getElementById("btn_personnel");

btn_personnel.addEventListener('click', () => {
    InfoContinaire.classList.remove('hidden');
    InfoContinaire.innerHTML = "";

    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
    effacer.textContent = "X";
    InfoContinaire.appendChild(effacer);
    effacer.addEventListener('click', () => {
        InfoContinaire.classList.add('hidden');
    });

    utilisateur.forEach((user) => {
        const empDiv = document.createElement('div');
        empDiv.className = "empDiv rounded-2xl p-2 bg-white cursor-pointer mb-2";
        empDiv.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            Nom: ${user.nom}<br>
            Role: ${user.role}
        `;
        InfoContinaire.appendChild(empDiv);

        empDiv.addEventListener('click', () => {
            const userDiv = document.createElement('div');
            userDiv.className = "user p-3 bg-white rounded-xl absolute flex flex-col justify-center items-center";
            userDiv.innerHTML = `
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                <p class="text-sm">${user.nom}</p>
            `;
            personnel.appendChild(userDiv); // cible 'personnel'
            InfoContinaire.classList.add('hidden');

            const btnFermer = userDiv.querySelector('.btn_ferment');
            btnFermer.addEventListener('click', () => {
                userDiv.remove();
            });
        });
    });
});



let btn_archives = document.getElementById("btn_archives");

btn_archives.addEventListener('click', () => {
    InfoContinaire.classList.remove('hidden');
    InfoContinaire.innerHTML = "";

    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white absolute top-2 right-2";
    effacer.textContent = "X";
    InfoContinaire.appendChild(effacer);
    effacer.addEventListener('click', () => {
        InfoContinaire.classList.add('hidden');
    });

    utilisateur.forEach((user) => {
        const empDiv = document.createElement('div');
        empDiv.className = "empDiv rounded-2xl p-2 bg-white cursor-pointer mb-2";
        empDiv.innerHTML = `
            <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
            Nom: ${user.nom}<br>
            Role: ${user.role}
        `;
        InfoContinaire.appendChild(empDiv);

        empDiv.addEventListener('click', () => {
            const userDiv = document.createElement('div');
            userDiv.className = "user_conference p-3 bg-white rounded-xl absolute flex flex-col justify-center items-center";
            userDiv.innerHTML = `
                <img src="${user.url}" class="w-16 h-16 rounded-full mb-2">
                <button class="btn_ferment p-2 bg-red-700 w-7.5 h-9 border rounded-3xl text-white absolute top-1 right-2">X</button>
                <p class="text-sm">${user.nom}</p>
            `;
            archives.appendChild(userDiv);
            InfoContinaire.classList.add('hidden');

            const btnFermer = userDiv.querySelector('.btn_ferment');
            btnFermer.addEventListener('click', () => {
                userDiv.remove();
            });
        });
    });
});




//     validateField(form.container_photo, validImageUrl, "URL doit pointer vers une image (jpg, png, etc.)");
//   });
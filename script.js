
// ////validation des input des formulaire **************************
// let btn_envoyer = document.getElementById('btn_envoyer');
// let formulaire = document.getElementById('formulaire');
// let utilisateur = JSON.parse(localStorage.getItem("utilisateur")) || [];

// btn_envoyer.addEventListener('submit', (e) => {
//     let nom = document.getElementById("nome").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let telephone = document.getElementById("telephone").value.trim();
//     let experiences = document.getElementById("Experiences").value.trim();
//     let role = document.getElementById("role").value.trim();
//     let dateDu = document.getElementById("dateDu").value.trim();
//     let dateLi = document.getElementById("dateLi").value.trim();
//     let experience = document.getElementById("experience").value.trim();

//     // wash dook les input khaween
//     if (nom === "" || email === "" || telephone === "" || experiences === "" || role === "" || dateDu === "" || dateLi === "" || labeldebut === "" || labellimite === "" || experience === "") {
//         alert("Remplir tous les champs !!");
//         return;
//     }
//     //validation ta3 nome
//     const nomRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;

//     if (!nomRegex.test(nom)) {
//         alert("Nom incorrect !");
//         return;
//     }
//     // validation ta3 email
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//     if (!emailRegex.test(email)) {
//         alert("Email incorrect !");
//         return;
//     }

//     // validation ta3 telephone
//     const telephoneRegex = /^\+212[0-9]{9}$/;

//     if (!telephoneRegex.test(telephone)) {
//         alert("telephone incorrect !");
//         return;
//     }

//     //validation ta3 experience
//     if (experiences.length < 10) {
//         alert("Remplissez une vraie expérience (au moins 10 caracteres) !");
//         return;
//     }
//     //validation de la date de experience ajouter
//     if (labeldebut < labellimite) {
//         alert('Remplissez une vrai date !!');
//         return;
//     }
//     //validation de la date de experience 
//     if (dateDu < dateLi) {
//         alert('Remplissez une vrai date !!');
//         return;
//     }

//     //validation de url

//     //stoker les info de formulaire dans local storeg
//     const objetInfo = { nom, email, telephone, experiences };
//     utilisateur.push(objetInfo);
//     localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
//     alert("Utilisateur ajouté !");
//     // formulaire.reset();

// });

// /// formulaire dynamique ***********************************
// let ExperiencesContainer = document.getElementById("ExperiencesContainer");


// //ajouter un employe
// let ajouterEmploye = document.getElementById('ajouterEmploye');
// ajouterEmploye.addEventListener('click', (e) => {
//     formulaire.style.display = 'block';
// });
// //afficher tout les employés
// afficherEmployees.addEventListener('click', (e) => {
//     let utilisateurs = JSON.parse(localStorage.getItem("utilisateur")) || [];
//     const divVide = document.createElement("div");
//     divVide.className = "p-2 bg-white border rounded";
//     cotes_employe.appendChild(divVide);
//     utilisateurs.forEach((user, index) => {
//         const divEmploye = document.createElement("div");
//         divEmploye.className = "border border-black rounded-2xl p-2 bg-white w-[20rem] mb-2";
//         divEmploye.innerHTML = `
//             <strong>Employé ${index + 1}</strong><br>
//             photo:${user.URL}<br>
//             Nom: ${user.nom}<br>
//             role:${user.role}<br>    
//             email:${user.email}<br>    
//             telephone:${user.telephone}    
//         `;
//         divVide.appendChild(divEmploye);
//         divVide.style.displa = "block";
//     });
//     const effacer = document.createElement("button");
//     effacer.className = " relative p-2 bg-red-700 w-20 h-10 border border-solide border-black rounded-3xl text-white ";
//     effacer.type = "button"
//     effacer.textContent = "fermer"
//     divVide.appendChild(effacer);
//     effacer.addEventListener('click', (e) => {
//         divVide.style.display = 'none';
//     })

// });

// const InfoContinaire = document.getElementById('InfoContinaire');
// //AJOUTER un employe dans un chambre
// let sectionImage = document.getElementById("sectionImage");
// let btn_ajoute = document.querySelectorAll(".btn_ajoute");
// btn_ajoute.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         InfoContinaire.classList.remove('hidden');
//         // let divEpmloyeChambre = document.createElement("div");
//         // divEpmloyeChambre.className = "border border-solid border-black rounded p-2 bg-white w-[20re
//         // m] z-50";
//         // divEpmloyeChambre.name = "divEpmloyeChambre";
//         // sectionImage.appendChild(divEpmloyeChambre);
//         let utilisateurs = JSON.parse(localStorage.getItem("utilisateur")) || [];
//         // const divVide = document.createElement("div");
//         // divVide.className = "p-2 bg-white border rounded";
//         utilisateurs.forEach((user, index) => {
//             const divEmploye = document.createElement("div");
//             divEmploye.className = "border border-black rounded-2xl p-2 bg-white w-[15rem] mb-2";
//             divEmploye.innerHTML += `
//             <strong>Employé ${index + 1}</strong><br>
//             photo:${user.URL}<br>
//             Nom: ${user.nom}<br>
//             role:${user.role}    
//         `;
//             InfoContinaire.appendChild(divEmploye);
//             // divEpmloyeChambre.style.display = 'block';

//         });
//         // divEmploye.forEach(divEmploye =>{
//         //     divEmploye.addEventListener('click',(e)=>{
//         //         console.log('drtha');

//         //         let divCambre=document.createElement("div");
//         //         divCambre.className="w-150 h-150 bg-white";
//         //         divEmploye.appendChild(divCambre);
//         //         divEmploye.style.display='none';
//         //     })
//         // })

//     })
// })









//ajouter un employe
let ajouterEmploye = document.getElementById('ajouterEmploye');
let formulaire = document.getElementById('formulaire');
ajouterEmploye.addEventListener('click', (e) => {
    formulaire.classList.remove('hidden');
});

////validation des input des formulaire **************************
let btn_envoyer = document.getElementById('btn_envoyer');
// const objetInfo = {};
let utilisateur = JSON.parse(localStorage.getItem("utilisateur")) || [];
function validationForm() {
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault()
        const objetInfo = {
            nom: document.getElementById("nome").value.trim(),
            email: document.getElementById("email").value.trim(),
            telephone: document.getElementById("telephone").value.trim(),
            experiences: document.getElementById("Experiences").value.trim(),
            role: document.getElementById("role").value.trim()
        };
        // wash dook les input khaween
        if (objetInfo.nom === "" || objetInfo.email === "" || objetInfo.telephone === "" || objetInfo.experiences === "" || objetInfo.role === "") {
            alert("Remplir tous les champs !!");
            return;
        }
        //validation ta3 nome
        const nomRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;

        if (!nomRegex.test(objetInfo.nom)) {
            alert("Nom incorrect !");
            return;
        }
        // validation ta3 email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!emailRegex.test(objetInfo.email)) {
            alert("Email incorrect !");
            return;
        }

        // validation ta3 telephone
        const telephoneRegex = /^\+212[0-9]{9}$/;

        if (!telephoneRegex.test(objetInfo.telephone)) {
            alert("telephone incorrect !");
            return;
        }

        //validation ta3 experience
        if (objetInfo.experiences.length < 10) {
            alert("Remplissez une vraie expérience (au moins 10 caractères) !");
            return;
        }
        //validation de url

        //stoker les info de formulaire dans local storeg
        utilisateur.push(objetInfo);
        localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
        alert("Utilisateur ajouté !");
        formulaire.reset();
    });
}
validationForm();
let btnPlus = document.getElementById("btn_plus");
btnPlus.addEventListener('click', function () {

    const experienceInput = document.createElement("input");
    experienceInput.type = "text";
    experienceInput.className = "border border-solid border-black rounded px-5 py-2 my-1";
    experienceInput.placeholder = "Ajouter autre expérience";
    experienceInput.id = "experience";
    ExperiencesContainer.appendChild(experienceInput);
    const dateDuInput = document.createElement("input");
    const labeldebut = document.createElement("p");
    labeldebut.textContent = 'date de début :';
    labeldebut.className = 'font-semibold';
    dateDuInput.type = "date";
    dateDuInput.className = " rounded px-5 py-2 my-1 border border-solide border-balck";
    ExperiencesContainer.appendChild(labeldebut);
    ExperiencesContainer.appendChild(dateDuInput);
    const dateLiInput = document.createElement("input");
    const labellimite = document.createElement("p");
    labellimite.textContent = 'date de limite :';
    labellimite.className = 'font-semibold';
    labellimite.id = 'labellimite';
    ExperiencesContainer.appendChild(labellimite);
    dateLiInput.type = "date";
    dateLiInput.className = "rounded px-5 py-2 my-1 border border-solide border-balck";
    dateLiInput.id = 'dateLiInput';
    ExperiencesContainer.appendChild(dateLiInput);

});


//afficher par button affichage

afficherEmployees.addEventListener('click', (e) => {
    EmployeAffiche.classList.remove('hidden');
    EmployeAffiche.innerHTML = '';
    utilisateur.forEach((user, index) => {
        EmployeAffiche.innerHTML += `<div class="rounded-2xl p-2 bg-white ">
            <strong>Employé ${index + 1}</strong><br>
            photo:${user.URL}<br>
            Nom: ${user.nom}<br>
            role:${user.role}    
        </div>`;
    });
    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end ";
    effacer.type = "button";
    effacer.textContent = "X";
    EmployeAffiche.prepend(effacer);
    effacer.addEventListener('click', (e) => {
        EmployeAffiche.classList.add('hidden');
    })

});



const InfoContinaire = document.getElementById('InfoContinaire');
//AJOUTER un employe dans un chambre
let sectionImage = document.getElementById("sectionImage");
let btn_ajoute = document.querySelectorAll(".btn_ajoute");
btn_ajoute.forEach(btn => {
    btn.addEventListener('click', (e) => {
        InfoContinaire.classList.remove('hidden');
        utilisateur.forEach((user, index) => {
            InfoContinaire.innerHTML += `<div class="rounded-2xl p-2 bg-white ">
            <strong>Employé ${index + 1}</strong><br>
            photo:${user.URL}<br>
            Nom: ${user.nom}<br>
            role:${user.role}    
        </div>`;
        });
        const effacer = document.createElement("button");
        effacer.className = "p-2 bg-red-700 w-7 h-10 border rounded-3xl text-white flex justify-end ";
        effacer.type = "button";
        effacer.textContent = "X";
        InfoContinaire.prepend(effacer);
        effacer.addEventListener('click', (e) => {
            InfoContinaire.classList.add('hidden');
        })
    })
})




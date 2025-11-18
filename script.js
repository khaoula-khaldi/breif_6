
////validation des input des formulaire **************************
let btn_envoyer = document.getElementById('btn_envoyer');
let formulaire = document.getElementById('formulaire');
let utilisateur = JSON.parse(localStorage.getItem("utilisateur")) || [];

btn_envoyer.onclick = (e) => {
    let nom = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telephone = document.getElementById("telephone").value.trim();
    let experiences = document.getElementById("Experiences").value.trim();
    let role = document.getElementById("role").value.trim();


    // wash dook les input khaween
    if (nom === "" || email === "" || telephone === "" || experiences === "" || role === "") {
        alert("Remplir tous les champs !!");
        return;
    }
    //validation ta3 nome
    const nomRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;

    if (!nomRegex.test(nom)) {
        alert("Nom incorrect !");
        return;
    }
    // validation ta3 email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
        alert("Email incorrect !");
        return;
    }

    // validation ta3 telephone
    const telephoneRegex = /^\+212[0-9]{9}$/;

    if (!telephoneRegex.test(telephone)) {
        alert("telephone incorrect !");
        return;
    }

    //validation ta3 experience
    if (experiences.length < 10) {
        alert("Remplissez une vraie expérience (au moins 10 caractères) !");
        return;
    }
    //validation de url

    //stoker les info de formulaire dans local storeg
    const objetInfo = { nom, email, telephone, experiences };
    utilisateur.push(objetInfo);
    localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
    alert("Utilisateur ajouté !");
    formulaire.reset();

}

/// formulaire dynamique ***********************************
let ExperiencesContainer = document.getElementById("ExperiencesContainer");
let btnPlus = document.getElementById("btn_plus");

btnPlus.addEventListener('click', function () {

    const experienceInput = document.createElement("input");
    experienceInput.type = "text";
    experienceInput.className = "border border-solid border-black rounded px-5 py-2 my-1";
    experienceInput.placeholder = "Ajouter autre expérience";
    experienceInput.name = "experience";
    ExperiencesContainer.appendChild(experienceInput);
});

//ajouter un employe
let ajouterEmploye = document.getElementById('ajouterEmploye');
ajouterEmploye.addEventListener('click', (e) => {
    formulaire.style.display = 'block';
});

afficherEmployees.addEventListener('click', (e) => {
    let utilisateurs = JSON.parse(localStorage.getItem("utilisateur")) || [];
    const divVide = document.createElement("div");
    divVide.className = "p-2 bg-white border rounded";
    cotes_employe.appendChild(divVide);
    utilisateurs.forEach((user, index) => {
        const divEmploye = document.createElement("div");
        divEmploye.className = "border border-black rounded-2xl p-2 bg-white w-[20rem] mb-2";
        divEmploye.innerHTML = `
            <strong>Employé ${index + 1}</strong><br>
            photo:${user.URL}<br>
            Nom: ${user.nom}<br>
            role:${user.role}    
        `;
        divVide.appendChild(divEmploye);
        divVide.style.displa = "block";
    });
    const effacer = document.createElement("button");
    effacer.className = "p-2 bg-red-700 w-20 h-10 border rounded-3xl text-white ";
    effacer.type = "button"
    effacer.textContent = "fermet"
    divVide.appendChild(effacer);
    effacer.addEventListener('click', (e) => {
        divVide.style.displa = 'none';
    })
});
// }
// //AJOUTER un employe dans un chambre
// let btn_ajoute = document.getElementById("btn_ajoute");
// btn_ajoute . addEventListener ('click',(e)=>{
//     let divEpmloyeChambre = document.createElement("div");
//         divEpmloyeChambre.className=" border border-solide border-black rounded p-2 bg-white w-[20rem] z-index-10";
//     divEpmloyeChambre.name="divEpmloyeChambre";
//    sectionImage.appendChild(divEpmloyeChambre);
// })


// utilisateur.forEache(()=>{
//     let div = document.createElement("div");
//     div.className="p-4 border rounded shadow bg-gray-50";

// })



// const objetInfo = { nom, email, telephone, experiences, experienceInput };
// utilisateur.push(objetInfo);
// localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
// alert("utilisateur ajoute ")
// formulaire.reset();

////validation des input des formulaire **************************
let btn_envoyer = document.getElementById('btn_envoyer');
let formulaire = document.getElementById('formulaire');
let utilisateur = JSON.parse(localStorage.getItem("utilisateur")) || [];

btn_envoyer.onclick = (e) => {
    let nom = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telephone = document.getElementById("telephone").value.trim();
    let experiences = document.getElementById("Experiences").value.trim();

    // wash dook les input khaween
    if (nom === "" || email === "" || telephone === "" || experiences === "") {
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


// afficher les employee
const cotes_employe = document.getElementById("cotes_employe");
let afficherEmployees = document.getElementById("afficherEmployees");
afficherEmployees.addEventListener('click',(e)=>{
    const divEmploye=document.createElement("div");
    divEmploye.className=" border border-solide border-black rounded p-2 bg-white w-[20rem] z-index-10";
    divEmploye.name="divEmploye";
   cotes_employe.appendChild(divEmploye);

   utilisateur=JSON.parse(localStorage.getItem("utilisateur"))||[];
   if(utilisateur.length===0){
    divEmploye.textContent="Aucun employé trouvé";
   }
   return;
})
// utilisateur.forEache(()=>{
//     let div = document.createElement("div");
//     div.className="p-4 border rounded shadow bg-gray-50";



// })



//AJOUTER un employe dans un chambre
let btn_ajoute = document.getElementById("btn_ajoute");
btn_ajoute . addEventListener ('click',(e)=>{
    let divEpmloyeChambre = document.createElement("div");
        divEpmloyeChambre.className=" border border-solide border-black rounded p-2 bg-white w-[20rem] z-index-10";
    divEpmloyeChambre.name="divEpmloyeChambre";
   sectionImage.appendChild(divEpmloyeChambre);
})

// const objetInfo = { nom, email, telephone, experiences, experienceInput };
// utilisateur.push(objetInfo);
// localStorage.setItem("utilisateur", JSON.stringify(utilisateur));
// alert("utilisateur ajoute ")
// formulaire.reset();
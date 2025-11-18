
////validation des input des formulaire **************************
let btn_envoyer = document.getElementById('btn_envoyer');

btn_envoyer.onclick = (e) => {
    let nom = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telephone = document.getElementById("telephone").value.trim();
    let experiences = document.getElementById("Experiences").value.trim();
     experiencePLUS=document.getElementById("experiencePLUS").value.trim();


    // wash dook les input khaween
    if (nom === "" || email === "" || telephone === "" || experiences === "" || experiencePLUS==="") {
        alert("Remplir tous les champs !!");
        return;
    }
    //validation ta3 nome
    const nomRegex = /^[a-zA-Z]+$/;

    if (!nomRegex.test(nom)) {
        alert("Nom incorrect !");
        return;
    }
    // validation ta3 email
    const emailRegex = /^[a-zA-Z]+[0-9]+@+gmail.com+$/;

    if (!emailRegex.test(email)) {
        alert("Email incorrect !");
        return;
    }


    // validation ta3 telephone
    const telephoneRegex =  /^\+212[0-9]{9}$/;

    if(!telephoneRegex.test(telephone)){
        alert("telephone incorrect !");
        return;
    }

    //validation ta3 experience
    const experiencesRegex = /^[a-zA-Z]+$/;

    if (!experiencesRegex.test(experiences)) {
        alert("remplire une vrai experience !");
        return;
    }
        const experiencePLUS = /^[a-zA-Z]+$/;

    if (!experiencePLUSRegex.test(experiencePLUS)) {
        alert("remplire une vrai experience !");
        return;
    }


    //validation de url
}

/// formulaire dynamique ***********************************
let ExperiencesContainer = document.getElementById("ExperiencesContainer");
let btnPlus = document.getElementById("btn_plus");

btnPlus.addEventListener('click', function () {
    
    const experiencePLUS = document.createElement("input");
    experiencePLUS.className = "border border-solide-balck rounded px-5 py-2";
    input.id = "experiencePLUS";
    experiencePLUS.placeholder = "Ajouter autre expérience";

    ExperiencesContainer.appendChild(experiencePLUS);
});

//ajouter un employe
let ajouterEmploye = document.getElementById('ajouterEmploye');
ajouterEmploye.addEventListener('click',(e)=>{
    formulaire.style.display = 'block';
});
// //afficher les employee
// let afficherEmployees = document.getElementById("afficherEmployees");
// afficherEmployees.addEventListener('click',(e)=>{
// })


// //AJOUTER un employe dans un chambre 
// let btn_ajoute = document.getElementById("btn_ajoute");
// btn_ajoute . addEventListener ('click',(e)=>{
//     let employe = document.createElement("section");
// })






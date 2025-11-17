
////validation des input des formulaire **************************
let btn_envoyer = document.getElementById('btn_envoyer');

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
    const telephoneRegex = /^\(+212|0)(6|7|5)[0-9]{9}$/;

    if(!teleohoneRegex.test(telephone)){
        alert("telephone incorrect !");
        return;
    }

    // //validation ta3 experience
    // const experiencesRegex = /^[a-zA-Z]+$/;

    // if (!experiencesRegex.test(experiences)) {
    //     alert("remplire une vrai experience !");
    //     return;
    // }


    //validation de url
}


///formulaire dynamique ***********************************
let ExperiencesContainer = getElementById("ExperiencesContainer");
let btnPlus = document.getElementById("btn_plus");
btnPlus.addEventListener('click',function (e){
        ExperiencesContainer.innerHTML = "";
    const experience = document.createElement("input");
    experience.className = "border border-solide-balck rounded px-5";
    experience.id = `Experiences-${experiences.id}`;
    ExperiencesContainer.appendChild(experiences);
})
//ajouter un employe
let ajouterEmploye = document.getElementById("ajouterEmploye");
ajouterEmploye.addEventListener('click',(e)=>{
    formulaire.style.display = 'block';
});
//afficher les employee
let afficherEmployees = document.getElementById("afficherEmployees");
afficherEmployees.addEventListener('click',(e)=>{
})







//   document.addEventListener('click', function (e) {
//             if (e.target.classList.contains('clone-btn')) {
//                 const row = e.target.closest('.clonable-row');
//                 const newRow = row.cloneNode(true);
//                 newRow.querySelector('input').value = '';
//                 newRow.querySelector('button').textContent = '-';
//                 newRow.querySelector('button').className = 'remove-btn';
//                 row.parentNode.appendChild(newRow);
//             }
//             else if (e.target.classList.contains('remove-btn')) {
//                 e.target.closest('.clonable-row').remove();
//             }
//         });
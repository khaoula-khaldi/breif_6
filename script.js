
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

    if(!emailRegex.test(email)) {
        alert("Email incorrect !");
        return;
    }
    
    
    // // validation ta3 telephone
    // const teleohoneRegex = /^\(+212|0)(6|7|5)[0-9]{9}$/;

    // if(!teleohoneRegex.test(telephone)){
    //     alert("telephone incorrect !");
    //     return;
    // }


    //validation ta3 experience
    const experiencesRegex =/^[a-zA-Z]+$/;

    if(!experiencesRegex.test(experiences)){
         alert("remplire une vrai experience !");
        return;
    }
    //validation de url
}
///tableau dans local storeg qui stokes les info les employer





let btn_envoyer = document.getElementById('btn_envoyer');

btn_envoyer.onclick = (e) => {
    let nom = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telephone = document.getElementById("telephone").value.trim();
    let experiences = document.getElementById("Experiences").value.trim();

    //validation ta3 nome
    const nomRegex = /^[A-Za-z]+$/;
    // wash dook les input khaween
    if (nom === "" || email === "" || telephone === "" || experiences === "") {
        alert("Remplir tous les champs !!");
        return;
    }

    // validation ta3 nome
    if (!nomRegex.test(nom)) {
        alert("Nom incorrect ");
        return;
    } 
    // validation ta3 email
    const emailRegex = /^[A-Za-z1_10]+@+email.com+$/;
    if(!emailRegex.test(email)) {
        alert("Email incorrect ");
        return;
    } 

   
}

// creo la funzione per controllare l'email
document.getElementById("genera").addEventListener("click", checkEmail);

function checkEmail (){
// Creo un array con la lista delle email
let listaEmail = ["pincopallo@gmail.com", "pippo@gmail.com", "paperino@gmail.com"]
console.log(listaEmail)
let vero_falso = false;
let myEmail = document.getElementById("my_email").value;
console.log(myEmail)

    // Creo un ciclo
    for(let i = 0; i<listaEmail.length; i++){
        let email = listaEmail[i]
        console.log(email)
        // Se l'email è nella lista puoi accedere
        if (myEmail == email){
            const show_rollDice = document.getElementById("show_dice")
            vero_falso = true
            document.getElementById("message_email").innerHTML="La tua email è nella lista!"
        } // Fine condizione

    } // fine ciclo for
    if (vero_falso == false){
        alert("La tua email non è sulla lista")
    }
}// fine funzione




//funzione per lanciare i dadi
document.getElementById("roll_dice").addEventListener("click", roll_dice);

function roll_dice(){
    // tiro i dadi computer
    let numeroRandomPc = Math.floor(Math.random()*6 +1)
    // Scrivo quanto ha tirato il pc
    document.getElementById("showdice_pc_result").innerHTML= "Il Computer ha lanciato" + " " + numeroRandomPc 
    console.log(numeroRandomPc)
    // tiro i dadi giocatore
    let numeroRandomUser = Math.floor(Math.random()*6 +1)
    // Scrivo quanto ho tirato
    document.getElementById("showdice_user_result").innerHTML= "Ho lanciato" + " " + numeroRandomUser 
    console.log(numeroRandomUser)
    // Vincitore
    if(numeroRandomPc > numeroRandomUser){
        document.getElementById("vincitore").innerHTML= "Hai perso"
    } else if (numeroRandomPc < numeroRandomUser){
        document.getElementById("vincitore").innerHTML= "Hai vinto"
    } else{
        document.getElementById("vincitore").innerHTML= "Pari"
    }
}
// Fine funzione tira i dadi
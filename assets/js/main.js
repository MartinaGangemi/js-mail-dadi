// Creo un array con la lista delle email
let listaEmail = ["pincopallo@gmail.com", "pippo@gmail.com", "paperino@gmail.com"]
console.log(listaEmail)
const richiestaEmail = prompt("Inserisci la tua email")

// Creo un ciclo
for(let i = 0; i<listaEmail.length; i++){
    let email = listaEmail[i]
    console.log(typeof email)
    console.log(email)
    // Se l'email è nella lista puoi accedere
    if (richiestaEmail == listaEmail[i]){
        alert("la tua email è nella lista!")
        // tiro i dadi computer
        let numeroRandomPc = Math.floor(Math.random()*6 +1)
        console.log(numeroRandomPc)
        // tiro i dadi giocatore
        let numeroRandomUser = Math.floor(Math.random()*6 +1)
        console.log(numeroRandomUser)
        // Vincitore
        if(numeroRandomPc > numeroRandomUser){
            alert("hai perso :c")
        } else if (numeroRandomPc < numeroRandomUser){
            alert("hai vinto c:")
        } else{
            alert("pari")
        }
    } 
}




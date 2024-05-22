// Generazione di numeri casuali
function generaNumeriCasuali() {
    const numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * 100));
    }
    return numeri;
}

// Funzione per mostrare i numeri
function mostraNumeri(numeri) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    numeri.forEach(numero => {
        const p = document.createElement('p');
        p.textContent = numero;
        container.appendChild(p);
    });
}

// Genero i numeri casuali e li mostro
const numeriCasuali = generaNumeriCasuali();
mostraNumeri(numeriCasuali);

setTimeout(() => {
    const container = document.getElementById('container');
    container.innerHTML = ''; 

    const numeriInseriti = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt("Inserisci uno dei numeri che hai visto:"));
        numeriInseriti.push(numero);
    }
// timer 10 secondi 
    let numeriIndovinati = numeriInseriti.filter(numero => numeriCasuali.includes(numero));
    console.log("Numeri inseriti:", numeriInseriti);
    console.log("Numeri indovinati:", numeriIndovinati);
}, 10000);

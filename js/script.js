// generazione di numeri casual
function numeriCasuali() {
    const numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * 100));
    }
    return numeri;
}
// funzione per mostrare i numeri
function mostraNumeri(numeri) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    numeri.forEach(numero => {
        const p = document.createElement('p');
        p.textContent = numero;
        container.appendChild(p);
    });
}

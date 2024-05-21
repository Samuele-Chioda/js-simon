// generazione di numeri casual

function numeriCasuali() {
    const numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * 100));
    }
    return numeri;
}


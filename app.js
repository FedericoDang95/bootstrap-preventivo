document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-primary').addEventListener('click', function () {
        // Prendi i valori dal form
        const tipoLavoro = document.getElementById('inputLavoro').value;
        const promoCode = document.getElementById('inputPromoCode').value;

        // Numero di ore
        const oreLavoro = 10;

        // Prezzi orari
        const prezziOrari = {
            'backend': 20.50,
            'frontend': 15.30,
            'analisi progettuale': 33.60
        };

        // Codici promozionali validi
        const codiciPromozionali = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

        // Calcola il prezzo base in base al tipo di lavoro
        let prezzoOrario;
        switch (tipoLavoro) {
            case 'backend':
                prezzoOrario = prezziOrari.backend;
                break;
            case 'frontend':
                prezzoOrario = prezziOrari.frontend;
                break;
            case 'analisi progettuale':
                prezzoOrario = prezziOrari['analisi progettuale'];
                break;
            default:
                alert('Seleziona un tipo di lavoro valido');
                return;
        }

        // Calcola il prezzo finale
        let prezzoFinale = oreLavoro * prezzoOrario;

        // Applica sconto se il codice promozionale è valido
        if (codiciPromozionali.includes(promoCode.toUpperCase())) {
            prezzoFinale *= 0.75; // Applica uno sconto del 25%
        } else if (promoCode !== '') {
            alert('Codice promozionale non valido');
        }

        // Mostra il prezzo finale in forma umana (con 2 decimali e il simbolo dell'euro)
        const risultatoElement = document.getElementById('result');
        risultatoElement.innerHTML = `<p>Il prezzo finale è: €${prezzoFinale.toFixed(2)}</p>`;
    });
});

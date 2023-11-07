import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { Artwork } from './Artwork.js'
import { Statue } from './Statue.js'

const lista : Artwork[] = [];

document.addEventListener('DOMContentLoaded', function () {
    const titleInput = document.getElementById('titleInput') as HTMLInputElement;
    const yearInput = document.getElementById('yearInput') as HTMLInputElement;
    const priceInput = document.getElementById('priceInput') as HTMLInputElement;
    const heightInput = document.getElementById('heightInput') as HTMLInputElement;
    const errorMessage = document.getElementById('errorMessage') as HTMLParagraphElement;
    const szoborDb = document.getElementById('szoborDb') as HTMLInputElement;
    const arakFt = document.getElementById('arakFt') as HTMLInputElement;

    window.addEventListener('submit', function(e : Event) {
        e.preventDefault();
        
        
        try {
            lista.push(new Statue(titleInput.value, yearInput.value, priceInput.valueAsNumber, heightInput.valueAsNumber));

            var ar : number = 0;
            lista.forEach(item => ar += item.price);

            szoborDb.value = lista.length.toString();
            arakFt.value = ar.toString();

            console.table(lista);

            titleInput.value = "";
            yearInput.value = "";
            priceInput.value = "";
            heightInput.value = "";
            errorMessage.textContent = "";
        }
        catch (event) {
            if (event instanceof Error) {
                errorMessage.textContent = event.message;
            }
        }
    })
});

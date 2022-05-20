let count = 1;

let breeds = [];

function search() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((json) => {

            const dogPics = document.getElementById("picture").src = json.message;

            const splitMessage = dogPics.split('/')[4];

            let repeatedBreed = breeds.includes(splitMessage);

            if (!repeatedBreed) {
                document.getElementById(`${count}`).src = dogPics;
                breeds.push(splitMessage);
                count++
            } else {
                breeds.push(splitMessage);
                const phrase = document.createElement('h3');
                const text = document.createTextNode('La imagen no se insertará al ser una raza repetida');
                phrase.appendChild(text);
                document.body.appendChild(phrase);
                setTimeout (() => {
                    phrase.style.display = 'none';
                }, 4000);
            } 

            console.log(breeds);
            localStorage.setItem("Razas Repetidas", JSON.stringify(breeds));
        });
}



//en el boton random guardar las urls generadas para ver si se repite y desecharla.
//saber cuantas veces se ha creado la misma url para hacer la gráfica.
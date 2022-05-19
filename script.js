function search() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            // let divImgen = document.getElementById("divImg")
            // const generarLink = json.message;
            // divImgen.innerHTML = `<img src='${generarLink}'/>`


            document.getElementById('picture').src = json.message;
            return json
        })

        .then(json => {
            let linkArray = [];
            let count = 0
            const button = document.getElementById('random');
            button.onclick = function () {
                count++
                console.log(count);
                linkArray.push(document.getElementById('picture').src = json.message);
                console.log(linkArray);

            }
            if (count === 1) {
                document.getElementById("uno").src = json.message;
            }

            //if()
            //document.getElementById("uno").src = json.message;
            return json
        })
}

search();



//en el boton random guardar las urls generadas para ver si se repite y desecharla.
//saber cuantas veces se ha creado la misma url para hacer la gráfica.
function search() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let divImgen = document.getElementById("divImg")
            const generarLink = json.message;
            divImgen.innerHTML = `<img src='${generarLink}'/>` 

            //document.getElementsByClassName("picture").src = generarLink;

            //nodoImg.src=`${generarLink}`

            .then(json=>{
                document.getElementById('random').src=json.message;
                return json
            })
        

            console.log(generarLink);
            return json;
        });
}

search();



//en el boton random guardar las urls generadas para ver si se repite y desecharla.
//saber cuantas veces se ha creado la misma url para hacer la gráfica.
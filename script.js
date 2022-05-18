function search () {
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
    });
}

search();


//en el boton random guardar las urls generadas para ver si se repite y desecharla.
//saber cuantas veces se ha creado la misma url para hacer la gráfica.
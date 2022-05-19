let count = 0
let linkArray = [];
let breeds = [];
let repeatedBreeds = [];

function search() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
           
            const links = document.getElementById('picture').src = json.message;
            //console.log(linkArray);
            count++

            const splitMessage = json.message.split('/')[4];
            breeds.push(splitMessage);
            console.log(breeds)

            for (let i = 0; i < breeds.length; i++) {
                if (json.message.split('/')[4] == breeds) {
                    console.log("Existe");
                } else {
                    console.log("No existe");
                }
            }


            if (count == 1) {
                document.getElementById("1").src = json.message;
            } else if (count == 2) {
                document.getElementById("2").src = json.message;
            } else if (count == 3) {
                document.getElementById("3").src = json.message;
            } else if (count == 4) {
                document.getElementById("4").src = json.message;
            } else if (count == 5) {
                document.getElementById("5").src = json.message;
            } else if (count == 6) {
                document.getElementById("6").src = json.message;
            } else if (count == 7) {
                document.getElementById("7").src = json.message;
            } else if (count == 8) {
                document.getElementById("8").src = json.message;
            } else if (count == 9) {
                document.getElementById("9").src = json.message;
            } else if (count == 10) {
                document.getElementById("10").src = json.message;
            } else if (count == 11) {
                document.getElementById("11").src = json.message;
            } else if (count == 12) {
                document.getElementById("12").src = json.message;
            } else if (count == 13) {
                document.getElementById("13").src = json.message;
            } else if (count == 14) {
                document.getElementById("14").src = json.message;
            } else if (count == 15) {
                document.getElementById("15").src = json.message;
            } else if (count == 16) {
                document.getElementById("16").src = json.message;
            } else if (count == 17) {
                document.getElementById("17").src = json.message;
            } else if (count == 18) {
                document.getElementById("18").src = json.message;
            } else if (count == 19) {
                document.getElementById("19").src = json.message;
            } else if (count == 20) {
                document.getElementById("20").src = json.message;
            }

            linkArray.push(document.getElementById('picture').src = json.message);

            localStorage.setItem("Razas", JSON.stringify(linkArray));
            for (let i = 0; i < linkArray.length; i++) {
                const splitLink = linkArray[i].split('/');
                const getBreed = splitLink[4];
                //console.log(getBreed);
            }


        })
}

//search();



//en el boton random guardar las urls generadas para ver si se repite y desecharla.
//saber cuantas veces se ha creado la misma url para hacer la gráfica.
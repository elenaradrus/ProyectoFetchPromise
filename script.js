let count = 1;
let breeds = [];
let retrieveData = [];

function search() {
    retrieveData = localStorage.getItem("Razas_de_Perros");

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => {
            const dogPics = document.getElementById("picture").src = json.message;
            const splitMessage = dogPics.split('/')[4];
            retrieveData = JSON.parse(localStorage.getItem("Razas_de_Perros"));

            if (retrieveData == null) {
                retrieveData = [];
                retrieveData.push([splitMessage, 1, json.message]);
                localStorage.setItem("Razas_de_Perros", JSON.stringify(retrieveData));
            } else {
                //[[Nombre, contador], [Nombre, contador], [Nombre, contador], [Nombre, contador]];
                var encontrado = false;
                let i = 0;
                while (i < retrieveData.length && !encontrado) {
                    encontrado = encontrado || splitMessage == retrieveData[i][0];
                    i++;
                }
                if (encontrado) {
                    retrieveData[i][1] = retrieveData[i][1] + 1;
                    retrieveData.splice(i, 1, retrieveData[i]);
                    localStorage.setItem("Razas_de_Perros", JSON.stringify(retrieveData));
                } else {
                    retrieveData.push([splitMessage, 1, json.message]);
                    localStorage.setItem("Razas_de_Perros", JSON.stringify(retrieveData));
                }
            }

            console.log(retrieveData);
            let repeatedBreed = breeds.includes(splitMessage);
            retrieveData = JSON.parse(localStorage.getItem("Razas_de_Perros"));
            if (!repeatedBreed) {
                document.getElementById(`${count}`).src = dogPics;
                breeds.push([splitMessage, 1]);
                count++
            } 
            
        })
        .then(json => {
            let nameDogs = [];
            let countDogs= [];
            retrieveData = JSON.parse(localStorage.getItem("Razas_de_Perros"));
            for(i = 0; i < retrieveData.length;i++){
                nameDogs.push(retrieveData[i][0]);
                
                countDogs.push(retrieveData[i][1]);
            }
           
            if (count > 20) {
                const getChart = document.getElementById('myChart');
                const dogChart = new Chart(getChart, {
                    type: 'bar',
                    data: {
                        labels: nameDogs,
                        datasets: [{
                            label: "Dog Breeds",
                            data: countDogs,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        });
}


function clearData () {
    localStorage.clear();
}


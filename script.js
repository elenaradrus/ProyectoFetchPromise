let count = 1;
let breeds = [];

function search() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => {

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
                setTimeout(() => {
                    phrase.style.display = 'none';
                }, 4000);
            }

            console.log(breeds);
            localStorage.setItem("Razas Repetidas", JSON.stringify(breeds));
        })
        .then(json => {
            if (count == 21) {
                const getChart = document.getElementById('myChart');

                const dogChart = new Chart(getChart, {
                    type: 'line',
                    data: {
                        labels: breeds,
                        datasets: [{
                            label: 'Razas de perros',
                            data: [5, 2, 1, 4, 10, 6, 1, 3, 10, 20, 15, 3, 6, 8, 9, 2, 8, 13, 12, 5],
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
let button = document.getElementById('button')

let api_key = `62564f89b78628a401eef6db8c9a6ad4`

async function weather(){
    let cit = document.getElementById('city').value;
    const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cit}&appid=${api_key}`);
    let data = await link.json();
    
    document.querySelector('#weather').innerHTML = data.weather[0].main;
    document.getElementById('humidity').innerHTML = data.main.humidity+` g/kg`;
    document.querySelector('.temp').innerHTML = data.main.temp+` *C`;

    document.querySelector('.speed').innerHTML = data.wind.speed+` m/s`;
    
}

button.addEventListener('click',weather)
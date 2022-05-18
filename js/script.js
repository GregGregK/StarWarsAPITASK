const results = document.querySelector("#results");

async function asyncFetch(value) { 
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    console.log(data)
    displayResults(data, value);
}

function displayResults(data, value) {
    let output = "" ;  
    console.log(data);
    if (value === 'films') {
        data.results.forEach(item =>{
            output +=   
            `<div class="card p-3 m-3" style="opacity:.8"> 
            <h4 class="card-title text-center">${item.title}</h4>
            <div class="card-content"> 
                <span style="text-decoration:underline">Produtor</span>:${item.producer}<br>
                <span style="text-decoration:underline">Diretor</span>:${item.director}<br>
                <span style="text-decoration:underline">Data de lançamento</span>:${item.release_date}<br>
                <span style="text-decoration:underline">Episodio</span>:${item.episode_id}<br>
                <p class="text-center">${item.opening_crawl}</p>
            </div>
            </div>
            `
                
        })
    }
    if (value === 'people') {
        data.results.forEach(item =>{
            output +=   
            `<div class="card p-3 m-3" style="opacity:.8"> 
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content"> 
                <span style="text-decoration:underline">Altura</span>:${item.height}<br>
                <span style="text-decoration:underline">Aniversário</span>:${item.birth_year}<br>
                <span style="text-decoration:underline">Cor</span>:${item.skin_color}<br>
                <span style="text-decoration:underline">Genêro</span>:${item.gender}<br>
                </div>
            </div>
            `
        })
    }
    if (value === 'vehicles') {
        data.results.forEach(item =>{
            output +=   
            `<div class="card p-3 m-3" style="opacity:.8"> 
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content"> 
                <span style="text-decoration:underline">Capacidade</span>:${item.cargo_capacity} kg <br>
                <span style="text-decoration:underline">Modelo</span>:${item.model}<br>
                <span style="text-decoration:underline">Manufactor</span>:${item.manufacturer}<br>
                <span style="text-decoration:underline">Classe</span>:${item.vehicle_class}<br>
            </div>
            </div>
            `
                
        })
    }
    results.innerHTML = output ;
}

document.querySelector('#botoes').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
});
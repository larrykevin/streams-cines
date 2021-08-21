class AppStreams extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const section = document.createElement('section');
        const header = document.createElement('header');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h1 = document.createElement('h1');

        shadow.appendChild(section);
        section.appendChild(header);
        section.appendChild(div);
        header.appendChild(img);
        header.appendChild(h1);

        const style = document.createElement('style');
        shadow.appendChild(style);
    }
    static get observedAttributes() {
        return ["img", "title", "container"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('El componente hizo un cambio');
        printStreams(this);
    }
    connectedCallback() {
        console.log('Se reemplazo nuestra sección');
        printStreams(this);
        eventsApp(this);
    }
    disconnectedCallback() {
        console.log('Se removió de la página');
        netflixBrand.removeEventListener("click", handler);
        disneyBrand.removeEventListener("click", handler);
        primeBrand.removeListener("click", handler);
        hboBrand.removeListener("click", handler);
        paramountBrand.removeListener("click", handler);
        appleBrand.removeListener("click", handler);
    }
}

customElements.define("app-streams", AppStreams);

function printStreams(e) {
    const shadow = e.shadowRoot;
    const image = shadow.querySelector('img');
    const h1 = shadow.querySelector('h1');
    const div = shadow.querySelector('div');
    const style = shadow.querySelector('style');

    image.setAttribute('src',`${e.getAttribute('img')}`);
    h1.textContent = `${e.getAttribute('title')}`
    div.innerHTML = e.getAttribute('container');

    style.textContent = `
        .streams-container {
            -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards;
        }
        .result-container {
            -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards;
        }
        .streams {
            display: grid;
            justify-content: center;
            grid-template-columns: minmax(50px, 120px) minmax(50px, 120px) minmax(50px, 120px);
            grid-template-rows: minmax(50px, 120px) minmax(50px, 120px);
            grid-gap: 8px;
            padding: 0 16px
        }
        header {
            padding-top: 56px;
            text-align: center;
        }
        header img {
            height: 10rem;
        }
        h1 {
            font-weight: normal;
            margin: 20px auto 0;
            font-size: 3.2rem;
            max-width: 260px;
        }
        h2 {
            font-weight: normal;
            margin: 10px auto 0;
            font-size: 4.8rem;
            max-width: 260px;
            color: #00A890;
        }
        p,
        span {
            font-size: 1.8rem;
        }
        .title-streams {
            margin: 0 auto;
            max-width: 210px;
            text-align: center;
        }
        .streams img {
            padding: 16px;
            border: 0.2rem solid #22364C;
            border-radius: 6px;
            height: -webkit-fill-available;
            width: -webkit-fill-available;
        }
        .streams img:nth-of-type(2),
        .streams img:nth-of-type(3),
        .streams img:nth-of-type(5) {
            padding: 12px 6px;
        }
        .result-month {
            text-align: center;
        }
        .saving-result {
            margin: 0;
            color: #00A890;
        }
        .result-if {
            margin: 24px auto 0;
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid #22364C;
            border-radius: 6px;
            text-align: center;
            color: #B7C0CA;
        }
        .result-if p {
            margin: 0;
        }
        .movie-result {
            font-weight: bold;
        }

        @-webkit-keyframes slide-in-right {
            0% {
              -webkit-transform: translateX(600px);
                      transform: translateX(600px);
              opacity: 0;
            }
            100% {
              -webkit-transform: translateX(0);
                      transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slide-in-right {
            0% {
              -webkit-transform: translateX(600px);
                      transform: translateX(600px);
              opacity: 0;
            }
            100% {
              -webkit-transform: translateX(0);
                      transform: translateX(0);
              opacity: 1;
            }
          }
    `;
}

function eventsApp(e) {
    const shadow = e.shadowRoot;
    const streams = shadow.querySelector('.streams');
    const netflixBrand = shadow.querySelector('.streams img:nth-of-type(1)');
    const disneyBrand = shadow.querySelector('.streams img:nth-of-type(2)');
    const primeBrand = shadow.querySelector('.streams img:nth-of-type(3)');
    const hboBrand = shadow.querySelector('.streams img:nth-of-type(4)');
    const paramountBrand = shadow.querySelector('.streams img:nth-of-type(5)');
    const appleBrand = shadow.querySelector('.streams img:nth-of-type(6)');

    const handler = {
        handleEvent(e) {
            if (e.target === netflixBrand) {
                streams.setAttribute("brand", "Netflix");
                streams.setAttribute("price", "8.50");
                streams.setAttribute("logo", "netflix.svg");
                console.log('click en netflix');
            }
            else if (e.target === disneyBrand) {
                streams.setAttribute("brand", "Disney +");
                streams.setAttribute("price", "6.35");
                streams.setAttribute("logo", "disney.svg");
                console.log('click en disney');
            }
            else if (e.target === primeBrand) {
                streams.setAttribute("brand", "Prime Video");
                streams.setAttribute("price", "3.90");
                streams.setAttribute("logo", "prime.svg");
                console.log('click en prime');
            }
            else if (e.target === hboBrand) {
                streams.setAttribute("brand", "HBO Go");
                streams.setAttribute("price", "7.30");
                streams.setAttribute("logo", "hbo.svg");
                console.log('click en hbo');
            }
            else if (e.target === paramountBrand) {
                streams.setAttribute("brand", "Paramount +");
                streams.setAttribute("price", "3.65");
                streams.setAttribute("logo", "paramount.svg");
                console.log('click en paramount');
            }
            else if (e.target === appleBrand) {
                streams.setAttribute("brand", "Apple Tv");
                streams.setAttribute("price", "4.99");
                streams.setAttribute("logo", "appletv.svg");
                console.log('click en apple');
            }
        }
    }

    netflixBrand.addEventListener("click", handler);
    disneyBrand.addEventListener("click", handler);
    primeBrand.addEventListener("click", handler);
    hboBrand.addEventListener("click", handler);
    paramountBrand.addEventListener("click", handler);
    appleBrand.addEventListener("click", handler);
}

function containerStreams() {
    return `
        <div class="title-streams">
            <p>Escoge que plataforma de streaming sería tu favorito</p>
        </div>
        <div class="streams">
            <img src="../src/assets/netflix.svg" alt="logo de Netflix" brand="" price=""/>
            <img src="../src/assets/disney.svg" alt="logo de Disney" brand="" price=""/>
            <img src="../src/assets/prime.svg" alt="logo de Prime"/>
            <img src="../src/assets/hbo.svg" alt="logo de HBO"/>
            <img src="../src/assets/paramount.svg" alt="logo de Paramount"/>
            <img src="../src/assets/appletv.svg" alt="logo de Apple TV"/>
        </div>
    `;
}

function containerResult() {
    return `
        <div class="result-month">
            <p>Pagarías al mes</p>
            <h2 class="month-result">$</h2>
            <p class="saving-result">$</p>
        </div>
        <div class="result-if">
            <p>Si irías al cine</p>
            <p class="movie-result">$<p/>
            <p>mensual</p>
        </div>
    `;
}

const buttonHome = document.getElementById('buttonHome');
const buttonStreams = document.getElementById('buttonStreams');
const inputName = document.getElementById('inputName');
const moviesAndSeries = [];
let streams
let total
let totalMoviesAndSeries

const moviesInput = document.getElementById('moviesInput');
const seriesInput = document.getElementById('seriesInput');

moviesInput.addEventListener('input', function(e) {
    e.preventDefault();
    console.log(`He mirado ${moviesInput.value} películas`);
    moviesAndSeries.push(moviesInput.value);
})

seriesInput.addEventListener('input', function(e) {
    e.preventDefault();
    console.log(`He mirado ${seriesInput.value} series`);
    moviesAndSeries.push(seriesInput.value);
})

buttonHome.onclick = function () {
    const container = document.getElementById('container');
    const containerHome = document.getElementById('container-home');
    const name = inputName.value || 'bienvenid@';

    streams = document.createElement('app-streams');
    streams.setAttribute('img', '../src/assets/movie.svg');
    streams.setAttribute('title', `Hola ${name}!`);
    streams.setAttribute('container', containerStreams());

    container.removeChild(containerHome);
    container.appendChild(streams);
    buttonHome.setAttribute("style", "display:none;");
    buttonStreams.setAttribute("style", "display:block");

    const shadow = streams.shadowRoot;
    const streamsContainer = shadow.querySelector('section');
    streamsContainer.classList.add('streams-container');
    streamsContainer.classList.add('result-container');

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    total = moviesAndSeries.map(Number);
    totalMoviesAndSeries = total.reduce(reducer);

    this.onclick = null;
}

buttonStreams.onclick = function () {
    const shadow = document.querySelector('app-streams').shadowRoot;
    const streamBrands = shadow.querySelector('.streams');
    const brand = streamBrands.getAttribute('brand');
    const price = streamBrands.getAttribute('price');
    const logo = streamBrands.getAttribute('logo');

    streams.setAttribute('img', `../src/assets/${logo}`);
    streams.setAttribute('title', `Con ${brand} en casa`);
    streams.setAttribute('container', containerResult());

    buttonStreams.setAttribute("style", "display:none;");
    buttonResult.setAttribute("style", "display:block");

    const monthResult = shadow.querySelector('.month-result');
    monthResult.textContent = `$${price}`;
    const savingResult = shadow.querySelector('.saving-result');
    const movieResult = shadow.querySelector('.movie-result');

    const entradaGeneral = 5.49;
    const costMovie = Math.round(totalMoviesAndSeries *  entradaGeneral) || 'no ingresado';
    const saving = Math.round((totalMoviesAndSeries *  entradaGeneral) - price) || 'no ingresado';

    savingResult.textContent = `Ahorrarías $${saving}`;
    movieResult.textContent = `Pagarías $${costMovie}`;
}

buttonResult.onclick = function () {
    const name = inputName.value || 'bienvenid@';

    streams.setAttribute('img', '../src/assets/movie.svg');
    streams.setAttribute('title', `Hola ${name}!`);
    streams.setAttribute('container', containerStreams());

    buttonStreams.setAttribute("style", "display:block;");
    buttonResult.setAttribute("style", "display:none");
}
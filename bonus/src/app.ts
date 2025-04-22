// Время практики! Напишите своё приложение о погоде, используя API OpenWeatherMap.

// Вы можете использовать свои картинки и доработать приложение по своему усмотрению. Например, можно создать разделы для отображения текущей температуры, погодных условий и прогноза на несколько дней.


interface TParams {
    [key: string]: string | number | undefined;
    q?: string;
    appid: string;
    units: string;
    lang: string;
    mode: string;
    lat?: number; // Latitude
    lon?: number; // Longitude
}

class App {
    private apiKey: string = 'b267b010b038f721fe77e6c211b58a82';
    private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
    private data: any = {};
    private location: any = {};
    private defaultCityName: string = 'Minsk';

    private queryParams: TParams= {
        appid: this.apiKey,
        units: 'metric',
        lang: 'ru',
        mode: 'json'
    }
    private iconUrl: string = 'https://openweathermap.org/img/wn/';
    private city: any = document.querySelector('#city');
    private form: any = document.querySelector('form.search');
    private input: any = this.form.querySelector('input');
    private button: any = this.form.querySelector('button');
    private weather: any = document.querySelector('#weather');
    private error: any = document.querySelector('.error');
    private icon: any = document.querySelector('#icon');
    private temperature: any = document.querySelector('#temperature_value');
    private description: any = document.querySelector('#description');
    private wind: any = document.querySelector('#wind_speed');
    private humidity: any = document.querySelector('#humidity_value');
    private feelsLike: any = document.querySelector('#feels-like');

    constructor() {
        this.init();
    }

    private render(data: any = this.data): void {
        this.error.classList.remove('active');

        if (data.cod == '404') {
            this.error.classList.add('active');
            this.error.textContent = 'Город не найден';

            return;
        }

        this.city.textContent = data.name;
        // this.icon.src = `${this.iconUrl}${data.weather[0].icon}.png`;
        this.icon.src = `./images/${data.weather[0].main.toLowerCase()}.png`;
        this.temperature.textContent = `${Math.round(data.main.temp)}`;
        this.description.textContent = data.weather[0].description;
        this.wind.textContent = `${data.wind.speed} м/с`;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.feelsLike.textContent = `${Math.round(data.main.feels_like)}`;
    }

    private async fetchWeatherData(params: TParams = this.queryParams): Promise<void> {
        // const getParams = params

        const queryString = Object.keys(params).map(key => {
            let value = String(params[key]);
            return `${key}=${encodeURIComponent(value)}`
            }).join('&');

        this.error.classList.remove('active');

        return fetch(`${this.apiUrl}?${queryString}`).then(response => response.json());
    }

    async init(): Promise<void> {
        this.form.addEventListener('submit', async (event: Event) => {
            event.preventDefault();
            this.queryParams.q = this.input.value;
            this.data = await this.fetchWeatherData(this.queryParams);
            this.render();
        })

        try {
            await this.getLocation();
            this.data = await this.fetchWeatherData({lat: this.location.latitude, lon: this.location.longitude, ...this.queryParams});
        } catch (error) {
            this.data = await this.fetchWeatherData({q: this.defaultCityName, ...this.queryParams});
        }

        this.render();
    }

    private async getLocation(): Promise<void> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.location = position.coords;
                    console.log(this.location);
                    resolve();
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

}

const app = new App();

app.init();

// console.log(app.fetchWeatherData());
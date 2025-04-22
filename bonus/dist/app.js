"use strict";
// Время практики! Напишите своё приложение о погоде, используя API OpenWeatherMap.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class App {
    constructor() {
        this.apiKey = 'b267b010b038f721fe77e6c211b58a82';
        this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.data = {};
        this.location = {};
        this.defaultCityName = 'Minsk';
        this.queryParams = {
            appid: this.apiKey,
            units: 'metric',
            lang: 'ru',
            mode: 'json'
        };
        this.iconUrl = 'https://openweathermap.org/img/wn/';
        this.city = document.querySelector('#city');
        this.form = document.querySelector('form.search');
        this.input = this.form.querySelector('input');
        this.button = this.form.querySelector('button');
        this.weather = document.querySelector('#weather');
        this.error = document.querySelector('.error');
        this.icon = document.querySelector('#icon');
        this.temperature = document.querySelector('#temperature_value');
        this.description = document.querySelector('#description');
        this.wind = document.querySelector('#wind_speed');
        this.humidity = document.querySelector('#humidity_value');
        this.feelsLike = document.querySelector('#feels-like');
        this.init();
    }
    render(data = this.data) {
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
    fetchWeatherData() {
        return __awaiter(this, arguments, void 0, function* (params = this.queryParams) {
            // const getParams = params
            const queryString = Object.keys(params).map(key => {
                let value = String(params[key]);
                return `${key}=${encodeURIComponent(value)}`;
            }).join('&');
            this.error.classList.remove('active');
            return fetch(`${this.apiUrl}?${queryString}`).then(response => response.json());
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.form.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
                event.preventDefault();
                this.queryParams.q = this.input.value;
                this.data = yield this.fetchWeatherData(this.queryParams);
                this.render();
            }));
            try {
                yield this.getLocation();
                this.data = yield this.fetchWeatherData(Object.assign({ lat: this.location.latitude, lon: this.location.longitude }, this.queryParams));
            }
            catch (error) {
                this.data = yield this.fetchWeatherData(Object.assign({ q: this.defaultCityName }, this.queryParams));
            }
            this.render();
        });
    }
    getLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.location = position.coords;
                    console.log(this.location);
                    resolve();
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
}
const app = new App();
app.init();
// console.log(app.fetchWeatherData());
//# sourceMappingURL=app.js.map
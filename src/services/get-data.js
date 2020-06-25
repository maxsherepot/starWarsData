
export default class GetData {
    _baseUrl = "https://swapi.dev/api/";

    getData = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Server can't fetch ${url}, got 
                ${res.status} status`)
        };
        return res.json();
    };

    getFilm = async (url) => {
        const res = await this.getData(`films/${url}`);
        return res;
    };

    getPlanet = async (url) => {
        const res = await this.getData(`planets/${url}`);
        return res;
    };

    getPerson = async (url) => {
        const res = await this.getData(`people/${url}`);
        return res;
    };

    getSpecies = async (url) => {
        const res = await this.getData(`species/${url}`);
        return res;
    };

    getAllFilms = async () => {
        const res = await this.getData(`films`);
        return res.results;
    };

    getAllPlanets = async () => {
        const res = await this.getData(`planets`);
        return res.results;
    };

    getAllPeople = async () => {
        const res = await this.getData(`people`);
        return res.results;
    };

    getAllSpecies = async () => {
        const res = await this.getData(`species`);
        return res.results;
    };
};

import axios from "axios";
import Country from "../model/Country";
import Question from "../model/Question";

class QuestionFactory {

    countries: Country[] = [];

    constructor() {
        atlas()
        .then(result => this.countries = result)
    }

    makeQuestion(subject: string): Question {
        const country = this.countries[Math.floor(Math.random() * this.countries.length)];

        if (subject == 'capitals') {
            const query = "What is the capital of " + country.name + " ?";
            const correctIndex = Math.floor(Math.random() * 4);
            const alternatives:string[] = [];
            for (let i = 0; i < 4;i++) {
                if (i == correctIndex) {
                    alternatives[i] = country.capital;
                } else {
                    const capital = this.countries[Math.floor(Math.random() * this.countries.length)].capital;
                    if (!alternatives.includes(capital) && capital != country.capital) {
                        alternatives[i] = capital;
                    }
                }
            }
            return new Question(query, alternatives, correctIndex);
        }

        if (subject == 'regions') {
            const query = "In what region is " + country.name + " located ?";
            const correctIndex = Math.floor(Math.random() * 4);
            const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
            const alternatives:string[] = [];
            for (let i = 0; i < 4;i++) {
                if (i == correctIndex) {
                    alternatives[i] = country.region;
                } else {
                    const region = regions[Math.floor(Math.random() * regions.length)];
                    if (!alternatives.includes(region) && region != country.region) {
                        alternatives[i] = region;
                    }
                }
            }
            return new Question(query, alternatives, correctIndex);
        }

        const query = country.flag + " What country is this flag from ?";
        const correctIndex = Math.floor(Math.random() * 4);
        const alternatives:string[] = [];
        for (let i = 0; i < 4;i++) {
            if (i == correctIndex) {
                alternatives[i] = country.name;
            } else {
                const name = this.countries[Math.floor(Math.random() * this.countries.length)].name;
                if (!alternatives.includes(name) && name != country.name) {
                    alternatives[i] = name;
                }
            }
        }
        return new Question(query, alternatives, correctIndex);
    }    
}

async function atlas(): Promise<Country[]> {
    const response = await axios.get(
      "https://restcountries.eu/rest/v2/all/");
    const data = response.data;
    const countries: Country[] = [];
    for (const country of data) {
      const name = country.name;
      const capital = country.capital;
      const region = country.region;
      const flag = country.flag;
      countries.push(new Country(name, capital, region, flag));
    }
    return countries;
  }

export default new QuestionFactory();
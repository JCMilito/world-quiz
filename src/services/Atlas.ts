import axios from "axios";
import Country from "../model/Country";

const atlas = async(): Promise<Country[]> => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all/");
    const data = response.data;
    const countries: Country[] = [];
    for (const country of data) {
      const name = country.name;
      const capital = country.capital;
      const region = country.region;
      const flag = country.flag;
      if (capital.length > 0) {
        countries.push(new Country(name, capital, region, flag));
      }
    }
    return countries;
  }

  export default atlas;
import Country from "./Country";

class City {
  public guid: number;
  public name: string;
  public country: Country;
  constructor(guid: number, name: string, country: Country) {
    this.guid = guid;
    this.name = name;
    this.country = country;
  }
  public static fromJson(json: any ): City {
    return new City(json.guid, json.name, json.country)
  }
}
export default City;

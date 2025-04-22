import axios from "axios";

class Country {
  public guid: number;
  public alpha2: string;
  public alpha3: string;
  public dialcode: string;
  public fr: string;
  public en: string;
  constructor(guid: number, alpha2: string, alpha3: string, dialcode: string, fr: string, en: string) {
    this.guid = guid;
    this.alpha2 = alpha2;
    this.alpha3 = alpha3;
    this.dialcode = dialcode;
    this.fr = fr;
    this.en = en;
  }

  public static fromJson(json: any): Country {
    return new Country(
      json.guid,
      json.alpha2,
      json.alpha3,
      json.dialcode,
      json.fr,
      json.en
    )
  }

  static async getAll(token: string){
    try {
      const response = await axios.get(`http://13.38.59.232/country/all`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200){
        return null;
      }
      const data = response.data.response;
      return data.map((entry: any) => Country.fromJson(entry));
    } catch (error){
      throw error;
    }
  }
}
export default Country;

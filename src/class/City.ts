import Country from "./Country";
import axios from "axios";

class City {
  public code: number;
  public name: string;
  public country: Country;
  constructor(code: number, name: string, country: Country) {
    this.code = code;
    this.name = name;
    this.country = country;
  }
  public static fromJson(json: any ): City {
    return new City(json.code, json.name, json.country)
  }

  static async getAll(token: string){
    try {
      const response = await axios.get(`http://13.38.59.232/city/all`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200){
        return null;
      }
      const data = response.data.response;
      // console.log("data.map((entry: any) => City.fromJson(entry))", data.map((entry: any) => City.fromJson(entry)), "data", data)
      return data.map((entry: any) => City.fromJson(entry));
    } catch (error){
      throw error;
    }
  }
}
export default City;

import axios from "axios";

class Lexicon {
  public id: number
  public guid: string
  public reference: string
  public english: string
  public french: string
  public portable: boolean

  constructor(
    reference: string,
    english: string,
    french: string,
    portable: boolean,
    guid?: string,
  ) {
    this.guid = guid || ''
    this.reference = reference
    this.english = english
    this.french = french
    this.portable = portable
  }

  public static fromJson(json: any): Lexicon {
    return new Lexicon(
      json.reference,
      json.english,
      json.french,
      json.portable,
      json.guid,
    )
  }
  static async getAll() {
    const siteUrl = 'http://13.38.59.232';
    try {
      const response = await axios.get(`${siteUrl}/lexicon/list_all`);
      if (!response.status) {
        return [];
      }
      const data = response.data.response;
      return data.map((entry: Lexicon) => Lexicon.fromJson(entry));
    } catch (error){
      throw error;
    }
  }
}

/*
static async getFormula(token: string) {
    const siteUrl = 'http://13.38.59.232';
    try {
      const response = await axios.get(`${siteUrl}/requirement`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.status) {
        return [];
      }
      const data = response.data.response;
      return data.map((entry: Formula) => Formulas.fromJson(entry));
    } catch (error){
      throw error;
    }
  };
 */

export default Lexicon;

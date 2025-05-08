import axios from "axios";
import Formulas from "../class/Formula";

class Formula {

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

  static async getFormulaByCode(code : string, token: string) {
    try {
      const siteUrl = 'http://13.38.59.232';
      const response = await axios.get(`${siteUrl}/formula/${code}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        return null;
      }
      // console.log('response.data.response', response.data.response);
      return Formulas.fromJson(response.data.response);
    } catch (error){
      throw error;
    }
  }

  static async save(formula: Formula, token: string): Promise<Formula> {

    const siteUrl = 'http://13.38.59.232';

    try {
      console.log("formula send saving", formula);
      const response = await axios.post(`${siteUrl}/formula/add`, formula, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      if (!response.status) {
        return null;
      }
      // console.log(Formulas.fromJson(response.data.response));
      return Formulas.fromJson(response.data.response);
      // return response.data;
    } catch (error)
    {
      throw error;
    }
  }

}
export default Formula;

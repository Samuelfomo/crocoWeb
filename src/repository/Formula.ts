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
  }

}
export default Formula;

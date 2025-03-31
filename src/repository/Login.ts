import axios from "axios";
import User from "@/class/Login";

class Login {

  static async auth(code: number, pin: number) {
    const SiteUrl = "http://13.39.158.20"
    const uuid = await axios.get(`${SiteUrl}/token/uuid`);

    const version = '1.0.0';
    const name = 'CROCO';
    const appCode = '154269875632';
    const identified = uuid.data.response;

    try {
      const token = await axios.post(`${SiteUrl}/token/auth`, {
        version: version,
        name: name,
        appCode: appCode,
        identified: identified,
      });

      const response = await axios.put(`${SiteUrl}/user/login`, {
        code: code,
        pin: pin
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.data.response.token}`
        },
      });
      if (response.data.status !== true){
        return null;
      }
      return User.fromJson(response.data.response);

    } catch (error){
      return null;
    }
  };
  static async getByGuid(guid: number){
    try {
      if (!guid){
        return null;
      }
      return guid;

    } catch (error){
      throw error;
    }
  }
}
export default Login;

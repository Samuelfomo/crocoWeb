import axios from "axios";
import User from "../class/User";

class Login {

  static async auth(code: number, pin: number) {
    const SiteUrl = "http://13.38.59.232/"
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

  static async myPartner(guid: number) {
    if (!guid) return null;
    console.log("guid sender is ", guid);

    const SiteUrl = "http://13.38.59.232/";
    const version = '1.0.0';
    const name = 'CROCO';
    const appCode = '154269875632';

    try {
      const { data: uuidData } = await axios.get(`${SiteUrl}/token/uuid`);
      const identified = uuidData.response;

      const { data: tokenData } = await axios.post(`${SiteUrl}/token/auth`, {
        version,
        name,
        appCode,
        identified,
      });

      const bearerToken = tokenData.response.token;

      const { data: response } = await axios.put(`${SiteUrl}/user/myPartner`, {
        manager: guid,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        }
      });

      if (!response.status) return null;

      const data = response.response;
      console.log(data.map(entry => User.fromJson(entry)));
      return data.map(entry => User.fromJson(entry));
      // return User.fromJson(response.response);
    } catch (error) {
      console.error('Erreur dans myPartner:', error);
      throw error;
    }
  }

}
export default Login;

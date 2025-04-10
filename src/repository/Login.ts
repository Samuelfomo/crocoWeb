import axios from "axios";
import User from "../class/User";
import useLoginStore from "../stores/userStore";

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

      if (token.data.status !== true) {
        return null;
      }

      const tokenStore = useLoginStore();
      tokenStore.setUserData({
        token: token.data.response.token,
      })

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

  static async myPartner(guid: number, token: string) {
    if (!guid) return null;

    const SiteUrl = "http://13.38.59.232/";
    // const version = '1.0.0';
    // const name = 'CROCO';
    // const appCode = '154269875632';

    try {
      // const { data: uuidData } = await axios.get(`${SiteUrl}/token/uuid`);
      // const identified = uuidData.response;
      //
      // const { data: tokenData } = await axios.post(`${SiteUrl}/token/auth`, {
      //   version,
      //   name,
      //   appCode,
      //   identified,
      // });
      //
      // const bearerToken = tokenData.response.token;
      console.log("token is", token);

      const { data: response } = await axios.put(`${SiteUrl}/user/myPartner`, {
        manager: guid,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.status) return null;

      const data = response.response;
      console.log(data.map(entry => User.fromJson(entry)));
      return data.map((entry : any) => User.fromJson(entry));
      // return User.fromJson(response.response);
    } catch (error) {
      console.error('Erreur dans myPartner:', error);
      throw error;
    }
  }


}
export default Login;

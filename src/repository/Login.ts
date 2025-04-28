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
    if (!Number(guid)) return null;

    const SiteUrl = "http://13.38.59.232";
    try {

      // const response  = await axios.put(`${SiteUrl}/user/myPartner`, {
      const { data: response } = await axios.put(`${SiteUrl}/user/myPartner`, {
        // manager: 100002,
        manager: Number(guid),
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status === false) return null;

      const data = response.response;
      return data.map((entry : User) => User.fromJson(entry));

    } catch (error) {
      console.error('Erreur dans myPartner:', error.response ? error.response.data : error.message);
      // throw error;
      return null;
    }
  }


}
export default Login;

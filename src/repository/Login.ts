import axios from "axios";
import User from "../class/User";
import useLoginStore from "../stores/userStore";

class Login {

  static async auth(code: number, pin: number) {
    const SiteUrl = "http://13.38.59.232"
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
        throw new Error(token.data.message || "Erreur inconnue de l'API");
      }

      const tokenStore = useLoginStore();
      tokenStore.setUserData({
        token: token.data.response.token,
      })

      try {
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
          throw new Error(response.data.message || "Erreur inconnue de l'API");
        }
        const result = User.fromJson(response.data.response);
        console.log(result.profil.reference);
        if (result.profil.reference === 'SALEPOINT'){
          throw new Error( "user_permission_denied" );
        }
        return result;
      }
      catch (error: any) {
        // Gestion des erreurs Axios + backend
        const apiMessage = error?.response?.data?.message || error?.message || "Erreur serveur";
        throw new Error(apiMessage);
      }

    } catch (error : any){
      // Gestion des erreurs Axios + backend
      const apiMessage = error?.response?.data?.message || error?.message || "Erreur serveur";
      throw new Error(apiMessage);
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

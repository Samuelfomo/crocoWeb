import Profil from "./Profil";
import Contact from "./Contact";
import Account from "./Account";
import axios from "axios";

class User{
  public guid: number;
  public name: string;
  public code: number;
  public pin: number;
  public profil: Profil;
  public contact: Contact;
  public blocked: boolean;
  public activated: boolean;
  public createdBy: User;
  public deleted: boolean;
  public isSecured: boolean;
  public lastLogin: Date;
  public account: Account;
  constructor(
    guid : number | null,
    name: string,
    code: number,
    pin: number,
    profil: Profil,
    contact: Contact,
    blocked : boolean,
    activated: boolean,
    createdBy: User | null,
    deleted: boolean,
    isSecured: boolean,
  lastLogin : Date| null,
    account: Account
  ) {
    this.guid = guid;
    this.name = name;
    this.code = code;
    this.pin = pin;
    this.profil = profil;
    this.contact = contact;
    this.blocked = blocked;
    this.activated = activated;
    this.createdBy = createdBy;
    this.deleted = deleted;
    this.isSecured = isSecured;
    this.lastLogin = lastLogin;
    this.account = account;
  }

  public static fromJson(json: any): User {
    return new User(
      json.guid, json.name, json.code, json.pin, json.profil, json.contact, json.blocked, json.activated, json.createdBy? json.createdBy : null, json.deleted, json.isSecured, new Date(json.lastLogin), json.account);
  }

  public async saved(token: string){
    const siteUrl = "http://13.38.59.232";
    try {
      const response = await axios.post(`${siteUrl}/user/add`, {
        guid: this.guid,
        name: this.name,
        profil: this.profil,
        contact: this.contact,
        manager: this.createdBy
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

       if (response.status === 200 && response.data?.status !== false) {
         const newPartner = User.fromJson(response.data.response);
         const validated = await axios.put(`${siteUrl}/user/validate`, {
           manager: this.createdBy,
           user: newPartner.guid
         }, {
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
           }
         });
         if (validated.status === 200 && validated.data?.status !== false){
           return User.fromJson(validated.data.response);
         } else {
           throw new Error(validated.data.message || "Erreur inconnue de l'API");
         }
      } else {
        // L'API a retourné un message d'erreur explicite
        throw new Error(response.data.message || "Erreur inconnue de l'API");
      }

    } catch (error) {
      // Gestion des erreurs Axios + backend
      if (error.response && error.response.data) {
        const apiMessage = error.response.data.message || "Erreur serveur";
        console.error("Erreur API :", apiMessage);
        throw new Error(apiMessage);
      } else {
        // Autres erreurs (réseau, timeout, etc.)
        console.error("Erreur système :", error.message);
        throw new Error(error.message);
      }
    }
  }

}
export default User;

import City from "./City";
import axios from "axios";

class Contact{
  public guid: number;
  public firstname: string;
  public lastname: string;
  public city: City;
  public location: string;
  public language: string;
  public gender: string;
  public mobile: string;
  public email: string;
  public created: Date

  constructor(guid: number, firstname: string, lastname: string, city: City, location: string, language: string,
              gender: string, mobile: string, email: string, created: Date){
    this.guid = guid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.city = city;
    this.location = location;
    this.language = language;
    this.gender = gender;
    this.mobile = mobile;
    this.email = email;
    this.created = created;
  }

  public static fromJson(json: any){
    return new Contact(
      json.code,
      json.firstname,
      json.lastname,
      json.city,
      json.location,
      json.language,
      json.gender,
      json.mobile,
      json.email,
      json.created,
    )
  }

  async saved(token: string){

    console.log("Payload envoyé", {
      guid: this.guid,
      firstname: this.firstname,
      lastname: this.lastname,
      city: this.city,
      location: this.location,
      language: this.language,
      gender: this.gender,
      mobile: this.mobile,
      email: this.email,
    });

    try {
      const response = await axios.post(`http://13.38.59.232/contact/add`, {
        guid: this.guid,
        firstname: this.firstname,
        lastname: this.lastname,
        city: Number(this.city),
        location: this.location,
        language: this.language,
        gender: this.gender,
        mobile: Number(this.mobile),
        email: this.email,
        created: this.created,
      },{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status === 200 && response.data?.status !== false) {
        console.log("success", response.data.response);
        return Contact.fromJson(response.data.response);
      } else {
        // L'API a retourné un message d'erreur explicite
        throw new Error(response.data.message || "Erreur inconnue de l'API");
      }
    }  catch (error: any) {
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

  toJson(){
    return {
      code: this.guid,
      firstname: this.firstname,
      lastname: this.lastname,
      city: this.city,
      location: this.location,
      language: this.language,
      gender: this.gender,
      mobile: this.mobile,
      email: this.email,
      created: this.created
    }
  }
}
export default Contact;
